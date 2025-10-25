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

    // Normalize `to` field into Brevo format [{ email, name? }]
    const normalizeTo = (to) => {
      if (!to) return [];
      const normalizeOne = (entry) => {
        if (!entry) return null;
        if (typeof entry === 'string') return { email: entry };
        if (typeof entry === 'object') {
          return { email: entry.email || entry.address, name: entry.name };
        }
        return null;
      };
      const arr = Array.isArray(to) ? to : [to];
      return arr.map(normalizeOne).filter(Boolean);
    };

    return {
      /**
       * Send email via Brevo HTTP API
       * @param {Object} options - { to, from?, replyTo?, subject, text?, html? }
       */
      async send(options = {}) {
        const { to, from, replyTo, subject, text, html } = options;

        const senderEmail = from || settings.defaultFrom;
        if (!senderEmail) {
          throw new Error('Brevo provider: missing `from` and no `defaultFrom` set.');
        }

        const payload = {
          sender: { email: senderEmail, name: senderName || 'Strapi' },
          to: normalizeTo(to),
          subject: subject || '',
          htmlContent: html || undefined,
          textContent: text || undefined,
        };

        if (replyTo || settings.defaultReplyTo) {
          payload.replyTo = { email: replyTo || settings.defaultReplyTo };
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

        return res.json().catch(() => ({}));
      },
    };
  },
};

module.exports = provider;
