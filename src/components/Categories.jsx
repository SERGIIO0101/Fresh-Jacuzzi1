import React from 'react';
// Importación de imágenes AVIF
import img1 from '../assets/image1.avif';
import img2 from '../assets/image2.avif';
import img3 from '../assets/image3.avif';
import img4 from '../assets/image4.avif';

const categories = [
  { id: 1, name: "Hidromasajes", img: img1 },
  { id: 2, name: "Bañeras", img: img2 },
  { id: 3, name: "Cocinas", img: img4 },
  { id: 4, name: "Zona de Labores", img: img3 },
];

export default function Categories() {
  return (
    <section className="relative py-16 md:py-32 bg-white overflow-hidden z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Título Editorial */}
        <div className="mb-16 md:mb-24 text-center">
          <span className="text-fresh-gold text-[10px] md:text-xs font-black uppercase tracking-[0.5em] block mb-4">
            Ingeniería de Vanguardia
          </span>
          <h2 className="text-4xl md:text-6xl text-fresh-navy leading-tight font-black uppercase tracking-tighter">
            <span className="font-serif italic capitalize font-normal block md:inline md:mr-4">Tu hogar espera</span> 
            por un nuevo estilo
          </h2>
          <div className="w-12 h-[3px] bg-fresh-gold mx-auto mt-6"></div>
        </div>

        {/* Grid de 4 Categorías: 2 columnas en móvil, 4 en escritorio */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 md:gap-16">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Contenedor del Círculo */}
              <div className="relative mb-6">
                <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-fresh-gold/20 border border-slate-100 group-hover:border-fresh-gold/50">
                  <img 
                    src={cat.img} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  />
                </div>
                
                {/* Indicador flotante al hacer hover */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-fresh-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg border-2 border-white scale-50 group-hover:scale-100">
                   <svg className="w-4 h-4 text-fresh-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                   </svg>
                </div>
              </div>
              
              {/* Textos y Etiquetas */}
              <div className="text-center flex flex-col items-center w-full px-2">
                <h3 className="text-fresh-navy text-base md:text-xl font-black uppercase tracking-tighter mb-2 transition-colors duration-300 group-hover:text-fresh-gold">
                  {cat.name}
                </h3>
                
                <div className="relative flex flex-col items-center">
                  <span className="text-slate-400 text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 group-hover:text-fresh-navy">
                    Ver colección
                  </span>
                  {/* Línea animada: de centro hacia afuera */}
                  <div className="w-0 h-[1.5px] bg-fresh-gold mt-2 transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}