import React from 'react';
// Importamos tus imágenes AVIF
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
  { id: 5, name: "Zona Outdoor", img: img5 }, // Cambié el nombre según tu imagen
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        
        {/* Título centrado según la imagen */}
        <div className="mb-12 text-center">
          <h2 className="text-fresh-navy text-2xl md:text-3xl font-bold tracking-tight">
            Tu hogar espera por un nuevo estilo
          </h2>
        </div>

        {/* Contenedor Flex para los círculos */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-20">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Círculo de Imagen */}
              <div className="relative w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden mb-6 shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:scale-105 border-4 border-transparent group-hover:border-fresh-gold/20">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Textos */}
              <h3 className="text-fresh-navy text-lg md:text-xl font-bold mb-1">
                {cat.name}
              </h3>
              
              <span className="text-fresh-gold text-sm font-medium tracking-wide">
                Ver productos
              </span>
              
              {/* Línea decorativa que aparece en hover */}
              <div className="w-0 h-[2px] bg-fresh-gold transition-all duration-300 group-hover:w-full mt-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}