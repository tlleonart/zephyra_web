import { StaticImageData } from "next/image";

import limansky from "@/modules/home/images/limansky.jpeg";
import cibic from "@/modules/home/images/cibic.jpg";
import mdg from "@/modules/home/images/mdg.png";
import colectar from "@/modules/home/images/colectar.png";

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
