export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        service: 'gmail',
        auth: {
          user: env('EMAIL_FROM', 'patpatkittaphat@gmail.com'),
          pass: env('GMAIL_APP_PASSWORD'), // Gmail App Password (NOT regular password)
        },
      },
      settings: {
        defaultFrom: env('EMAIL_FROM', 'patpatkittaphat@gmail.com'),
        defaultReplyTo: env('EMAIL_FROM', 'patpatkittaphat@gmail.com'),
        defaultFromName: env('EMAIL_FROM_NAME', 'TurmeRic'),
      },
    },
  },
});
