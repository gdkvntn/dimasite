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
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log("err");
    }
    console.log("succes");
  });
};

module.exports = mailer;
