// Custom Strapi email provider for Brevo (Sendinblue) HTTP API
// Compatible with @strapi/email v5 provider interface (object with init())
// No SMTP required; uses HTTPS on port 443 to avoid egress blocks

const provider = {
  provider: 'brevo-http',
  name: 'Brevo HTTP',
  /**
   * Initialize provider with options and settings
   * @param {Object} providerOptions - { apiKey, senderName }
   * @param {Object} settings - { defaultFrom, defaultReplyTo }
   * @returns {{ send: (options: any) => Promise<any> }}
   */
  init(providerOptions = {}, settings = {}) {
    const { apiKey, senderName } = providerOptions;
    if (!apiKey) {
      throw new Error('Brevo provider: Missing apiKey. Set BREVO_API_KEY in environment.');
    }

    // Parse a single address which may be:
    // - plain email string: "user@example.com"
    // - RFC5322 string: "Name <user@example.com>"
    // - object: { email, name } or { address, name }
    const parseAddress = (value) => {
      if (!value) return null;
      if (typeof value === 'object') {
        const email = value.email || value.address;
        if (!email) return null;
        return { email, name: value.name };
      }
      if (typeof value === 'string') {
        const trimmed = value.trim();
        // Try to extract from "Name <email>" formats
        const match = trimmed.match(/^(?:\"?([^<\"]+)\"?\s*)?<([^>]+)>$/);
        if (match) {
          const name = match[1] ? match[1].trim() : undefined;
          const email = match[2].trim();
          return { email, name };
        }
        return { email: trimmed };
      }
      return null;
    };

    // Normalize `to` field into Brevo format [{ email, name? }]
    const normalizeTo = (to) => {
      if (!to) return [];
      const arr = Array.isArray(to) ? to : [to];
      return arr.map(parseAddress).filter(Boolean);
    };

    // very small email sanity check (not exhaustive) to avoid making a failing API call
    const looksLikeEmail = (val) => typeof val === 'string' && /.+@.+\..+/.test(val);

    return {
      /**
       * Send email via Brevo HTTP API
       * @param {Object} options - { to, from?, replyTo?, subject, text?, html? }
       */
      async send(options = {}) {
        const { to, from, replyTo, subject, text, html } = options;

        // Determine sender (allow RFC5322 string or object). Fallback to settings.defaultFrom
        const senderParsed = parseAddress(from) || parseAddress(settings.defaultFrom);
        if (!senderParsed?.email) {
          throw new Error('Brevo provider: missing `from` and no `defaultFrom` set. Please set BREVO_SENDER_EMAIL (or EMAIL_FROM) to a validated sender address in Brevo.');
        }
        if (!looksLikeEmail(senderParsed.email)) {
          throw new Error(`Brevo provider: invalid sender email format: "${senderParsed.email}". Set BREVO_SENDER_EMAIL (or EMAIL_FROM) to a verified address like someone@example.com`);
        }

        // Warn if using a freemail domain which can fail DMARC/Google-Yahoo requirements
        const freemailDomains = new Set([
          'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.th', 'hotmail.com', 'outlook.com', 'live.com', 'msn.com', 'icloud.com', 'aol.com'
        ]);
        const senderDomain = senderParsed.email.split('@')[1]?.toLowerCase();
        if (senderDomain && freemailDomains.has(senderDomain)) {
          console.warn(
            `Brevo provider: Using a freemail sender (${senderParsed.email}). Delivery to Gmail/Yahoo may be blocked by DMARC. ` +
            `Add and authenticate a custom domain in Brevo and use something like no-reply@yourdomain.com as BREVO_SENDER_EMAIL.`
          );
        }

        const payload = {
          sender: { email: senderParsed.email, name: senderParsed.name || senderName || 'Strapi' },
          to: normalizeTo(to),
          subject: subject || '',
          htmlContent: html || undefined,
          textContent: text || undefined,
        };

        const replyParsed = parseAddress(replyTo || settings.defaultReplyTo);
        if (replyParsed?.email) {
          payload.replyTo = { email: replyParsed.email };
        }

        const res = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'api-key': apiKey,
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const body = await res.text().catch(() => '');
          const msg = `Brevo provider: HTTP ${res.status} ${res.statusText} - ${body}`;
          throw new Error(msg);
        }

        const json = await res.json().catch(() => ({}));
        if (json?.messageId) {
          console.info(`Brevo provider: accepted, messageId=${json.messageId}`);
        } else {
          console.info('Brevo provider: accepted (no messageId in response)');
        }
        return json;
      },
    };
  },
};

module.exports = provider;
