import Image from "next/image";
import { FC } from "react";

import { Section } from "@/modules/shared/components/ui/section";
import { employees } from "@/modules/shared/lib/employees";

export const TeamSection: FC = () => {
  return (
    <Section
      className="px-4 md:px-6 lg:px-8 min-h-[80vh] flex items-center flex-col gap-10 mb-20"
      id="team"
    >
      <div className="w-full">
        <h3>Equipo</h3>
        <div className="w-full border-t-2 border-black my-2" />
        <div>
          <h1 className="text-3xl font-semibold">
            Nuestro equipo multidisciplinario.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:w-2/3 mx-auto my-10">
          {employees.map(({ name, role, specialty, img }) => (
            <div className="flex flex-col gap-2" key={name}>
              <div className="w-full overflow-hidden aspect-square relative">
                <Image src={img} alt={`${name} image`} />
                <div className="absolute top-0 w-full h-full bg-black text-white text-center flex flex-col justify-center opacity-0 bg-opacity-0 hover:bg-opacity-65 hover:cursor-pointer hover:opacity-100 transition-all duration-500 px-2">
                  <p>{name}</p>
                  <div className="border-t-[1px] w-full border-zmain mb-4" />
                  <p>{role}</p>
                  <p>{specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
