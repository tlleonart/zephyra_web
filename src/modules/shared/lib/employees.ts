import { StaticImageData } from "next/image";

import camila from "@/modules/home/images/camila.jpeg";
import estefania from "@/modules/home/images/estefania.jpeg";
import juana from "@/modules/home/images/juana.jpeg";
import magdalena from "@/modules/home/images/magdalena.png";
import martina from "@/modules/home/images/martina.jpeg";
import natalia from "@/modules/home/images/natalia.jpg";

export type Employee = {
  name: string;
  role: string;
  specialty: string;
  img: StaticImageData;
};

export const employees: Employee[] = [
  {
    name: "Martina Fay",
    role: "Cofundadora",
    specialty: "Antropóloga - Diplomada en UX Research",
    img: martina,
  },
  {
    name: "Natalia Bertinelli",
    role: "Cofundadora",
    specialty:
      "Antropóloga - Especialista en Innovación Social - Diplomada en Desarrollo Sostenible",
    img: natalia,
  },
  {
    name: "Camila Limansky",
    role: "Consultora",
    specialty: "Ingeniera industrial - Especialista en Energías Renovables",
    img: camila,
  },
  {
    name: "Juana Solotar",
    role: "Consultora",
    specialty: "Estudiante de Ingeniería Ambiental - Certificadora B",
    img: juana,
  },
  {
    name: "Estefanía Grisanti",
    role: "Consultora",
    specialty:
      "Especialista en Implementación y Aditoría de Sistemas de Gestión ISO 9001 y 14001",
    img: estefania,
  },
  {
    name: "Magdalena Blaha",
    role: "Diseñadora Gráfica",
    specialty:
      "Especialista en Social Media y Creación de Contenido - Comunicación Estratégica en Sostenibilidad",
    img: magdalena,
  },
];
