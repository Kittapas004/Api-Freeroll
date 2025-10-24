module.exports = {
  'reset-password': {
    subject: 'Reset Your TurmeRic Password',
    html: ({ URL, USER }) => `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #10b981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 12px; }
            .logo { font-size: 24px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">🌱 TurmeRic</div>
              <h1>Reset Your Password</h1>
            </div>
            <div class="content">
              <p>Hi ${USER?.username || 'there'},</p>
              <p>We received a request to reset your password for your TurmeRic account.</p>
              <p>Click the button below to create a new password:</p>
              <div style="text-align: center;">
                <a href="${URL}" class="button">Reset Password</a>
              </div>
              <p style="color: #6b7280; font-size: 14px;">
                Or copy and paste this link into your browser:<br>
                <a href="${URL}" style="color: #3b82f6;">${URL}</a>
              </p>
              <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <strong>Security tips:</strong><br>
                • This link will expire in 24 hours<br>
                • If you didn't request this, please ignore this email<br>
                • Never share this link with anyone
              </p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} TurmeRic. All rights reserved.</p>
              <p>This is an automated message, please do not reply.</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: ({ URL, USER }) => `
      Hi ${USER?.username || 'there'},

      We received a request to reset your password for your TurmeRic account.

      Click the link below to reset your password:
      ${URL}

      This link will expire in 24 hours.

      If you didn't request this, please ignore this email.

      Best regards,
      TurmeRic Team
    `,
  },
};
