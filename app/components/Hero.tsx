'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import clsx from 'clsx';

const slides = [
  {
    title: 'Skatepark Underfest',
    description:
      'Un evento que fusiona música, cultura y adrenalina en un solo lugar. La escena urbana encuentra su voz.',
    imageDesktop: '/hero-images/DH2.png',
    imageMobile: '/hero-images/D2new.png',
    buttonText: 'Ver más',
    link: '/underfest',
  },
  {
    title: 'Colaboradores',
    description:
      'Conocé a las marcas, artistas y aliados que hacen posible cada uno de nuestros proyectos.',
    imageDesktop: '/hero-images/DH3.png',
    imageMobile: '/hero-images/D3.png',
    buttonText: 'Ver más',
    link: '/colaboradores',
  },
  {
    title: 'Nuestro Equipo',
    description:
      'Personas con pasión y visión, trabajando día a día para construir una escena artística sostenible.',
    imageDesktop: '/hero-images/DH5.png',
    imageMobile: '/hero-images/D5.png',
    buttonText: 'Ver más',
    link: '/equipo',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Establece el valor inicial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % slides.length),
    onSwipedRight: () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length),
    trackMouse: true,
  });

  return (
    <section className="relative h-[90vh] w-full overflow-hidden" {...handlers}>
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={isMobile ? slides[current].imageMobile : slides[current].imageDesktop}
            alt={slides[current].title}
            className="h-full w-full object-cover brightness-75"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-8 sm:px-16 lg:px-24 py-6 text-white">
            <h1 className="text-xl sm:text-3xl font-bold mb-1">{slides[current].title}</h1>
            <p className="max-w-lg mb-6 text-sm sm:text-base leading-snug">
              {slides[current].description}
            </p>
            <Link href={slides[current].link} legacyBehavior>
              <a className="bg-white text-black font-medium px-4 py-1.5 text-sm rounded hover:bg-gray-200 transition">
                {slides[current].buttonText}
              </a>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Flechas navegación - solo en desktop */}
      <div className="hidden sm:flex justify-between items-center absolute top-1/2 left-0 right-0 px-4 transform -translate-y-1/2 z-10">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          aria-label="Anterior"
          className="text-white hover:text-gray-400 transition"
        >
          <FaArrowLeft size={32} />
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          aria-label="Siguiente"
          className="text-white hover:text-gray-400 transition"
        >
          <FaArrowRight size={32} />
        </button>
      </div>

      {/* Dots - solo en móvil */}
      <div className="flex sm:hidden absolute bottom-6 left-1/2 -translate-x-1/2 space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={clsx(
              'w-3 h-3 rounded-full',
              index === current ? 'bg-white' : 'bg-white/40'
            )}
            onClick={() => setCurrent(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}



