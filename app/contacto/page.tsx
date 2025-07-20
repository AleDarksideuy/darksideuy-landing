'use client'

import React from 'react'

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-20 flex flex-col items-center">
      <div className="max-w-3xl w-full text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contacto</h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Si sos artista visual, musical o digital, completá el formulario que te corresponda. Nos pondremos en contacto a la brevedad.
        </p>
        <div className="h-[2px] bg-white mt-6 mx-auto w-40 animate-growLineCenter"></div>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-sm">
        <a
          href="https://forms.gle/3fLCA5NvZHKDfiGUA"
          target="_blank"
          rel="noopener noreferrer"
          className="  hover:bg-white hover:text-black transitio text-white font-bold py-4 px-6 rounded-xl text-center "
        >
          Formulario Artista Visual
        </a>

        <a
          href="https://forms.gle/qU99xkbmHKLsFmVi8"
          target="_blank"
          rel="noopener noreferrer"
          className=" border-white  hover:bg-white hover:text-black transitio text-white font-bold py-4 px-6 rounded-xl text-center transition"
        >
          Formulario Artista Musical
        </a>

        <a
          href="https://forms.gle/CDZvRzu4dKDMUMe86"
          target="_blank"
          rel="noopener noreferrer"
          className=" border-white text-white hover:bg-white hover:text-black transitio font-bold py-4 px-6 rounded-xl text-center transition"
        >
          Formulario Artistas Digitales
        </a>
      </div>
    </main>
  )
}

