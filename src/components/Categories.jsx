import React from 'react';
// Importación de imágenes AVIF
import img1 from '../assets/image1.avif';
import img2 from '../assets/image2.avif';
import img3 from '../assets/image3.avif';
import img4 from '../assets/image4.avif';
import img5 from '../assets/image5.avif';

const categories = [
  { id: 1, name: "Hidromasajes", img: img1 },
  { id: 2, name: "Baños", img: img2 },
  { id: 3, name: "Zona de Labores", img: img3 },
  { id: 4, name: "Cocinas", img: img4 },
  { id: 5, name: "Zona Outdoor", img: img5 },
];

export default function Categories() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Título Editorial Centrado */}
        <div className="mb-16 md:mb-24 text-center">
          <span className="text-fresh-gold text-[10px] md:text-xs font-black uppercase tracking-[0.5em] block mb-4">
            Explora nuestra ingeniería
          </span>
          <h2 className="font-display italic text-4xl md:text-6xl text-fresh-navy leading-tight">
            Tu hogar espera por un <br className="hidden md:block" />
            <span className="font-sans not-italic font-black uppercase text-2xl md:text-4xl tracking-tighter">nuevo estilo</span>
          </h2>
        </div>

        {/* Contenedor de Círculos: Grid responsivo para evitar desbordamiento */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Contenedor del Círculo */}
              <div className="relative mb-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-fresh-gold/10 border border-slate-100 group-hover:border-fresh-gold/30">
                  <img 
                    src={cat.img} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  />
                </div>
                
                {/* Badge de "Nuevo" o Decorativo (Opcional) */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-fresh-gold rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 shadow-lg border-2 border-white"></div>
              </div>
              
              {/* Textos y Etiquetas */}
              <div className="text-center flex flex-col items-center">
                <h3 className="text-fresh-navy text-lg md:text-xl font-black uppercase tracking-tighter mb-2 transition-colors duration-300 group-hover:text-fresh-gold">
                  {cat.name}
                </h3>
                
                <div className="relative flex flex-col items-center">
                  <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 group-hover:text-fresh-navy">
                    Ver catálogo
                  </span>
                  {/* Línea animada */}
                  <div className="w-8 h-[1px] bg-fresh-gold mt-2 transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}