import React from 'react';
import { Link } from 'react-router-dom';
import { Users, User, Users2, Crown, ArrowRight } from 'lucide-react';

const subCategories = [
  {
    title: "Línea Individual",
    desc: "Privacidad y ergonomía para el descanso personal.",
    path: "/hidromasajes/individual",
    icon: <User size={32} />,
    img: "url-de-tu-imagen-nixira",
    count: "2 Modelos"
  },
  {
    title: "Línea Dúo",
    desc: "Diseños simétricos creados para el confort compartido.",
    path: "/hidromasajes/duo",
    icon: <Users size={32} />,
    img: "url-de-tu-imagen-flora",
    count: "2 Modelos"
  },
  {
    title: "Línea Familiar",
    desc: "El equilibrio perfecto para el hogar moderno.",
    path: "/hidromasajes/multi",
    icon: <Users2 size={32} />,
    img: "url-de-tu-imagen-abundia",
    count: "2 Modelos"
  },
  {
    title: "Spas Premium",
    desc: "Sistemas de alto desempeño y capacidad extrema.",
    path: "/hidromasajes/premium",
    icon: <Crown size={32} />,
    img: "url-de-tu-imagen-wakanda",
    count: "6 Modelos"
  }
];

export default function HidroIndex() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero sutil */}
      <div className="py-20 bg-fresh-navy text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase italic">
          Hidromasajes
        </h1>
        <p className="text-fresh-gold uppercase tracking-[0.5em] text-xs font-bold">
          Selecciona la capacidad ideal para tu espacio
        </p>
      </div>

      {/* Grid de Subcategorías */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subCategories.map((cat, i) => (
            <Link 
              to={cat.path} 
              key={i}
              className="group relative bg-slate-50 rounded-[32px] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500"
            >
              {/* Imagen de fondo con overlay */}
              <div className="aspect-[3/4] overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-t from-fresh-navy via-fresh-navy/20 to-transparent z-10"></div>
                {/* Aquí iría la imagen representativa de la categoría */}
                <div className="w-full h-full bg-slate-200"></div> 
              </div>

              {/* Contenido */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
                <div className="text-fresh-gold mb-4 transform group-hover:scale-110 transition-transform origin-left">
                  {cat.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-white/60">
                  {cat.count}
                </span>
                <h3 className="text-2xl font-black uppercase italic mb-2 tracking-tighter">
                  {cat.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.desc}
                </p>
                <div className="flex items-center gap-2 text-fresh-gold font-bold text-[10px] uppercase tracking-widest">
                  Explorar <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}