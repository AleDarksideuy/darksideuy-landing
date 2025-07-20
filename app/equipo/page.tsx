// app/equipo/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const team = [
  {
    name: "Marcos Dal'broi",
    image: "/equipo/marcos.png",
    role: "Dirección General y Artística / Postproducción",
    description: `Cofundador y motor del proyecto. Responsable de la visión global de Darkside UY, el diseño de sus estructuras narrativas, conceptuales y operativas. Se encarga de la dirección general, la planificación estratégica, el desarrollo de identidad visual, la producción creativa y la edición/postproducción audiovisual.

Tiene experiencia como realizador, editor y director creativo. Coordina los equipos, define las líneas estéticas de cada proyecto, y garantiza que cada pieza visual o sonora tenga coherencia con la narrativa general de la productora.`,
  },
  {
    name: "Anaí Mayor Muñoz",
    image: "/equipo/anai.jpeg",
    role: "Producción / Gestión Creativa / Audiovisual",
    description: `Productora cultural, gestora creativa y realizadora audiovisual. Coordina la logística de eventos, sesiones y actividades. Es responsable del contacto con artistas, la planificación operativa, la organización del equipo en cada instancia y el desarrollo de piezas visuales (fotografía, cámara, cobertura).

Su sensibilidad visual y su capacidad de ejecución hacen posible que las ideas bajen a tierra. También cumple un rol esencial en la escucha activa y en la contención creativa de artistas jóvenes.`,
  },
  {
    name: "Alejandro Camarano",
    image: "/equipo/alejandro.jpeg",
    role: "Comunicación / Redes / Producción Sonora / Programación Web",
    description: `Responsable de la comunicación digital, la estética en redes y la identidad discursiva de la marca. También produce, graba y edita sonido para sesiones y visuales, y gestiona el desarrollo y mantenimiento de la web de Darkside UY y de colaboradores. Su perfil técnico y creativo conecta arte, contenido y comunidad digital.`,
  },
  {
    name: "Nicolás Pérez",
    image: "/equipo/nicolas.png",
    role: "Técnico de sonido e iluminación",
    description: `Colaborador externo con equipamiento propio. Encargado de asegurar el estándar técnico en los eventos públicos y en las sesiones en Casa Suburbana. Brinda soporte en montaje, operación de sonido en vivo, iluminación y grabación multicanal.

Su presencia permite que los eventos sean técnicamente profesionales, reduciendo la improvisación y elevando la experiencia del público y de los artistas. Además, es una figura clave para consolidar el equipo técnico a futuro.`,
  },
];

export default function EquipoPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen px-4 pt-10 pb-20 bg-black text-white flex flex-col items-center">
      <Link
        href="/"
        className="mb-8 text-white underline text-sm hover:opacity-75"
      >
        ← Volver atrás
      </Link>

      <h1 className="text-4xl font-bold mb-10 text-center">Nuestro Equipo</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="bg-neutral-900 rounded-xl shadow-lg overflow-hidden p-4 cursor-pointer flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            onClick={() => setSelected(selected === index ? null : index)}
          >
            <div className="w-full aspect-square relative mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-md"
              />
            </div>

            <h2 className="text-xl font-semibold text-center">{member.name}</h2>
            <p className="text-sm text-center text-neutral-400 mb-2">{member.role}</p>

            <AnimatePresence>
              {selected === index && (
                <motion.div
                  key="desc"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-sm text-neutral-300 mt-2 overflow-hidden text-justify"
                >
                  <p>{member.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


