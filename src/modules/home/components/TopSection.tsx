import { FC } from "react";
import Image from "next/image";
import banner from '../images/welcomeBanner.jpeg'

const TopSection: FC = () => {
    return (
        <section>
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                <Image
                    src={banner}
                    alt="Imagen representativa de sostenibilidad y proyectos de triple impacto"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4">
                        Crecimiento y transformación en contextos desafiantes
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TopSection