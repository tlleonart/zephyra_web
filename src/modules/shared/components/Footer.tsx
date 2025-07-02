import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail, MapPin, Phone } from "lucide-react";
import { FC } from "react";
import ContactForm from "./ContactForm";

export const Footer: FC = () => {
  return (
    <footer className="bg-[#213C2F] text-white p-8" id="contact">
      <div className="container mx-auto">
        {/* Layout principal: columna en mobile, fila en desktop */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Sección de contacto */}
          <div className="w-full lg:w-auto">
            <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center lg:justify-start">
                <Phone className="mr-3 flex-shrink-0" size={18} />
                <a
                  href="tel:+5493413160008"
                  className="hover:underline text-center lg:text-left"
                >
                  +54 9 341 316-0008 / +34 600 290 414
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <Mail className="mr-3 flex-shrink-0" size={18} />
                <a
                  href="mailto:info@zephyraconsultora.com"
                  className="hover:underline text-center lg:text-left"
                >
                  info@zephyraconsultora.com
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <LinkedInLogoIcon className="mr-3 flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/company/zephyra-consultora-social/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-center lg:text-left"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <InstagramLogoIcon className="mr-3 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/zephyraconsultorasocial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-center lg:text-left"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <MapPin className="mr-3 flex-shrink-0" size={18} />
                <span className="text-center lg:text-left">
                  Argentina / España
                </span>
              </li>
            </ul>
          </div>

          {/* Formulario de contacto */}
          <div className="w-full lg:w-auto lg:max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </footer>
  );
};
