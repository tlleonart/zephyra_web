import { Section } from "@/modules/shared/components/ui/section";
import { FC } from "react";
import { aliances, clients } from "@/modules/shared/lib/clients";
import Link from "next/link";
import Image from "next/image";

export const ClientsSection: FC = () => {
  return (
    <Section className="px-4 md:px-6 lg:px-8 min-h-[80vh] flex items-center flex-col gap-10 text-center py-16">
      <div className="w-full" id="clients">
        <div className="flex flex-col w-full">
          <h1 className="w-full text-3xl">Ya confían en nosotros</h1>
          <div className="flex bg-white w-full justify-around my-10">
            {clients.map(({ name, logo, href }) => (
              <div
                key={name}
                className="bg-[#FFFFFF] w-60 h-60 flex items-center justify-center overflow-hidden grayscale-[0.7] hover:grayscale-0 transition-all duration-300 ease-in-out"
              >
                <Link href={href} target="_blank">
                  <Image
                    src={logo}
                    alt={`Logo del Cliente ${name}`}
                    width={500}
                    height={200}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full text-center" id="aliances">
          <h1 className="text-3xl">Alianzas</h1>
          <div className="flex w-full bg-white justify-center">
            {aliances.map(({ name, logo, href }) => (
              <div
                key={name}
                className="bg-[#FFFFFF] w-60 h-60 flex items-center justify-center overflow-hidden grayscale-[0.7] hover:grayscale-0 transition-all duration-300 ease-in-out"
              >
                <Link href={href} target="_blank">
                  <Image
                    src={logo}
                    alt={`Logo del Cliente ${name}`}
                    width={500}
                    height={200}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
