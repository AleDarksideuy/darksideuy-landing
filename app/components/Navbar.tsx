'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [show, setShow] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scroll hacia abajo y pasó 50px => ocultar navbar
        setShow(false)
      } else {
        // Scroll hacia arriba => mostrar navbar
        setShow(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-white font-bold text-xl hover:text-gray-300 transition">
            Darksideuy
          </a>
        </Link>
        <Link href="/contacto">
        <button className="px-5 py-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition">
          Contacto
        </button>
        </Link>
      </div>
    </nav>
  )
}
