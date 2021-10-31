const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors({ origin: "*" }));
// app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

// app.get("/", (req, res) => {
//   res.send(
//     "<h1 style='text-align: center'>Wellcome to FunOfHeuristic <br><br>😃👻😃👻😃👻😃👻😃</h1>"
//   );
// });

app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = {name:"valiko"}
  sendMail(user, info => {
    console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  let transporter = nodemailer.createTransport({
    service:'gmail',
    host: "dummym761@gmail.com",
    auth: {
      user: "dummym761@gmail.com",
      pass: "MyMainWeb12"
    }
  });

  let mailOptions = {
    from: 'dummym761@gmail.com',
    to: "avtandil.merebashvili.2@gmail.com",
    subject: "Wellcome to Fun Of Heuristic 👻", 
    html: `<h1>Hi ${user.name} </h1><br>
    <h4>Thanks for joining us</h4>`
  };

  let info = await transporter.sendMail(mailOptions);

  callback(info);
}