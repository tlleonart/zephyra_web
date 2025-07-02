"use client";

import { suscribeToNewsletter } from "@/app/actions";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Button } from "./ui/Button";
import { Mail, CheckCircle, AlertCircle, Send } from "lucide-react";

interface NewsletterProps {
  email: string;
}

export const NewsletterForm: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<NewsletterProps>({ email: "" });
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(() => ({
      ...email,
      [event.target.name]: event.target.value,
    }));
    // Limpiar error cuando el usuario empieza a escribir
    if (error) setError(null);
  };

  const handleSubscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);

    try {
      const result = await suscribeToNewsletter(formData);

      if (result.success) {
        setSubscribed(true);
        setEmail({ email: "" });
      } else {
        setError(result.error || "Ocurrió un error desconocido");
      }
    } catch (err) {
      console.error("Error de conexión: ", err);
      setError("Error de conexión. Por favor, intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setSubscribed(false);
    setEmail({ email: "" });
    setError(null);
  };

  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {!subscribed ? (
          <div className="text-center lg:text-left">
            {/* Header */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
                <div className="bg-white/10 p-3 sm:p-4 rounded-full">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 leading-tight">
                ¡Mantente al día con nosotros!
              </h2>
              <p className="text-blue-100 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Suscríbete a nuestro newsletter y recibe las últimas novedades
                sobre sostenibilidad, innovación y triple impacto directamente
                en tu bandeja de entrada.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubscribe} className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto lg:mx-0">
                {/* Input Container */}
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    value={email.email}
                    placeholder="tu@email.com"
                    required
                    disabled={isLoading}
                    className="w-full h-12 sm:h-14 pl-12 pr-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading || !email.email.trim()}
                  className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 bg-zmain hover:bg-zmain/90 text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[140px] text-sm sm:text-base"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Suscribirme
                    </>
                  )}
                </Button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="max-w-2xl mx-auto lg:mx-0">
                  <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-3 sm:p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-200 text-sm sm:text-base font-medium">
                        Error en la suscripción
                      </p>
                      <p className="text-red-300 text-xs sm:text-sm mt-1">
                        {error}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Privacy Notice */}
              <div className="max-w-2xl mx-auto lg:mx-0">
                <p className="text-blue-200 text-xs sm:text-sm">
                  Al suscribirte, aceptas recibir emails con contenido
                  relevante. Puedes cancelar tu suscripción en cualquier
                  momento.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Success State */
          <div className="text-center py-8 sm:py-12">
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="bg-green-500/20 p-4 sm:p-6 rounded-full">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-400" />
                </div>
              </div>

              <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">
                ¡Suscripción exitosa!
              </h2>

              <p className="text-blue-100 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
                Te has suscrito correctamente a nuestro newsletter. Recibirás
                contenido valioso sobre sostenibilidad e innovación.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white/10 rounded-lg p-4 sm:p-6">
                  <h3 className="font-semibold text-lg sm:text-xl mb-2">
                    ¿Qué esperar?
                  </h3>
                  <ul className="text-blue-200 text-sm sm:text-base space-y-1 text-left">
                    <li>• Artículos exclusivos sobre sostenibilidad</li>
                    <li>• Tendencias en triple impacto</li>
                    <li>• Casos de éxito y mejores prácticas</li>
                    <li>• Invitaciones a eventos especiales</li>
                  </ul>
                </div>

                <Button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-200 border border-white/20 text-sm sm:text-base"
                >
                  Suscribir otro email
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
