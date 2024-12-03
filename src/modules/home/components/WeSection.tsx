import { FC } from "react";

const WeSection: FC = () => {
    return (
        <section className="relative h-screen" id='about'>
            <div className="container mx-auto px-4">
                <div className="flex flex-col w-full justify-center">
                    <h2 className="text-4xl font-semibold text-zmain text-center mb-4">Somos consultoría en sostenibilidad</h2>
                    <p className="text-gray-700">
                        Convertimos el compromiso con el triple impacto en acciones concretas, diseñando e implementando estrategias que hacen de la sostenibilidad
                        una realidad tangible para empresas y organizaciones públicas y privadas.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WeSection