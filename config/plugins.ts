export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp-relay.brevo.com',
        port: 587,
        secure: false,
        auth: {
          user: env('BREVO_SMTP_LOGIN'), // อีเมลที่สมัคร Brevo
          pass: env('BREVO_SMTP_KEY'), // SMTP Key จาก Brevo
        },
      },
      settings: {
        defaultFrom: env('EMAIL_FROM', 'patpatkittaphat@gmail.com'),
        defaultReplyTo: 'patpatkittaphat@gmail.com',
      },
    },
  },
});
