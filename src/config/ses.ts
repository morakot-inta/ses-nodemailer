import dotenv from 'dotenv';

dotenv.config();

export const sesConfig = {
    host: process.env.SES_HOST,
    port: 465,
    secure: true, 
    auth: {
        user: process.env.SES_AUTH_USER, 
        pass: process.env.SES_AUTH_PASS
    }
};
