require("dotenv").config();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

let mailer = (message) => {
  return new Promise((res, rej) => {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        rej(err);
      }
      res(info);
    });
  });
};

module.exports = mailer;
