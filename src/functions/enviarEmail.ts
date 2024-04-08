// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const app = express();
// // aplicar a politica de cors
// app.use(express.json());
// app.use(cors());
// app.post('/send', async (req: any, res: any) => {
//     const { send } = req.body;
//     const corpoEmail = '<h1>Olá, tudo bem?</h1><p>Seu teste grátis está sendo preparado, em breve você receberá um e-mail com as informações de acesso.</p><p>Atenciosamente, equipe Salesforce</p>';
//     const transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false, // Use true for port 465, false for all other ports
//         auth: {
//             user: "challengesalesforcefiap@gmail.com",
//             pass: "q k k a x j f s t h n m g c h c",
//         },
//     });

//     const info = await transporter.sendMail({
//         from: '"Confirmação de solicitação: Seu teste grátis está sendo preparado" <challengesalesforcefiap@gmail.com>', // sender address
//         to: send, // list of receivers
//         subject: "Bem vindo(a)", // Subject line
//         text: "Estamos felizes com você aqui", // plain text body
//         html: corpoEmail, // html body
//     });

//     console.log("Message sent: %s", info.messageId);
//     res.json({ status: 'Ok' });
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });