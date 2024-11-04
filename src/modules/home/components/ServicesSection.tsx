import Image from "next/image";
import { FC } from "react";

const ServicesSection: FC = () => {
    return (
        <section className="mb-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-[#213C2F] mb-4">Nuestros Servicios</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: 'Gestión de Proyectos de Triple Impacto',
                            description: 'Diseñamos proyectos personalizados en las áreas de impacto socioambiental, sostenibilidad y responsabilidad social corporativa.',
                            image: '/placeholder.svg?height=200&width=300'
                        },
                        {
                            title: 'Planes de Sostenibilidad',
                            description: 'Asesoramos en el diseño de estrategias de sostenibilidad, garantizando un triple impacto: social, ambiental y económico.',
                            image: '/placeholder.svg?height=200&width=300'
                        },
                        {
                            title: 'Monitoreo y Evaluación',
                            description: 'Realizamos seguimiento y evaluación de proyectos de inversión con impacto social y/o ambiental.',
                            image: '/placeholder.svg?height=200&width=300'
                        }
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#E6F0E8] p-6 rounded-lg overflow-hidden"
                        >
                            <Image
                                src={service.image}
                                alt={`Ilustración de ${service.title}`}
                                width={300}
                                height={200}
                                className="rounded-lg mb-4 w-full"
                            />
                            <h3 className="text-xl font-semibold text-[#213C2F] mb-2">{service.title}</h3>
                            <p className="text-gray-700">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection