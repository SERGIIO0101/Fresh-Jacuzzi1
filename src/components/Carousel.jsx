import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importación de tus archivos reales
import imgLavadero from '../assets/carrusel1.png';
import imgSanitario from '../assets/carrusel2.webp';
import imgBanera from '../assets/carrusel3.avif';
import imgSpa from '../assets/carrusel4.avif';
import imgExtra from '../assets/carrusel5.webp';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  { 
    id: 1, 
    name: "Combo Lavadero Gran Espacio", 
    desc: "Combo Lavadero de alta ingeniería, resina reforzada, diseño integral.", 
    price: "950.000",
    img: imgLavadero 
  },
  { 
    id: 2, 
    name: "Combo Sanitario Zafiro One Piece", 
    desc: "Combo Sanitario Zafiro, moderno one-piece dual flush.", 
    price: "990.000",
    img: imgSanitario 
  },
  { 
    id: 3, 
    name: "Bañera Zen Minimal Cascada", 
    desc: "Bañera Zen Minimal, con elegante cascada de agua.", 
    price: "16.200.000",
    img: imgBanera 
  },
  { 
    id: 4, 
    name: "Spa Diamante 32 Jets Luxury", 
    desc: "Spa Diamante, 32 jets ergonómicos, confort premium.", 
    price: "19.500.000",
    img: imgSpa 
  },
  { 
    id: 5, 
    name: "Novedad Fresh 2026", 
    desc: "Ingeniería avanzada para espacios de lujo.", 
    price: "Consultar",
    img: imgExtra 
  }
];

const Carousel = () => {
  return (
    <section className="py-24 bg-fresh-navy overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8">
        
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-fresh-gold text-xs font-black uppercase tracking-[.4em] mb-4 block">Lanzamientos</span>
            <h2 className="text-white text-4xl font-bold tracking-tight uppercase leading-none">Novedades 2026</h2>
          </div>
          <div className="hidden md:flex gap-6">
             <div className="swiper-button-prev-custom text-white cursor-pointer text-2xl hover:text-fresh-gold transition-all duration-300">←</div>
             <div className="swiper-button-next-custom text-white cursor-pointer text-2xl hover:text-fresh-gold transition-all duration-300">→</div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 }
          }}
          className="pb-20 !overflow-visible"
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group bg-[#111418] rounded-2xl overflow-hidden border border-white/5 hover:border-fresh-gold/30 transition-all duration-700 h-full flex flex-col shadow-2xl">
                
                <div className="h-80 overflow-hidden relative bg-white">
                  <img 
                    src={item.img} 
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-1000" 
                    alt={item.name} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-white font-bold uppercase text-lg mb-3 tracking-tight group-hover:text-fresh-gold transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  
                  <div className="mt-auto flex justify-between items-end">
                    <div className="flex flex-col">
                        <span className="text-fresh-gold text-[10px] font-black uppercase tracking-widest mb-1">Inversión</span>
                        <span className="text-white text-xl font-bold tracking-tighter">$ {item.price}</span>
                    </div>
                    <button className="text-fresh-gold text-[9px] font-black uppercase tracking-[0.2em] border-b border-fresh-gold/20 pb-1 hover:border-fresh-gold transition-all">
                      Detalles +
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet { background: white !important; opacity: 0.2; }
        .swiper-pagination-bullet-active { background: #c5a059 !important; opacity: 1; }
      `}</style>
    </section>
  );
};

export default Carousel;