const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yassineahmedali02@gmail.com',
    pass: 'cqdvokidxpgvnlhj', 
  },
});

app.post('/sendEmail', async (req, res) => {
  const { to_email, subject, text } = req.body;

  try {
    const mailOptions = {
      from: 'yassineahmedali02@gmail.com',
      to: to_email,
      subject: subject,
      text: text 
    };

    await smtpTransport.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).send('Email sent');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
