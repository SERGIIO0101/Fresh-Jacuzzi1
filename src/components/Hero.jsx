import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function Hero() {
  const slides = [
    {
      id: 1,
      title: "LUJO Y RELAX",
      subtitle: "Ingeniería Fresh",
      description: "Más de 25 años fabricando oasis de bienestar con fibra de vidrio de alta resistencia.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070",
      specs: ["Acabado A-Séptico", "Resistencia de Alto Impacto", "Ergonomía Certificada"],
      features: [
        { label: "Hidromasaje Pro", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
        { label: "Garantía Fresh", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> }
      ]
    },
    {
      id: 2,
      title: "OUTDOOR",
      subtitle: "Sistemas Térmicos",
      description: "Diseños que resisten climas extremos sin perder su brillo y elegancia original.",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070",
      specs: ["Protección UV+", "Mantenimiento Simplificado", "Control de Temperatura"],
      features: [
        { label: "Todo Clima", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" /></svg> },
        { label: "Instalación Técnica", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> }
      ]
    }
  ];

  return (
    <section className="w-full relative group bg-fresh-navy overflow-hidden">
      <Swiper
        effect={'fade'}
        speed={1400}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-[85vh] md:h-screen w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center scale-100 transition-transform duration-[5000ms]"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay: Gradiente hacia el navy de la marca */}
              <div className="absolute inset-0 bg-gradient-to-b from-fresh-navy/60 via-transparent to-fresh-navy/95" />

              {/* BANNER SUPERIOR DE INFO */}
              <div className="absolute top-32 w-full py-3 px-6 md:px-20 flex justify-center md:justify-start items-center z-20">
                <div className="flex items-center gap-4 border-l-2 border-fresh-gold pl-4 bg-fresh-navy/20 backdrop-blur-md py-2 pr-6">
                  <span className="text-fresh-gold text-[10px] font-black uppercase tracking-[0.3em] animate-pulse">
                    Calidad Certificada
                  </span>
                  <div className="w-[1px] h-4 bg-white/20 hidden md:block"></div>
                  <p className="text-white text-[10px] font-medium tracking-widest uppercase opacity-60 hidden md:block">
                    Fabricación Artesanal Colombiana
                  </p>
                </div>
              </div>

              {/* CONTENIDO CENTRAL */}
              <div className="relative z-10 text-center text-white px-6 mt-20">
                <span className="text-xs md:text-sm font-bold text-fresh-gold tracking-[10px] md:tracking-[18px] uppercase block mb-6 drop-shadow-lg">
                  {slide.subtitle}
                </span>
                <h1 className="text-5xl md:text-[120px] font-black tracking-tighter leading-none mb-8 uppercase italic">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-lg font-medium text-white/70 mb-12 tracking-[2px] max-w-xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                  <button className="w-full sm:w-auto px-12 py-5 bg-fresh-gold text-fresh-navy text-[11px] font-black uppercase tracking-[3px] hover:bg-white transition-all duration-500 shadow-xl shadow-fresh-gold/10">
                    Ver Catálogo
                  </button>
                  <button className="w-full sm:w-auto px-12 py-5 border border-white/30 text-white text-[11px] font-bold uppercase tracking-[3px] hover:bg-white/10 transition-all backdrop-blur-md">
                    Cotizar Proyecto
                  </button>
                </div>
              </div>

              {/* ESPECIFICACIONES (Lado Izquierdo) */}
              <div className="absolute left-10 bottom-20 z-20 hidden lg:block">
                <div className="space-y-4 border-l-2 border-fresh-gold pl-6">
                  {slide.specs.map((spec, i) => (
                    <p key={i} className="text-[9px] text-white/50 uppercase tracking-[4px] font-bold hover:text-fresh-gold transition-colors cursor-default">
                      {spec}
                    </p>
                  ))}
                </div>
              </div>

              {/* ICONOS TÉCNICOS (Lado Derecho) */}
              <div className="absolute right-10 bottom-20 z-20 hidden lg:flex flex-col gap-8">
                {slide.features.map((feat, i) => (
                  <div key={i} className="flex flex-col items-center group cursor-pointer">
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:border-fresh-gold group-hover:text-fresh-gold group-hover:bg-fresh-gold/5 transition-all duration-500 bg-fresh-navy/40 backdrop-blur-lg">
                      {feat.icon}
                    </div>
                    <span className="text-[8px] text-white/30 uppercase mt-3 tracking-[3px] font-black text-center w-24 group-hover:text-fresh-gold transition-colors">
                      {feat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Ajustes de Swiper personalizados */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet { 
          background: #fff !important; 
          width: 30px !important; 
          height: 3px !important; 
          border-radius: 0 !important; 
          opacity: 0.2; 
          transition: all 0.4s ease; 
        }
        .swiper-pagination-bullet-active { 
          background: #D4AF37 !important; /* Fresh Gold */
          opacity: 1; 
          width: 50px !important; 
        }
        
        .swiper-button-next, .swiper-button-prev { 
          color: #D4AF37 !important; 
          opacity: 0; 
          transition: all 0.3s; 
          transform: scale(0.6);
        }
        .group:hover .swiper-button-next, 
        .group:hover .swiper-button-prev { 
          opacity: 0.4; 
        }
        .swiper-button-next:hover, .swiper-button-prev:hover { 
          opacity: 1 !important; 
          transform: scale(0.8);
        }
      `}} />
    </section>
  );
}