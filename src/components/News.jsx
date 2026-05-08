import React from 'react';

const highlights = [
  {
    id: 1,
    tag: "Lanzamiento",
    title: "Nueva Línea AeroSpa 2026",
    description: "Ingeniería de flujo invertido para un relax profundo y recuperación muscular.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    size: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    tag: "Innovación",
    title: "Control Inteligente",
    description: "Gestiona la temperatura y presión desde tu smartphone.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800",
    size: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    tag: "Diseño",
    title: "Grifería Titanium",
    description: "Resistencia extrema con acabados en estética minimalista industrial.",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb9f?auto=format&fit=crop&q=80&w=800",
    size: "md:col-span-1 md:row-span-1"
  }
];

export default function News() {
  return (
    <section className="py-16 md:py-24 bg-white font-montserrat">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        
        {/* Cabecera Técnica con los colores Fresh */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-12 bg-fresh-gold"></div>
            <span className="text-fresh-gold text-[10px] font-black uppercase tracking-[5px]">
              Vanguardia en ingeniería
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-fresh-navy uppercase italic tracking-tighter">
            Novedades<span className="text-slate-100">.</span>
          </h2>
        </div>

        {/* Bento Grid Optimizado */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[650px]">
          {highlights.map((item) => (
            <div 
              key={item.id} 
              className={`relative overflow-hidden group cursor-pointer border border-slate-100 min-h-[350px] md:min-h-0 ${item.size}`}
            >
              {/* Imagen con zoom suave */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              
              {/* Overlay: Degradado usando fresh-navy */}
              <div className="absolute inset-0 bg-gradient-to-t from-fresh-navy/95 via-fresh-navy/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Contenido */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                {/* Etiqueta con fondo semitransparente Fresh Navy */}
                <span className="text-fresh-gold text-[9px] font-black uppercase tracking-[3px] mb-4 bg-fresh-navy/40 w-fit px-3 py-1.5 backdrop-blur-md border border-white/10">
                  {item.tag}
                </span>
                
                <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tight leading-none mb-3">
                  {item.title}
                </h3>
                
                {/* Descripción: Visible siempre en móvil, hover en desktop */}
                <p className="text-slate-300 text-xs md:text-sm max-w-xs opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Línea decorativa dorada */}
                <div className="mt-6 h-[2px] w-12 bg-fresh-gold md:w-0 md:group-hover:w-20 transition-all duration-700 ease-in-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}