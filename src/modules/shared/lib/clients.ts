import { StaticImageData } from "next/image";

import limansky from "@/modules/home/images/limansky.webp";
import cibic from "@/modules/home/images/cibic.webp";
import mdg from "@/modules/home/images/mdg.webp";
import colectar from "@/modules/home/images/colectar.webp";

export type client = {
  name: string;
  logo: StaticImageData;
  href: string;
};

export const clients: client[] = [
  {
    name: "Limansky S.A.",
    logo: limansky,
    href: "https://www.limansky.com/",
  },
  {
    name: "Cibic",
    logo: cibic,
    href: "https://www.cibic.com.ar/",
  },
  {
    name: "Mercado de Gafas",
    logo: mdg,
    href: "https://www.mercadodegafas.com.ar/",
  },
];

export const aliances: client[] = [
  {
    name: "Colectar",
    logo: colectar,
    href: "https://www.instagram.com/colectar.ros/",
  },
];
