import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail, MapPin, Phone } from "lucide-react";
import { FC } from "react";
import ContactForm from "./ContactForm";

export const Footer: FC = () => {
  return (
    <footer
      className="bg-[#213C2F] text-white p-8 flex flex-col md:flex-row justify-between items-center gap-8"
      id="contact"
    >
      <div className="container mx-auto grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Contacto</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Phone className="mr-2" size={18} />
              <a href="tel:+5493413160008" className="hover:underline">
                +54 9 341 316-0008 / +34 600 290 414
              </a>
            </li>
            <li className="flex items-center">
              <Mail className="mr-2" size={18} />
              <a
                href="mailto:info@zephyraconsultora.com"
                className="hover:underline"
              >
                info@zephyraconsultora.com
              </a>
            </li>
            <li className="flex items-center">
              <LinkedInLogoIcon className="mr-2" />
              <a
                href="https://www.linkedin.com/company/zephyra-consultora-social/"
                target="_blank"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center">
              <InstagramLogoIcon className="mr-2" />
              <a
                href="https://www.instagram.com/zephyraconsultorasocial/"
                target="_blank"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
            <li className="flex items-center">
              <MapPin className="mr-2" size={18} />
              Argentina / España
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </footer>
  );
};
