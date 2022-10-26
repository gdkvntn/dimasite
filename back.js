const express = require("express");
const bodyParser = require("body-parser");
const mailer = require("./mailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
let user = undefined;
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/fonts", express.static(__dirname + "/fonts"));
app.use("/img", express.static(__dirname + "/img"));
app.use(bodyParser.urlencoded({ extended: false }));
app.post("", (req, res) => {
  const message = {
    from: `${process.env.EMAIL}`,
    to: "antonhudkou@gmail.com",
    subject: `${req.body.subject}`,
    text: `Email : ${req.body.userMail} 
    Сообщение : ${req.body.userText}`,
  };
  mailer(message);
  user = req.body;
  res.redirect("/");
});

app.get("/", (req, res) => {
  if (typeof user !== "object") return res.sendFile(__dirname + "/index.html");
  user = undefined;
});

app.listen(PORT, () =>
  console.log(`server listening http://localhost:${PORT}`)
);
