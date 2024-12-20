import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import limansky from '../images/limansky.jpeg'
import cibic from '../images/cibic.jpg'
import mdg from '../images/mdg.png'
import colectar from '../images/colectar.png'
import Link from "next/link";

const ClientsSection: FC = () => {
    interface cliente {
        name: string
        image: StaticImageData
        href: string
    }

    const clientes: cliente[] = [
        {
            name: 'Limansky S.A.',
            image: limansky,
            href: 'https://www.limansky.com/'
        }, {
            name: 'Cibic',
            image: cibic,
            href: 'https://www.cibic.com.ar/'
        }, {
            name: 'Mercado de Gafas',
            image: mdg,
            href: 'https://www.mercadodegafas.com.ar/'
        },
    ]

    const aliances: cliente[] = [{
        name: 'Colectar',
        image: colectar,
        href: 'https://www.instagram.com/colectar.ros/'
    }]

    return (
        <section className="min-h-screen" id='aliances'>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-zmain mb-4 text-center">Clientes</h2>
                <div className="border-t-[1px] w-full border-zmain mb-10" />
                <div className="flex flex-wrap justify-center gap-4">
                    {clientes.map(({ name, image, href }) => (
                        <div
                            key={name}
                            className="bg-[#FFFFFF] w-32 h-32 rounded-full flex items-center justify-center overflow-hidden"
                        >
                            <Link href={href} target="_blank">
                                <Image
                                    src={image}
                                    alt={`Logo del Cliente ${name}`}
                                    width={100}
                                    height={100}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container mx-auto px-4 mt-24">
                <h2 className="text-3xl font-semibold text-zmain mb-4 text-center">Alianzas</h2>
                <div className="border-t-[1px] w-full border-zmain mb-10" />
                <div className="flex flex-wrap justify-center gap-4">
                    {aliances.map(({ name, image, href }) => (
                        <div
                            key={name}
                            className="bg-[#FFFFFF] w-32 h-32 rounded-full flex items-center justify-center overflow-hidden"
                        >
                            <Link href={href} target="_blank">
                                <Image
                                    src={image}
                                    alt={`Logo del Cliente ${name}`}
                                    width={100}
                                    height={100}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default ClientsSection