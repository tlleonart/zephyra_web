import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail, Phone } from "lucide-react";
import { FC } from "react";
import ContactForm from "./ContactForm";

const Footer: FC = () => {
    return (
        <footer className="bg-[#213C2F] text-white p-8 flex justify-between items-center" id="contact">
            <div className="container mx-auto grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contacto</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <Phone className="mr-2" size={18} />
                            <a href="tel:+5493413160008" className="hover:underline">+54 9 341 316-0008 / +54 9 341 587-8506</a>
                        </li>
                        <li className="flex items-center">
                            <Mail className="mr-2" size={18} />
                            <a href="mailto:zephyracs.info@gmail.com" className="hover:underline">zephyracs.info@gmail.com</a>
                        </li>
                        <li className="flex items-center">
                            <LinkedInLogoIcon className="mr-2" />
                            <a href="https://www.linkedin.com/company/zephyra-consultora-social/" target='_blank' className="hover:underline">Linkedn</a>
                        </li>
                        <li className="flex items-center">
                            <InstagramLogoIcon className="mr-2" />
                            <a href="https://www.instagram.com/zephyraconsultorasocial/" target='_blank' className="hover:underline">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <ContactForm />
            </div>
        </footer>
    )
}

export default Footer