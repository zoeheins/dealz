import nodemailer from 'nodemailer';


const { EMAIL, EMAIL_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: EMAIL_PASSWORD,
  },
});

const sendEmail = (toAddress: string, subject: string, html: string) => {
  const mailOptions = {
    from: EMAIL,
    to: toAddress,
    subject,
    html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    console.log('err', error);
    console.log('info', info);
  });
};

export default sendEmail;
