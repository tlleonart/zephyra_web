import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import camila from '../images/camila.jpeg'
import estefania from '../images/estefania.jpeg'
import juana from '../images/juana.jpeg'
import magdalena from '../images/magdalena.png'
import martina from '../images/martina.jpeg'
import melisa from '../images/melisa.jpeg'
import natalia from '../images/natalia.jpg'
import logo from '../../shared/images/flor_light_big.png'

const membersSection: FC = () => {
    interface member {
        name: string,
        rol: string,
        specialty: string,
        imgSrc: StaticImageData
    }

    const members: member[] = [
        {
            name: 'Martina Fay',
            rol: 'Cofundadora',
            specialty: 'Antropóloga - Diplomada en UX Research',
            imgSrc: martina
        }, {
            name: 'Natalia Bertinelli',
            rol: 'Cofundadora',
            specialty: 'Antropóloga - Especialista en Innovación Social - Diplomada en Desarrollo Sostenible',
            imgSrc: natalia
        },
        {
            name: 'Camila Limansky',
            rol: 'Consultora',
            specialty: 'Ingeniera industrial - Especialista en Energías Renovables',
            imgSrc: camila
        }, {
            name: 'Juana Solotar',
            rol: 'Consultora',
            specialty: 'Estudiante de Ingeniería Ambiental - Certificadora B',
            imgSrc: juana
        }, {
            name: 'Estefanía Grisanti',
            rol: 'Consultora',
            specialty: 'Especialista en Implementación y Aditoría de Sistemas de Gestión ISO 9001 y 14001',
            imgSrc: estefania
        }, {
            name: 'Melisa Grisanti',
            rol: 'Consultora',
            specialty: 'Licenciada en Ciencias del Ambiente - Especialista en Medición de Huella de Carbono',
            imgSrc: melisa
        },
        {
            name: 'Magdalena Blaha',
            rol: 'Diseñadora Gráfica',
            specialty: 'Especialista en Social Media y Creación de Contenido - Comunicación Estratégica en Sostenibilidad',
            imgSrc: magdalena
        }
    ]

    return (
        <section className="relative min-h-screen" id='team'>
            <div className="container mx-auto px-4 my-12 mb-10">
                <div className="flex min-h-screen justify-center">
                    <div className="flex flex-col w-full justify-center">
                        <h2 className="text-4xl font-semibold text-zmain text-center mb-4">Nuestro equipo</h2>
                        <div className="border-t-[1px] w-full border-zmain mb-10" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 w-full">
                            {members.map(({
                                name,
                                rol,
                                specialty,
                                imgSrc
                            }) => (
                                <div className="flex flex-col gap-2">
                                    <div className="w-full overflow-hidden aspect-square relative">
                                        <Image src={imgSrc} alt={`${name} image`} />
                                        <div className="absolute top-0 w-full h-full bg-black text-white text-center flex flex-col justify-center opacity-0 bg-opacity-0 hover:bg-opacity-65 hover:cursor-pointer hover:opacity-100 transition-all duration-500 px-2">
                                            <p>{name}</p>
                                            <div className="border-t-[1px] w-full border-zmain mb-4" />
                                            <p>{rol}</p>
                                            <p>{specialty}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="flex flex-col gap-2 p-10 justify-center bg-white items-center">
                                <div className="flex justify-center items-center w-full h-full">
                                    <div className="w-full overflow-hidden aspect-square relative">
                                        <Image src={logo} alt="Zephyra logo" fill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default membersSection