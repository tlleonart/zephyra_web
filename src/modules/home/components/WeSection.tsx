import Image from "next/image";
import { FC } from "react";

const WeSection: FC = () => {
    const team = [
        {
            name: 'Martina Fay',
            rol: 'Cofundadora',
            specialty: 'Antropóloga - Diplomada en UX Research',
            imgSrc: ''
        }, {
            name: 'Natalia Bertinelli',
            rol: 'Cofundadora',
            specialty: 'Antropóloga - Especialista en Innovación Social - Diplomada en Desarrollo Sostenible',
            imgSrc: ''
        }, {
            name: 'Camila Limansky',
            rol: 'Consultora',
            specialty: 'Ingeniera industrial - Especialista en Energías Renovables',
            imgSrc: ''
        }, {
            name: 'Juana Solotar',
            rol: 'Consultora',
            specialty: 'Estudiante de Ingeniería Ambiental - Certificadora B',
            imgSrc: ''
        }, {
            name: 'Estefanía Grisanti',
            rol: 'Consultora',
            specialty: 'Especialista en Implementación y Aditoría de Sistemas de Gestión ISO 9001 y 14001',
            imgSrc: ''
        }, {
            name: 'Melisa Grisanti',
            rol: 'Consultora',
            specialty: 'Licenciada en Ciencias del Ambiente - Especialista en Medición de Huella de Carbono',
            imgSrc: ''
        }, {
            name: 'Magdalena Blaha',
            rol: 'Diseñadora Gráfica',
            specialty: 'Especialista en Social Media y Creación de Contenido - Comunicación Estratégica en Sostenibilidad',
            imgSrc: ''
        }
    ]
    return (
        <section className="relative h-screen bg-zmain" id='about'>
            <div className="container mx-auto px-4">
                <div className="flex h-screen justify-center">
                    <div className="flex flex-col w-full justify-center">
                        <h2 className="text-4xl font-semibold text-white text-center mb-4">Hacemos consultoría en sostenibilidad</h2>
                        <div className="border-t-[1px] w-full border-white mb-4" />
                        <p className="text-gray-200 text-center mb-4">
                            Convertimos el compromiso con el triple impacto en acciones concretas, diseñando e implementando estrategias que hacen de la sostenibilidad
                            una realidad tangible para empresas y organizaciones públicas y privadas.
                        </p>
                        <p className="text-gray-200 text-center">
                            Asumimos el reto de generar crecimiento y transformación en contextos desafiantes,
                            otorgándoles valor agregado a las organizaciones y generando soluciones innovadoras
                            y sostenibles.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default WeSection