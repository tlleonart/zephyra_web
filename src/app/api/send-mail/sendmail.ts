import { createTransport } from "nodemailer";

export const sendMail = (name: string, from: string, content: string) => {
    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'Nuevo contacto',
        text: `
        RECIBISTE UN NUEVO CONTACTO DE ${name} ${from}:  
        ${content}
    `
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error al enviar correo: ', error)
            throw new Error
        }
        console.log('Correo enviado.')
    })
}