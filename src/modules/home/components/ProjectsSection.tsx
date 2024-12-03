import Image from "next/image";
import { FC } from "react";

const ProjectsSection: FC = () => {
    return (
        <section className="mb-12" id='projects'>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-zmain mb-4 text-center">Proyectos</h2>
                <div className="border-t-[1px] w-full border-zmain mb-10" />
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        {
                            title: 'Proyecto 1',
                            description: 'Descripción breve del proyecto y su impacto.',
                            image: '/placeholder.svg?height=250&width=400'
                        },
                        {
                            title: 'Proyecto 2',
                            description: 'Descripción breve del proyecto y su impacto.',
                            image: '/placeholder.svg?height=250&width=400'
                        }
                    ].map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#F0F8F2] p-6 rounded-lg overflow-hidden"
                        >
                            <div className="relative h-48 mb-4">
                                <Image
                                    src={project.image}
                                    alt={`Imagen del ${project.title}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-[#213C2F] mb-2">{project.title}</h3>
                            <p className="text-gray-700">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection