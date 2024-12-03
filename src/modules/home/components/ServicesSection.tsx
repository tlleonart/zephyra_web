import Image from "next/image";
import { FC } from "react";

const ServicesSection: FC = () => {
    return (
        <section className="mb-12 bg-zmain" id='services'>
            <div className="container mx-auto px-4 pb-10">
                <h2 className="text-3xl font-semibold text-white pt-10 text-center">Servicios</h2>
                <div className="border-t-[1px] w-full border-white mb-10" />
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: 'Diseño y gestión de proyectos de innovación',
                            description: 'Transformamos tus ideas en proyectos concretos con impacto social y ambiental. Desde el diseño estratégico hasta la implementación, te ayudamos a generar valor sostenible para tu organización y comunidad.',
                            image: '/placeholder.svg?height=200&width=300'
                        },
                        {
                            title: 'Certificación / recertificación B Corp',
                            description: 'Acompañamos a tu organización a lo largo del camino de la certificación o recertificación B Corp, incluyendo el proceso de evaluación inicial, verificación, mejora y certificación.',
                            image: '/placeholder.svg?height=200&width=300'
                        },
                        {
                            title: 'Cálculo de huella de carbono',
                            description: 'Medimos la huella de carbono de tu organización, identificando áreas clave para reducir emisiones y avanzar hacia la neutralidad climática. Este servicio incluye análisis detallados y propuestas de estrategias para mitigar tu impacto ambiental.',
                            image: '/placeholder.svg?height=200&width=300'
                        },
                        {
                            title: 'Elaboración de informes de sostenibilidad',
                            description: 'Creamos informes de sostenibilidad claros y completos, alineados con los estándares de GRI y los Objetivos de Desarrollo Sostenible. ',
                            image: '/placeholder.svg?height=200&width=300'
                        },
                        {
                            title: 'Capacitaciones corporativas en sostenibilidad',
                            description: 'Brindamos talleres y capacitaciones personalizados para tu equipo, abordando temáticas clave en sostenibilidad, triple impacto y responsabilidad social empresaria. Inspiramos y fortalecemos el compromiso con la sostenibilidad en toda tu organización.',
                            image: '/placeholder.svg?height=200&width=300'
                        },
                        {
                            title: 'Planes de género y diversidad corporativa',
                            description: 'Realizamos seguimiento y evaluación de proyectos de inversión con impacto social y/o ambiental.',
                            image: '/placeholder.svg?height=200&width=300'
                        },
                        {
                            title: 'Comunicación estratégica en sostenibilidad y triple impacto',
                            description: 'Diseñamos estrategias de comunicación personalizadas que destacan y amplifican los logros de tu organización en sostenibilidad e impacto social.',
                            image: '/placeholder.svg?height=200&width=300'
                        },
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