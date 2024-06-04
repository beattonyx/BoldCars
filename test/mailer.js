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
    subject: 'Письмо отправленное через node.js',
    text: 'Текст самого письма '
    }
    transporter.sendMail(mailOptions)