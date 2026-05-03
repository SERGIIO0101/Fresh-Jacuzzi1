import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Para iconos más limpios

// Importación de activos
import imgLavadero from '../assets/carrusel1.png';
import imgSanitario from '../assets/carrusel2.webp';
import imgBanera from '../assets/carrusel3.avif';
import imgSpa from '../assets/carrusel4.avif';
import imgExtra from '../assets/carrusel5.webp';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  { id: 1, name: "Combo Lavadero Gran Espacio", desc: "Ingeniería en resina reforzada con diseño integral ergonómico.", price: "950.000", img: imgLavadero },
  { id: 2, name: "Sanitario Zafiro One Piece", desc: "Sistema dual flush de alto desempeño y estética minimalista.", price: "990.000", img: imgSanitario },
  { id: 3, name: "Bañera Zen Minimal Cascada", desc: "Relajación profunda con sistema de llenado tipo cascada.", price: "16.200.000", img: imgBanera },
  { id: 4, name: "Spa Diamante 32 Jets Luxury", desc: "Hidroterapia de última generación con confort premium.", price: "19.500.000", img: imgSpa },
  { id: 5, name: "Novedad Fresh 2026", desc: "Explora la nueva frontera del diseño hidráulico de lujo.", price: "Consultar", img: imgExtra }
];

const Carousel = () => {
  return (
    <section className="py-20 md:py-32 bg-fresh-navy overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Cabecera del Carrusel */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
          <div className="animate-reveal">
            <span className="text-fresh-gold text-[10px] md:text-xs font-black uppercase tracking-[.5em] mb-4 block">
              Lanzamientos Exclusivos
            </span>
            <h2 className="text-white text-4xl md:text-6xl font-display italic leading-none">
              Novedades <span className="font-sans not-italic font-black uppercase text-2xl md:text-4xl block md:inline tracking-tighter">2026</span>
            </h2>
          </div>

          {/* Navegación Custom */}
          <div className="flex gap-4 md:gap-6">
            <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-fresh-gold hover:border-fresh-gold hover:text-fresh-navy transition-all duration-500">
              <ChevronLeft size={20} />
            </button>
            <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-fresh-gold hover:border-fresh-gold hover:text-fresh-navy transition-all duration-500">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2} // Efecto de corte para invitar a deslizar en móvil
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 }
          }}
          className="!overflow-visible"
        >
          {products.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="group bg-white/[0.02] backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5 hover:border-fresh-gold/40 transition-all duration-700 h-full flex flex-col">
                
                {/* Contenedor Imagen con fondo blanco suave para resaltar productos */}
                <div className="h-72 md:h-80 overflow-hidden relative bg-[#F9F9F9] flex items-center justify-center p-8">
                  <img 
                    src={item.img} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-1000 ease-out" 
                    alt={item.name} 
                  />
                  <div className="absolute top-4 right-4 bg-fresh-navy text-fresh-gold text-[8px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Premium
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-white font-bold uppercase text-lg mb-3 tracking-tight group-hover:text-fresh-gold transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-white/40 text-sm font-medium leading-relaxed mb-8">
                    {item.desc}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-white/30 text-[9px] uppercase font-bold tracking-widest mb-1">Inversión</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-fresh-gold text-xs font-light">$</span>
                        <span className="text-white text-2xl font-display italic tracking-tighter">{item.price}</span>
                      </div>
                    </div>
                    
                    <button className="flex items-center gap-2 text-fresh-gold text-[10px] font-black uppercase tracking-widest group/btn">
                      Explorar
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination { bottom: -10px !important; }
        .swiper-pagination-bullet { background: white !important; width: 6px; height: 6px; opacity: 0.2; transition: all 0.3s; }
        .swiper-pagination-bullet-active { background: #c5a059 !important; width: 24px; border-radius: 10px; opacity: 1; }
        .swiper-button-disabled { opacity: 0.3; cursor: not-allowed; }
      `}</style>
    </section>
  );
};

export default Carousel;