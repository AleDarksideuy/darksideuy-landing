'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Simula una carga corta (podés ajustarlo según tu lógica real)
    const timeout = setTimeout(() => {
      setIsVisible(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Darksideuy</h1>
      <div className="w-40 h-1 bg-gray-800 overflow-hidden rounded">
        <div className="h-full w-1/3 bg-white animate-loading-bar"></div>
      </div>
    </div>
  )
}

