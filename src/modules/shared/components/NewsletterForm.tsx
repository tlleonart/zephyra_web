"use client";

import { suscribeToNewsletter } from "@/app/actions";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Button } from "./ui/Button";

interface NewsletterProps {
  email: string;
}

export const NewsletterForm: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<NewsletterProps>({ email: "" });
  const [suscribed, setSuscribed] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(() => ({
      ...email,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSuscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Suscribiendo al newsletter a ", email);
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    setError(null);

    const result = await suscribeToNewsletter(formData);

    if (result.success) {
      setIsLoading(false);
      setSuscribed(true);
    } else {
      console.error("Error intentando suscribir: ", result.error);
      setError(result.error || "Ocurrió un error desconocido");
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full flex bg-blue-500 text-white justify-start items-center align-middle p-10">
      {!suscribed ? (
        <form onSubmit={handleSuscribe}>
          <h1 className="font-semibold text-3xl m-4">
            ¡Suscribite a nuestro newsletter para mantenerte informado!
          </h1>
          <input
            onChange={handleInputChange}
            type="email"
            name="email"
            placeholder="Ingresa tu correo eletrónico..."
            required
            className="m-4 p-2 placeholder:text-sm border-none w-[500px] h-12 text-black"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="m-4 p-4 rounded-none text-xl bg-zmain h-12"
          >
            {isLoading ? "Suscribiendo..." : "Suscribirme"}
          </Button>
          {error && (
            <p className="m-4 p-2 bg-red-500 rounded-lg text-sm">{error}</p>
          )}
        </form>
      ) : (
        <h1>¡Suscripción exitosa!</h1>
      )}
    </div>
  );
};
