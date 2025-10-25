import path from 'path';

export default ({ env }) => ({
  email: {
    config: {
      // Use Brevo Transactional Email HTTP API to avoid SMTP egress issues on PaaS
      // Custom provider implemented in ./providers/brevo
      // Resolve to absolute path so it works from dist/ as well
      provider: path.join(process.cwd(), 'providers', 'brevo'),
      providerOptions: {
        apiKey: env('BREVO_API_KEY'), // Brevo API key (Transactional emails)
        senderName: env('BREVO_SENDER_NAME', env('EMAIL_FROM_NAME', 'Freeroll')),
      },
      settings: {
        // IMPORTANT: Use a sender that is validated in Brevo (domain or single sender)
        // If BREVO_SENDER_EMAIL is not set, we fall back to EMAIL_FROM (if any)
        // Leaving it empty will cause a helpful runtime error on send with guidance.
        defaultFrom: env('BREVO_SENDER_EMAIL', env('EMAIL_FROM', '')),
        defaultReplyTo: env('BREVO_REPLY_TO', env('EMAIL_REPLY_TO', '')),
      },
    },
  },
});
