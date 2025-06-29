"use client";

import { enviarFormulario } from "@/app/actions";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import {
  CheckCircle,
  Loader2,
  Mail,
  User,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/Button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

interface MessageProps {
  name: string;
  email: string;
  content: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  content?: string;
}

/**
 * Formulario de contacto mejorado con validación y diseño responsive
 */
const ContactForm: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<MessageProps>({
    name: "",
    email: "",
    content: "",
  });
  const [mailSent, setMailSent] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "El nombre es requerido";
        if (value.trim().length < 2)
          return "El nombre debe tener al menos 2 caracteres";
        return undefined;

      case "email":
        if (!value.trim()) return "El email es requerido";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Ingresa un email válido";
        return undefined;

      case "content":
        if (!value.trim()) return "El mensaje es requerido";
        if (value.trim().length < 10)
          return "El mensaje debe tener al menos 10 caracteres";
        return undefined;

      default:
        return undefined;
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setMessage((prev) => ({
      ...prev,
      [name]: value,
    }));

    const fieldError = validateField(name, value);
    setValidationErrors((prev) => ({
      ...prev,
      [name]: fieldError,
    }));
  };

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {
      name: validateField("name", message.name),
      email: validateField("email", message.email),
      content: validateField("content", message.content),
    };

    setValidationErrors(errors);
    return !Object.values(errors).some((error) => error !== undefined);
  };

  const handleSendMail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const result = await enviarFormulario(formData);

    if (result.success) {
      setMailSent(true);
    } else {
      setError(result.error || "Ocurrió un error desconocido.");
    }

    setIsLoading(false);
  };

  const resetForm = () => {
    setMessage({ name: "", email: "", content: "" });
    setMailSent(false);
    setError(null);
    setValidationErrors({});
  };

  if (mailSent) {
    return (
      <div className="text-center space-y-6 py-8">
        <div className="flex justify-center">
          <div className="relative">
            <CheckCircle className="w-16 h-16 text-green-500" />
            <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-green-200 animate-ping" />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-green-700">
            ¡Mensaje enviado correctamente!
          </h2>
          <p className="text-muted-foreground">
            Te responderemos a la brevedad. Gracias por contactarnos.
          </p>
        </div>

        <Button onClick={resetForm} variant="outline" className="gap-2">
          <Mail className="w-4 h-4" />
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          ¿Buscás incorporar la sostenibilidad en tu organización?
        </h2>
        <p className="text-muted-foreground">
          Contáctanos por medio de este formulario y te responderemos a la
          brevedad
        </p>
      </div>

      <form onSubmit={handleSendMail} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Nombre y apellido
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={message.name}
            onChange={handleInputChange}
            disabled={isLoading}
            placeholder="Ingresa tu nombre completo"
            className={cn(
              validationErrors.name &&
                "border-destructive focus-visible:ring-destructive"
            )}
            aria-describedby={validationErrors.name ? "name-error" : undefined}
          />
          {validationErrors.name && (
            <p
              id="name-error"
              className="text-sm text-destructive flex items-center gap-1"
            >
              <AlertCircle className="w-3 h-3" />
              {validationErrors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={message.email}
            onChange={handleInputChange}
            disabled={isLoading}
            placeholder="tu@email.com"
            className={cn(
              validationErrors.email &&
                "border-destructive focus-visible:ring-destructive"
            )}
            aria-describedby={
              validationErrors.email ? "email-error" : undefined
            }
          />
          {validationErrors.email && (
            <p
              id="email-error"
              className="text-sm text-destructive flex items-center gap-1"
            >
              <AlertCircle className="w-3 h-3" />
              {validationErrors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="content" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Mensaje
          </Label>
          <Textarea
            id="content"
            name="content"
            value={message.content}
            onChange={handleInputChange}
            disabled={isLoading}
            placeholder="Cuéntanos sobre tu proyecto o consulta..."
            className={cn(
              "min-h-[120px] resize-none",
              validationErrors.content &&
                "border-destructive focus-visible:ring-destructive"
            )}
            aria-describedby={
              validationErrors.content ? "content-error" : undefined
            }
          />
          {validationErrors.content && (
            <p
              id="content-error"
              className="text-sm text-destructive flex items-center gap-1"
            >
              <AlertCircle className="w-3 h-3" />
              {validationErrors.content}
            </p>
          )}
        </div>

        {error && (
          <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
            <p className="text-destructive text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              {error}
            </p>
          </div>
        )}

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full gap-2 py-6 text-base font-medium"
          size="lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Enviando mensaje...
            </>
          ) : (
            <>
              <Mail className="w-4 h-4" />
              Enviar mensaje
            </>
          )}
        </Button>
      </form>

      <div className="text-center text-xs text-muted-foreground">
        <p>
          Al enviar este formulario, aceptas que nos pongamos en contacto
          contigo para responder tu consulta.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
