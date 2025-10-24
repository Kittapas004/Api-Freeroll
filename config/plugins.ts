export default ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('EMAIL_SMTP_PASSWORD'), // SendGrid API Key
      },
      settings: {
        defaultFrom: env('EMAIL_FROM', 'patpatkittaphat@gmail.com'),
        defaultReplyTo: env('EMAIL_FROM', 'patpatkittaphat@gmail.com'),
        defaultFromName: env('EMAIL_FROM_NAME', 'TurmeRic'),
      },
    },
  },
});
