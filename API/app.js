const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3001);

app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    console.log(`The mail has beed send and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "dummym761@gmail.com",
      pass: "MyMainWeb12"
    }
  });

  let mailOptions = {
    from: 'avtandil.merebashvili.2@gmail.com', // sender address
    to: "avtandil.merebashvili.2@gmail.com", // list of receivers
    subject: `${user.subject}`, // Subject line
    html: `<h1>from: ${user.mail}: </h1> ${user.text}`
  };


  let info = await transporter.sendMail(mailOptions);
  callback(info)
}
