import Image from "next/image";
import { FC } from "react";

const WeSection: FC = () => {
    return (
        <section className="mb-12 relative">
            <div className="container mx-auto px-4">
                <div className="md:w-2/3">
                    <h2 className="text-3xl font-semibold text-[#213C2F] mb-4">Nosotros</h2>
                    <p className="text-gray-700">
                        En Zephyra, nos dedicamos a ayudar a empresas y organizaciones a implementar estrategias sostenibles que generen un impacto positivo en la sociedad, el medio ambiente y la economía.
                    </p>
                </div>
                <div className="hidden md:block absolute right-0 top-0 w-1/3 h-full">
                    <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Equipo de Zephyra trabajando en proyectos sostenibles"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>
    )
}

export default WeSection