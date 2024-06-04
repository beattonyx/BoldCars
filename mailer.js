const [subject, body] = process.argv.slice(2);

require('dotenv').config();
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
    })
    
const mailOptions = {
    from: 'serdiuk.toscha@gmail.com',
    to: 'serdiuk.toscha@gmail.com',
    subject: subject,
    text: body
    }
    transporter.sendMail(mailOptions)