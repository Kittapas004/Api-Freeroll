export default ({ env }) => ({
  email: {
    config: {
      // Use Brevo Transactional Email HTTP API to avoid SMTP egress issues on PaaS
      // Custom provider implemented in ./providers/brevo
      provider: './providers/brevo',
      providerOptions: {
        apiKey: env('BREVO_API_KEY'), // Brevo API key (Transactional emails)
        senderName: env('EMAIL_FROM_NAME', 'Freeroll'),
      },
      settings: {
        defaultFrom: env('EMAIL_FROM', 'patpatkittaphat@gmail.com'),
        defaultReplyTo: 'patpatkittaphat@gmail.com',
      },
    },
  },
});
