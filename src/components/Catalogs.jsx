import React from 'react';
import imgHidro from '../assets/categories/hidromasajes.png';
import imgBanos from '../assets/categories/banos.png';
import imgLabores from '../assets/categories/labores.png';
import imgCocinas from '../assets/categories/cocinas.png';
import imgOutdoor from '../assets/categories/outdoor.png';

const catalogs = [
  { 
    id: 1, 
    title: "Hidromasajes", 
    subtitle: "Hidrojacuzzi",
    image: imgHidro, 
    material: "bg-[#e5e5e5]",
    file: "/catalogs/hidromasajes.pdf" 
  },
  { 
    id: 2, 
    title: "Zona de labores", 
    subtitle: "Laundry Room",
    image: imgLabores, 
    material: "bg-[#e5e5e5]",
    file: "/catalogs/labores.pdf" 
  },
  { 
    id: 3, 
    title: "Baños", 
    subtitle: "Bath Concepts",
    image: imgBanos, 
    material: "bg-[#e5e5e5]",
    file: "/catalogs/banos.pdf" 
  },
  { 
    id: 4, 
    title: "Cocinas", 
    subtitle: "Kitchen Design",
    image: imgCocinas, 
    material: "bg-[#e5e5e5]",
    file: "/catalogs/cocinas.pdf" 
  },
  { 
    id: 5, 
    title: "Carpintería de Obra", 
    subtitle: "Outdoor & Wood",
    image: imgOutdoor, 
    material: "bg-[#e5e5e5]",
    file: "/catalogs/outdoor.pdf" 
  }
];

export default function Catalogs() {
  return (
    <section className="py-16 md:py-24 bg-white font-montserrat overflow-hidden">
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-black text-[#1a1a1a] tracking-tight uppercase italic">
          Descarga nuestros catálogos
        </h2>
        <div className="w-16 h-[3px] bg-fresh-accent mx-auto mt-4"></div>
      </div>

      {/* Contenedor con Scroll Horizontal */}
      <div className="flex flex-nowrap overflow-x-auto pb-10 pt-4 no-scrollbar snap-x snap-mandatory px-6 md:justify-center">
        {catalogs.map((item) => (
          <div 
            key={item.id} 
            className="flex-none w-[85vw] sm:w-[320px] md:w-[280px] mr-6 snap-center"
          >
            {/* Contenedor del Libro/Catálogo */}
            <div className={`${item.material} p-4 md:p-6 shadow-sm relative group transition-all duration-500 hover:shadow-xl`}>
              <div className="bg-white shadow-lg overflow-hidden flex flex-col">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                {/* Branding en la "portada" del catálogo */}
                <div className="p-4 bg-white text-center">
                  <p className="text-[10px] font-black tracking-[4px] text-[#000] uppercase">Fresh</p>
                  <p className="text-[7px] font-bold tracking-[2px] text-fresh-accent uppercase mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Botón de Descarga */}
              <a 
                href={item.file} 
                download 
                className="absolute -bottom-5 -right-2 md:bottom-10 md:-right-4 w-12 h-12 bg-fresh-accent text-white rounded-full shadow-xl flex items-center justify-center z-20 hover:scale-110 active:scale-95 transition-all duration-300 hover:bg-black"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Título Exterior */}
            <h3 className="mt-8 text-center text-[14px] md:text-[16px] font-black text-black uppercase tracking-[3px]">
              {item.title}
            </h3>
          </div>
        ))}
        {/* Espaciador final para el scroll móvil */}
        <div className="flex-none w-10 md:hidden"></div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}