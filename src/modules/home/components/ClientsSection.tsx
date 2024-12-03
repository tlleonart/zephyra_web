import Image from "next/image";
import { FC } from "react";

const ClientsSection: FC = () => {
    const clientes = [
        {
            name: 'Limansky S.A.',
            image: 'srcImg'
        }, {
            name: 'Cibic',
            image: 'srcImg'
        }, {
            name: 'Mercado de Gafas',
            image: 'srcImg'
        },
    ]

    return (
        <section className="mb-12 min-h-screen" id='clients'>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-[#213C2F] mb-4">Clientes</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {[1, 2, 3, 4].map((client) => (
                        <div
                            key={client}
                            className="bg-[#D1E6D7] w-32 h-32 rounded-full flex items-center justify-center overflow-hidden"
                        >
                            <Image
                                src={`/placeholder.svg?height=128&width=128&text=Cliente${client}`}
                                alt={`Logo del Cliente ${client}`}
                                width={128}
                                height={128}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ClientsSection