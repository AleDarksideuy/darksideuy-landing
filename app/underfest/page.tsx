'use client'

import { useEffect, useState, useRef } from 'react'

const slides = [
  { id: 0, image: '/underfest-images/D1.png' },
  { id: 1, image: '/underfest-images/D4.png' },
  { id: 2, image: '/underfest-images/D6.png' },
]

export default function UnderfestPage() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const minSwipeDistance = 50

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current
      if (Math.abs(distance) > minSwipeDistance) {
        distance > 0 ? nextSlide() : prevSlide()
      }
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  // Botón volver atrás
  const goBack = () => {
    if (typeof window !== 'undefined') window.history.back()
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-4 sm:px-6 md:px-12 py-10 sm:py-16 text-center"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Fondo con imágenes */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-40' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      

      {/* Contenido fijo */}
      <div className="relative z-20 max-w-4xl px-4 flex flex-col items-center" style={{ paddingTop: '25rem' }} >
        <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-6 leading-tight ">
          Skatepark Underfest
        </h1>
        <p className="text-sm sm:text-base md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
          Nuestra principal herramienta de visibilidad y activación comunitaria, el evento Skatepark Underfest en Manzana 19, reúne música en vivo, freestyle, skateboarding, ferias y artes visuales, creando un espacio cultural autogestionado que conecta generaciones y promueve la cultura urbana.
        </p>

        {/* Botón volver debajo */}
        <button
          onClick={goBack}
          className="bg-white/20 hover:bg-white/40 text-white rounded-full px-6 py-3 backdrop-blur-sm transition text-base sm:text-lg"
          aria-label="Volver atrás"
        >
          ← Volver
        </button>
      </div>
    </section>
  )
}
