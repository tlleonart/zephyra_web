import { NextRequest, NextResponse } from "next/server";
import { createTransport } from 'nodemailer'

interface SendEmailRequestBody {
    name: string;
    email: string;
    content: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        const body: SendEmailRequestBody = await req.json();

        const { name, email, content } = body;

        if (!name || !email || !content) {
            return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
        }

        const transporter = createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Contacto Zephyra" <${email}>`,
            to: 'zephyracs.info@gmail.com',
            subject: 'Nuevo contacto',
            text: `
            RECIBISTE UN NUEVO CONTACTO DE ${name} ${email}:  
            ${content}
        `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Envio satisfactorio" })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error al procesar la solicitud' }, { status: 500 });
    }
}