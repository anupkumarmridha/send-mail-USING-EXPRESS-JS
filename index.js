const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// array of emails
const emails = [
  'anupkumarmridha.net@gmail.com',
  'anupkumarmridha2020@gmail.com'
];

app.post('/send-emails', (req, res) => {
  // create the transporter object
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'doremonmax2018@gmail.com', // replace with your email address
        pass: 'idhpsxwtszziumll' // replace with your email password
    }
  });

  // loop through all emails and send emails
  for (let i = 0; i < emails.length; i++) {
    // create the email options
    let mailOptions = {
      from: '"doremon max" <doremonmax2018@gmail.com>', // sender address
      to: emails[i], // recipient address
      subject: 'Test Mail', // email subject
      text: 'This is a test email.' // email body in plain text
    };

    // send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(`Error sending email to ${emails[i]}: ${error}`);
        res.status(500).json({ message: `Error sending email to ${emails[i]}: ${error}` });
      } else {
        console.log(`Email sent to ${emails[i]}`);
        res.status(200).json({ message: `Email sent to ${emails[i]}` });
      }
    });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
