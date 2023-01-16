const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json()); // to parse json in request body

app.post('/send-emails', (req, res) => {
    // create the transporter object
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'doremonmax2018@gmail.com', // replace with your email address
            pass: 'idhpsxwtszziumll' // replace with your email password
        }
    });

    // get emails, subject and text from request body
    const { emails, subject, text } = req.body;

    // loop through all emails and send emails
    for (let i = 0; i < emails.length; i++) {
        // create the email options
        let mailOptions = {
            from: '"doremon max" <doremonmax2018@gmail.com>', // sender address
            to: emails[i], // recipient address
            subject: subject, // email subject
            text: text // email body in plain text
        };

        // send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(`Error sending email to ${emails[i]}: ${error}`);
                res.status(500).json({ message: `Error sending email to ${emails[i]}: ${error}` });
            } else {
                console.log(`Email sent to ${emails[i]}`);
                res.status(200).json({ message: `Email sent succesfully` });
            }
        });
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
