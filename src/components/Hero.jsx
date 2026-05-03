import React from 'react';
import { Play } from 'lucide-react';
import heroImg from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[750px] md:min-h-[850px] bg-fresh-navy overflow-hidden flex flex-col justify-center pt-10 md:pt-20">
      
      {/* 1. Fondo con Efecto Cinemático */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Fresh Luxury Experience" 
          className="w-full h-full object-cover animate-slow-zoom brightness-[0.6] md:brightness-[0.7]" 
        />
        {/* Capas de gradiente para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-fresh-navy via-fresh-navy/60 to-transparent opacity-90 md:opacity-100"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-fresh-navy via-transparent to-transparent"></div>
      </div>

      {/* 2. Contenido Principal */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-24">
        <div className="flex flex-col max-w-4xl pb-32 md:pb-40">
          
          {/* Tagline con línea dorada */}
          <div className="flex items-center gap-4 mb-6 md:mb-8 animate-fade-in-up">
            <span className="w-8 md:w-12 h-[1px] bg-fresh-gold"></span>
            <span className="text-fresh-gold text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em]">
              Ingeniería de alto desempeño
            </span>
          </div>

          {/* Título: Mix Editorial (Italic + Black) */}
          <h1 className="text-white leading-[0.9] mb-8 md:mb-12 animate-fade-in-up delay-200">
            <span className="block font-display italic text-5xl md:text-8xl lg:text-[110px] tracking-tighter mb-2">
              El Arte de
            </span>
            <span className="block font-sans font-black text-4xl md:text-7xl lg:text-[85px] uppercase tracking-tighter text-white">
              FLUIR CON <span className="text-fresh-gold underline decoration-1 underline-offset-[10px] md:underline-offset-[12px]">ESTATUS</span>
            </span>
          </h1>

          {/* Botón de Video / Experiencia */}
          <div className="animate-fade-in-up delay-500">
            <button className="flex items-center gap-4 md:gap-6 text-white group cursor-pointer relative z-30">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-fresh-gold group-hover:border-fresh-gold transition-all duration-700 shadow-2xl backdrop-blur-sm">
                <Play size={18} className="text-white fill-white ml-1 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] group-hover:text-fresh-gold transition-colors">
                  Ver Experiencia
                </span>
                <span className="text-white/40 text-[8px] md:text-[9px] uppercase tracking-widest font-light">
                  Showroom Virtual 2026
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Barra de Venta Flotante (Optimizada para Móvil) */}
      <div className="absolute bottom-0 left-0 w-full z-20 animate-fade-in-up delay-700">
        <div className="max-w-[1500px] mx-auto px-4 md:px-6 mb-6 md:mb-10">
          <div className="bg-fresh-navy/40 backdrop-blur-3xl border border-white/10 p-6 md:p-10 lg:p-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 shadow-2xl">
            
            <div className="flex flex-col gap-2 border-l-2 border-fresh-gold pl-6 md:pl-8 w-full md:w-auto">
              <span className="text-fresh-gold text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em]">
                Serie Profesional
              </span>
              <h3 className="text-white text-2xl md:text-3xl font-display italic tracking-tight">
                Spas <span className="font-sans not-italic font-black text-lg md:text-xl ml-1">&</span> Hidromasajes
              </h3>
              <p className="text-white/50 text-[9px] md:text-[10px] font-medium max-w-xs leading-relaxed uppercase tracking-widest hidden sm:block">
                Diseño ergonómico con tecnología <br /> de hidrocromoterapia avanzada.
              </p>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-8 lg:gap-12 w-full md:w-auto border-t border-white/5 md:border-none pt-4 md:pt-0">
              <div className="flex flex-col items-start md:items-end">
                <span className="text-white/30 text-[8px] md:text-[9px] uppercase font-bold tracking-[0.3em] mb-1">
                  Inversión desde
                </span>
                <div className="flex items-start gap-1">
                  <span className="text-fresh-gold font-light text-xs md:text-sm mt-1">$</span>
                  <span className="text-white text-3xl md:text-4xl font-display italic tracking-tighter leading-none">
                    14.500.000*
                  </span>
                </div>
              </div>
              
              <button 
                onClick={() => window.open('https://wa.me/573172464196', '_blank')}
                className="bg-white text-fresh-navy px-8 md:px-12 py-4 md:py-5 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-fresh-gold hover:text-white transition-all duration-500 shadow-xl"
              >
                Solicitar Asesoría
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decoración Lateral */}
      <div className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 hidden xl:block pointer-events-none">
        <div className="rotate-90 origin-right text-white/10 font-mono text-[7px] tracking-[1.2em] uppercase whitespace-nowrap">
          Fresh Boutique Engineering // Standard 2026
        </div>
      </div>

      {/* Estilos para animaciones */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s linear infinite alternate;
        }
        .delay-200 { animation-delay: 200ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
      `}</style>
    </section>
  );
}