import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";

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
      return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
    }

    const transporter = createTransport({
      host: "c2810738.ferozo.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Contacto Zephyra" <${email}>`,
      to: "info@zephyraconsultora.com",
      subject: "Nuevo contacto",
      text: `
            RECIBISTE UN NUEVO CONTACTO DE ${name} ${email}:  
            ${content}
        `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Envio satisfactorio" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
