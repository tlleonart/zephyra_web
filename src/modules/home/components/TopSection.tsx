import { FC } from "react";
import Image from "next/image";

const TopSection: FC = () => {
    return (
        <section className="mb-12">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                <Image
                    src="/placeholder.svg?height=500&width=1920"
                    alt="Imagen representativa de sostenibilidad y proyectos de triple impacto"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4">
                        Impulsando un futuro sostenible
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-[#213C2F] mb-4">Bienvenidos a Zephyra</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Somos una consultora especializada en proyectos de triple impacto, sostenibilidad y responsabilidad social corporativa.
                </p>
            </div>
        </section>
    )
}

export default TopSection