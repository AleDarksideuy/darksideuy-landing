'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const collaborators = [
  {
    name: 'INJU',
    image: '/collaborators/INJU.jpg',
  },
  {
    name: 'Soriano Fértil',
    image: '/collaborators/SORIANO FERTIL.jpg',
  },
  {
    name: 'Casa de la Cultura de Mercedes',
    image: '/collaborators/CASA DE LA CULTURA.jpg',
  },
  {
    name: 'Secretaría de Deporte',
    image: '/collaborators/SECRETARIA DE DEPORTES.jpg',
  },
]

export default function ColaboradoresPage() {
  return (
    <main className="min-h-screen bg-black px-4 pb-12 flex flex-col items-center text-white">
      {/* Título y descripción */}
      <div className="max-w-4xl w-full text-center pt-32 md:pt-40 mb-12 px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Colaboradores</h1>
        <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto">
          Estos son algunos de los aliados que hacen posible el movimiento cultural que impulsa DarkSideUy.
        </p>

        {/* Línea fina animada */}
        <div className="h-[2px] bg-white mt-6 mx-auto max-w-xl animate-growLine"></div>
      </div>

      {/* Logos en cuadraditos con animación fade secuencial */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {collaborators.map((collab, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.4, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden bg-black">
              <Image
                src={collab.image}
                alt={collab.name}
                width={300}
                height={300}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="mt-3 text-center text-sm md:text-base font-semibold">{collab.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Botón de volver */}
      <Link href="/">
        <span className="mt-12 inline-block px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-black hover:text-white border-2 border-black hover:border-white transition">
          Volver a inicio
        </span>
      </Link>
    </main>
  )
}
