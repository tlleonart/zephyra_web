'use server';

import { ConvexHttpClient } from 'convex/browser';
import { api } from '../../../../convex/_generated/api';
import { createTransport } from 'nodemailer';

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export interface RequestResetResult {
  success: boolean;
  error?: string;
}

export const requestPasswordReset = async (
  email: string
): Promise<RequestResetResult> => {
  try {
    const result = await convex.mutation(api.adminUsers.requestPasswordReset, {
      email,
    });

    // If we got a token, send the email
    if (result.token && result.userEmail) {
      const transporter = createTransport({
        host: 'c2810738.ferozo.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${result.token}`;

      await transporter.sendMail({
        from: `"Zephyra Consultora" <${process.env.EMAIL_USER}>`,
        to: result.userEmail,
        subject: 'Restablecer contraseña - Zephyra Consultora',
        html: `
          <h1>Hola ${result.userName},</h1>
          <p>Has solicitado restablecer tu contraseña.</p>
          <p>Haz clic en el siguiente enlace para crear una nueva contraseña:</p>
          <p><a href="${resetUrl}">${resetUrl}</a></p>
          <p>Este enlace expira en 1 hora.</p>
          <p>Si no solicitaste este cambio, puedes ignorar este email.</p>
          <br/>
          <p>- Equipo Zephyra Consultora</p>
        `,
      });
    }

    return { success: true };
  } catch (error) {
    console.error('Password reset error:', error);
    // Always return success to prevent email enumeration
    return { success: true };
  }
};

export interface ResetPasswordResult {
  success: boolean;
  error?: string;
}

export const resetPassword = async (
  token: string,
  newPassword: string
): Promise<ResetPasswordResult> => {
  try {
    await convex.mutation(api.adminUsers.resetPassword, {
      token,
      newPassword,
    });

    return { success: true };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Error al restablecer contraseña';
    return { success: false, error: message };
  }
};
