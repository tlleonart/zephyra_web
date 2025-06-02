"use server";

import prisma from "../../lib/prisma";

type ActionResult = {
  success?: boolean;
  message?: string;
  error?: string;
};

export async function enviarFormulario(
  formData: FormData
): Promise<ActionResult> {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const content = formData.get("content") as string | null;

  if (!name || !email || !content) {
    return {
      error: "Por favor complete todos los campos.",
    };
  }

  try {
    const response = await fetch(
      "https://zephyraconsultora.com/api/send-mail",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, content }),
      }
    );

    if (!response.ok) {
      return {
        success: false,
        message: "Error al enviar correo.",
      };
    }

    return { success: true, message: "Contacto enviado con éxito!" };
  } catch (error) {
    console.error(error);
    return { error: "Error al enviar contacto." };
  }
}

export async function suscribeToNewsletter(
  formData: FormData
): Promise<ActionResult> {
  const email = formData.get("email") as string;

  try {
    const result = await prisma.newsletter.create({
      data: {
        email,
      },
    });

    if (!result) {
      return {
        success: false,
        message: "Error al suscribirse al newsletter.",
      };
    }

    return {
      success: true,
      message: "Suscripción al newsletter exitosa!",
    };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Error al suscribirse al newsletter." };
  }
}
