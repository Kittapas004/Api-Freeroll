export default ({ env }) => ({
  email: {
    config: {
      provider: 'resend',
      providerOptions: {
        apiKey: env('RESEND_API_KEY'),
      },
      settings: {
        defaultFrom: env('EMAIL_FROM', 'onboarding@resend.dev'),
        defaultReplyTo: env('EMAIL_FROM', 'patpatkittaphat@gmail.com'),
        defaultFromName: env('EMAIL_FROM_NAME', 'TurmeRic'),
      },
    },
  },
});
