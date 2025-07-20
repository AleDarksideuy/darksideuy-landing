'use client'

import Link from 'next/link'
import { FaInstagram, FaTiktok, FaYoutube} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="max-w-7xl mx-auto px-4 w-full text-center flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Redes sociales */}
        <div className="flex space-x-6 text-2xl">
          <Link
            href="https://www.instagram.com/darkside.uy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-400 transition"
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://www.tiktok.com/@darksideuy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-gray-400 transition"
          >
            <FaTiktok />
          </Link>

          <Link
           href="https://www.youtube.com/@Darksideuy" 
           target="_blank" 
           rel="noopener noreferrer"
           className="hover:text-gray-400 transition"
          >
            <FaYoutube />
          </Link>
        </div>

        {/* Texto derechos reservados */}
        <div className="text-sm text-gray-400 select-none">
          © {new Date().getFullYear()} Darksideuy. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
