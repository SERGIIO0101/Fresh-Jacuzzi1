import React from 'react';

const reviews = [
  {
    id: 1,
    quote: "La agilidad en la atención y la precisión técnica en la instalación superaron nuestras expectativas.",
    author: "Jorge Enrique Castrillón",
    project: "Residencia San Lucas",
    category: "Ingeniería"
  },
  {
    id: 2,
    quote: "Un producto de alta calidad y fácil mantenimiento. El diseño se integra perfecto a la arquitectura.",
    author: "Tatiana Villa Restrepo",
    project: "Apartamento El Poblado",
    category: "Diseño"
  },
  {
    id: 3,
    quote: "El acompañamiento en la elección de los hidromasajes fue clave para el éxito del proyecto.",
    author: "Carlos Mario Arango",
    project: "Casa de Campo Llanogrande",
    category: "Bienestar"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8">
        
        {/* Encabezado Editorial Refinado */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-12 md:mb-20 border-b border-slate-100 pb-8 md:pb-12">
          <h2 className="font-display italic text-4xl md:text-5xl text-fresh-navy leading-none mb-4 md:mb-0">
            Experiencias <span className="font-sans not-italic font-black uppercase text-xl md:text-2xl tracking-tighter">Fresh</span>
          </h2>
          <span className="text-slate-400 text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold">
            Lo que dicen nuestros clientes • Casos de éxito
          </span>
        </div>

        {/* Cuadrícula Estilo Galería Industrial */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 shadow-2xl shadow-fresh-navy/5">
          {reviews.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-8 md:p-14 flex flex-col justify-between group hover:bg-slate-50 transition-all duration-700 relative overflow-hidden"
            >
              {/* Comilla decorativa sutil (opcional para estilo) */}
              <div className="absolute -top-4 -right-2 text-slate-50 text-8xl font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-700 select-none">
                "
              </div>

              <div className="relative z-10">
                {/* Categoría con acento Gold */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-6 h-[1px] bg-fresh-gold"></div>
                  <span className="text-fresh-gold text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em]">
                    {item.category}
                  </span>
                </div>
                
                {/* Cuerpo del testimonio */}
                <p className="text-fresh-navy text-xl md:text-2xl leading-relaxed font-display italic mb-12 group-hover:text-fresh-gold transition-colors duration-500">
                  "{item.quote}"
                </p>
              </div>

              {/* Firma con jerarquía clara */}
              <div className="border-t border-slate-100 pt-8 relative z-10">
                <h4 className="text-fresh-navy text-[11px] md:text-xs font-black uppercase tracking-widest mb-1.5">
                  {item.author}
                </h4>
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-fresh-gold/40"></div>
                   <p className="text-slate-400 text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
                    {item.project}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Call to Action Final */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-slate-400 text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-6">
            Únete a la exclusividad de Fresh
          </p>
          <button className="group relative inline-flex items-center gap-4 text-fresh-navy font-black text-[10px] md:text-xs uppercase tracking-[0.3em] transition-all">
            <span className="border-b-2 border-fresh-gold pb-1 group-hover:pr-6 transition-all">
              Ver portafolio de proyectos
            </span>
            <span className="text-fresh-gold text-lg group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}