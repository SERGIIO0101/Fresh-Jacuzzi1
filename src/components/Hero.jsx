import React from 'react';
import { Play } from 'lucide-react';
import heroImg from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] bg-fresh-navy overflow-hidden flex flex-col justify-center pt-20">
      
      {/* 1. Fondo con Efecto Cinemático */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Fresh Luxury Experience" 
          className="w-full h-full object-cover animate-hero-img brightness-[0.7]" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fresh-navy via-fresh-navy/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-fresh-navy/80 via-transparent to-transparent"></div>
      </div>

      {/* 2. Contenido Principal - Elevado para evitar solapamiento */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full px-8 lg:px-24 pb-40">
        <div className="flex flex-col max-w-4xl">
          
          {/* Tagline */}
          <div className="flex items-center gap-4 mb-8 animate-reveal opacity-0 [animation-delay:200ms]">
            <span className="w-12 h-[1px] bg-fresh-gold"></span>
            <span className="text-fresh-gold text-[10px] font-black uppercase tracking-[0.5em]">
              Ingeniería de alto desempeño
            </span>
          </div>

          {/* Título: Mix Editorial */}
          <h1 className="text-white leading-[0.95] mb-12 animate-reveal opacity-0 [animation-delay:400ms]">
            <span className="block font-display italic text-6xl md:text-8xl lg:text-[100px] tracking-tighter mb-2">
              El Arte de
            </span>
            <span className="block font-sans font-black text-5xl md:text-7xl lg:text-[85px] uppercase tracking-tighter text-white">
              FLUIR CON <span className="text-fresh-gold underline decoration-1 underline-offset-[12px]">ESTATUS</span>
            </span>
          </h1>

          {/* Botón de Video/Experiencia - Ahora 100% interactivo */}
          <div className="animate-reveal opacity-0 [animation-delay:600ms]">
            <button className="flex items-center gap-6 text-white group cursor-pointer relative z-30">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-fresh-gold group-hover:border-fresh-gold transition-all duration-700 shadow-2xl backdrop-blur-sm">
                <Play size={20} className="text-white fill-white ml-1" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] group-hover:text-fresh-gold transition-colors">
                  Ver Experiencia
                </span>
                <span className="text-white/40 text-[9px] uppercase tracking-widest font-light">
                  Showroom Virtual 2024
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Barra de Venta Flotante - Ajustada al borde inferior */}
      <div className="absolute bottom-0 left-0 w-full z-20 animate-reveal opacity-0 [animation-delay:1000ms]">
        <div className="max-w-[1500px] mx-auto px-6 mb-10">
          <div className="bg-fresh-navy/60 backdrop-blur-2xl border border-white/10 p-8 md:p-12 flex flex-wrap justify-between items-center gap-8 shadow-2xl">
            
            <div className="flex flex-col gap-2 border-l-2 border-fresh-gold pl-8">
              <span className="text-fresh-gold text-[9px] font-black uppercase tracking-[0.4em]">
                Serie Profesional
              </span>
              <h3 className="text-white text-3xl font-display italic tracking-tight">
                Spas <span className="font-sans not-italic font-black text-xl ml-1">&</span> Hidromasajes
              </h3>
              <p className="text-white/50 text-[10px] font-light max-w-xs leading-relaxed uppercase tracking-widest">
                Diseño ergonómico con tecnología <br /> de hidrocromoterapia avanzada.
              </p>
            </div>

            <div className="flex items-center gap-12">
              <div className="hidden lg:flex flex-col items-end">
                <span className="text-white/30 text-[9px] uppercase font-bold tracking-[0.3em] mb-1">
                  Inversión desde
                </span>
                <div className="flex items-start gap-1">
                  <span className="text-fresh-gold font-light text-sm mt-1">$</span>
                  <span className="text-white text-4xl font-display italic tracking-tighter leading-none">
                    14.500.000*
                  </span>
                </div>
              </div>
              
              <a 
                href="https://wa.me/573172464196" 
                className="bg-white text-fresh-navy px-12 py-5 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-fresh-gold hover:text-white transition-all duration-700 shadow-xl"
              >
                Solicitar Asesoría
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decoración Lateral (Engineering Stamp) */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden xl:block">
        <div className="rotate-90 origin-right text-white/10 font-mono text-[8px] tracking-[1em] uppercase whitespace-nowrap">
          Fresh Boutique Engineering // Standard 2024
        </div>
      </div>
    </section>
  );
}