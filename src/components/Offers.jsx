import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { sendWhatsappMessage } from '../utils/whatsapp';

// Importación de Imágenes reales desde assets
import imgLavadero from '../assets/offer1.png'; 
import imgSanitario from '../assets/offer2.jpeg'; 
import imgBanera from '../assets/offer3.jpeg'; 
import imgSpa from '../assets/offer4.jpg'; 

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const offerProducts = [
  { 
    id: 1, 
    name: "Combo Lavadero Gran Espacio", 
    price: "950.000", 
    oldPrice: "1.250.000", 
    ref: "Combo_L1", 
    specs: { dim: "100 x 60 cm", mat: "Resina Reforzada" },
    image: imgLavadero 
  },
  { 
    id: 2, 
    name: "Sanitario Zafiro One Piece", 
    price: "990.000", 
    oldPrice: "1.350.000", 
    ref: "CS-ZAF", 
    specs: { dim: "Dual Flush", mat: "Porcelana Técnica" },
    image: imgSanitario 
  },
  { 
    id: 3, 
    name: "Bañera Zen Minimal Cascada", 
    price: "16.200.000", 
    oldPrice: "19.500.000", 
    ref: "BZN-MIN", 
    specs: { dim: "1.70 x 0.75 m", mat: "Acrílico Alta Gama" },
    image: imgBanera 
  },
  { 
    id: 4, 
    name: "Spa Diamante 32 Jets Luxury", 
    price: "19.500.000", 
    oldPrice: "24.000.000", 
    ref: "SD-32", 
    specs: { dim: "2.10 x 2.10 m", mat: "Acrílico de Autor" },
    image: imgSpa 
  }
];

export default function Offers() {
  return (
    <section className="py-16 md:py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        
        {/* Cabecera Editorial */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 pb-8 md:pb-10 border-b border-slate-100">
          <div className="max-w-xl">
            <h2 className="font-display italic text-4xl lg:text-6xl text-fresh-navy leading-none mb-4">
              Inversión <span className="font-sans not-italic font-black uppercase text-lg md:text-xl tracking-tighter block mt-2">Preferencial</span>
            </h2>
            <p className="text-slate-400 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold">
              Piezas de ingeniería seleccionadas para entrega inmediata
            </p>
          </div>
          <div className="mt-6 md:mt-0">
             <span className="text-[8px] md:text-[9px] font-black text-fresh-gold uppercase tracking-widest border border-fresh-gold/30 px-6 md:px-8 py-2 md:py-3 bg-fresh-gold/5">
               Unidades Limitadas
             </span>
          </div>
        </div>

        {/* Carrusel Corregido */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1.1} // Clave: muestra un pedazo del siguiente slide en móvil
          loop={true}
          autoplay={{ delay: 6000 }}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 }
          }}
          className="offers-swiper !overflow-visible md:border md:border-slate-200 md:bg-slate-200"
        >
          {offerProducts.map((p) => (
            <SwiperSlide key={p.id} className="h-auto p-2 md:p-0">
              <div className="bg-white group h-full flex flex-col relative transition-all duration-500 border border-slate-100 md:border-0 md:border-r md:border-slate-200 shadow-sm md:shadow-none">
                
                {/* Visual Técnico 4:5 */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" 
                  />
                  <div className="absolute top-0 right-0 bg-fresh-navy text-fresh-gold text-[7px] md:text-[8px] font-black px-4 md:px-5 py-2 md:py-2.5 uppercase tracking-[0.3em] z-10">
                    Oferta Técnica
                  </div>
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/90 backdrop-blur-md text-fresh-navy text-[7px] md:text-[8px] font-black px-3 md:px-4 py-2 uppercase tracking-widest shadow-lg">
                    Ref: {p.ref}
                  </div>
                </div>
                
                {/* Info con Ajuste de Padding para Móvil */}
                <div className="p-6 md:p-10 flex flex-col flex-grow">
                  
                  {/* Título */}
                  <div className="min-h-[60px] md:min-h-[85px] mb-4 md:mb-6 flex items-start">
                    <h3 className="font-display text-2xl md:text-3xl italic text-fresh-navy leading-[1.1] group-hover:text-fresh-gold transition-colors duration-500">
                      {p.name}
                    </h3>
                  </div>

                  {/* Especificaciones Estilo Blueprint */}
                  <div className="grid grid-cols-2 gap-0 mb-8 md:mb-10 py-4 md:py-6 border-y border-slate-100">
                    <div className="flex flex-col pr-2 md:pr-4">
                      <span className="text-[6px] md:text-[7px] uppercase font-bold text-fresh-gold tracking-[0.2em] mb-1">Dimensión</span>
                      <span className="text-[9px] md:text-[10px] font-black text-fresh-navy uppercase tracking-tight italic">
                        {p.specs.dim}
                      </span>
                    </div>
                    <div className="flex flex-col border-l border-slate-100 pl-4 md:pl-6">
                      <span className="text-[6px] md:text-[7px] uppercase font-bold text-fresh-gold tracking-[0.2em] mb-1">Material</span>
                      <span className="text-[9px] md:text-[10px] font-black text-fresh-navy uppercase tracking-tight italic">
                        {p.specs.mat}
                      </span>
                    </div>
                  </div>
                  
                  {/* Precios */}
                  <div className="mb-8 md:mb-10 flex items-end justify-between">
                    <div className="flex flex-col">
                      <span className="text-[8px] md:text-[9px] text-slate-300 line-through font-bold mb-1 italic tracking-tight">
                        $ {p.oldPrice}
                      </span>
                      <div className="flex items-start gap-1">
                        <span className="text-xs font-light text-fresh-navy mt-1 opacity-50">$</span>
                        <span className="font-display text-3xl md:text-5xl text-fresh-navy italic leading-none tracking-tighter">
                          {p.price}
                        </span>
                      </div>
                    </div>
                    <div className="text-right hidden sm:block">
                       <span className="text-[7px] font-black text-fresh-gold uppercase tracking-[0.2em] block leading-none">Inversión</span>
                       <span className="text-[6px] font-bold text-slate-400 uppercase tracking-widest mt-1 block">Iva Incluido</span>
                    </div>
                  </div>
                  
                  {/* Botón CTA */}
                  <div className="mt-auto">
                    <button 
                      onClick={() => sendWhatsappMessage(p.name, p.ref)}
                      className="w-full bg-fresh-navy text-white py-4 md:py-5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] hover:bg-fresh-gold hover:text-fresh-navy active:bg-fresh-gold transition-all duration-300 shadow-md"
                    >
                      Solicitar Ficha Técnica
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Overrides Swiper Responsivos */}
      <style jsx global>{`
        .offers-swiper {
          padding-bottom: 40px !important;
        }
        .offers-swiper .swiper-button-next, 
        .offers-swiper .swiper-button-prev {
          color: #05070a !important;
          background: white !important;
          width: 45px !important;
          height: 45px !important;
          border: 1px solid #f1f5f9;
          top: 35%;
          display: none !important; /* Ocultar en móvil */
        }
        @media (min-width: 768px) {
          .offers-swiper .swiper-button-next, 
          .offers-swiper .swiper-button-prev {
            display: flex !important; /* Mostrar en desktop */
          }
        }
        .offers-swiper .swiper-pagination-bullet-active {
          background: #c5a059 !important;
        }
      `}</style>
    </section>
  );
}