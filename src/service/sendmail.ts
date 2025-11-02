import nodemailer from 'nodemailer';
import { sesConfig } from '../config/ses.js';

const transporter = nodemailer.createTransport({
    host: sesConfig.host,
    port: sesConfig.port,
    secure: sesConfig.secure,
    auth: {
        user: sesConfig.auth.user,
        pass: sesConfig.auth.pass
    }
});

export const sendEmail = async (to: string, subject: string, text: string) => {
    const mailOptions = {
      from: 'no-reply@coders.cx',
        to,
        subject,
        text
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email: ' + error);
    }
};