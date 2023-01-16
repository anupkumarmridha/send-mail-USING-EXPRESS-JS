# send-mail-USING-EXPRESS-JS

If two-factor authentication is enabled on your Gmail account, you will need to generate an App Password in order to send emails using the Gmail SMTP server. Here's how you can do it:

Go to your Google Account settings page.<b>
Click on "Security" in the left-hand sidebar.<b>
Under "Signing in to Google," click on "App Passwords"<b>
Select the "Mail" option and the "Other (Custom name)" option.<b>
Enter a name for the app password, such as "Express.js" and click on "Generate."<b>
Google will generate a unique 16-character app password for you.<b>
Use this generated password instead of your normal Gmail password in your Express.js application when creating the transporter object.<b>
By using an App Password, you can continue to use two-factor authentication for your Gmail account while still allowing your application to send emails through the Gmail SMTP server. Also, remember that App Passwords are only for accounts with 2-Step Verification turned on.<b>

You can also revoke the app password at any time if you suspect it may have been compromised or if you no longer need it.
