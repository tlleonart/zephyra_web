"use server";

import prisma from "../../lib/prisma";
import { PrismaClientKnownRequestError } from "./generated/prisma/runtime/library";

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

    console.log(result);

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
    if (error instanceof PrismaClientKnownRequestError) {
      console.log("Error de prisma conocido: ", error.code);
      if (error.code === "P2002") {
        console.log("Error de duplicado de email: ", error.meta);
        return {
          success: false,
          error: "Este correo ya está suscrito al newsletter.",
        };
      }
    }

    return { success: false, error: "Error al suscribirse al newsletter." };
  }
}
