import { Section } from "@/modules/shared/components/ui/section";
import { FC } from "react";
import { aliances, clients } from "@/modules/shared/lib/clients";
import Link from "next/link";
import Image from "next/image";

export const ClientsSection: FC = () => {
  return (
    <Section className="px-4 md:px-6 lg:px-8 min-h-[80vh] flex items-center flex-col gap-10">
      <div className=" w-full" id="clients">
        <h3 id="about">Clientes</h3>
        <div className="w-full border-t-2 border-black my-2" />
        <div className="flex w-full bg-white">
          <h1 className="text-3xl font-semibold">Confían en nosotros.</h1>
          {clients.map(({ name, logo, href }) => (
            <div
              key={name}
              className="bg-[#FFFFFF] w-60 h-60 flex items-center justify-center overflow-hidden grayscale-[0.7] hover:grayscale-0 transition-all duration-300 ease-in-out"
            >
              <Link href={href} target="_blank">
                <Image
                  src={logo}
                  alt={`Logo del Cliente ${name}`}
                  width={100}
                  height={100}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex w-full bg-white" id="aliances">
          <h1 className="text-3xl font-semibold">Nuestras alianzas.</h1>
          {aliances.map(({ name, logo, href }) => (
            <div
              key={name}
              className="bg-[#FFFFFF] w-60 h-60 flex items-center justify-center overflow-hidden grayscale-[0.7] hover:grayscale-0 transition-all duration-300 ease-in-out"
            >
              <Link href={href} target="_blank">
                <Image
                  src={logo}
                  alt={`Logo del Cliente ${name}`}
                  width={100}
                  height={100}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
