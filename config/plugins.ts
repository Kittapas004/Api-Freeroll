export default ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('EMAIL_SMTP_PASSWORD'), // SendGrid API Key ที่มีอยู่แล้ว
      },
      settings: {
        defaultFrom: env('EMAIL_FROM', 'patpatkittaphat@gmail.com'),
        defaultReplyTo: 'patpatkittaphat@gmail.com',
      },
    },
  },
});
