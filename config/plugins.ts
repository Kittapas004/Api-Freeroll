export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('EMAIL_SMTP_HOST', 'smtp.sendgrid.net'),
        port: parseInt(env('EMAIL_SMTP_PORT', '587')),
        secure: false, // true for 465, false for other ports
        auth: {
          user: env('EMAIL_SMTP_USERNAME', 'apikey'),
          pass: env('EMAIL_SMTP_PASSWORD'),
        },
        tls: {
          rejectUnauthorized: false
        }
      },
      settings: {
        defaultFrom: env('EMAIL_FROM', 'patpatkittaphat@gmail.com'),
        defaultReplyTo: env('EMAIL_FROM', 'patpatkittaphat@gmail.com'),
        defaultFromName: env('EMAIL_FROM_NAME', 'TurmeRic'),
      },
    },
  },
});
