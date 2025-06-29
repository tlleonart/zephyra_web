import { FC } from "react";
import Image from "next/image";
import background from "@/modules/home/images/background.jpg";

export const WelcomeBackground: FC = () => {
  return (
    <>
      <div className="absolute inset-0 z-0 h-screen">
        <Image
          src={background}
          alt="Background"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </>
  );
};
