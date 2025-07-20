// app/layout.tsx
'use client'

import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const heroImg = document.getElementById('hero-img') as HTMLImageElement

    if (heroImg?.complete) {
      // ya estaba cargada
      setIsLoading(false)
    } else if (heroImg) {
      heroImg.onload = () => setIsLoading(false)
    } else {
      // fallback si no hay imagen (evita loader infinito)
      const timeout = setTimeout(() => setIsLoading(false), 3000)
      return () => clearTimeout(timeout)
    }
  }, [])

  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`} >
        {isLoading && <LoadingScreen />}
        {!isLoading && (
          <>
            <Navbar />
             <div className="bg-black">
              {children}
             </div>
            <Footer />
          </>
        )}
      </body>
    </html>
  )
}


