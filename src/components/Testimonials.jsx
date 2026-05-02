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
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1600px] mx-auto px-8">
        
        {/* Encabezado minimalista al estilo de la referencia */}
        <div className="flex justify-between items-baseline mb-16 border-b border-slate-100 pb-10">
          <h2 className="text-2xl font-bold text-fresh-navy uppercase tracking-tight">
            Experiencias Fresh
          </h2>
          <span className="text-slate-400 text-[10px] uppercase tracking-[0.4em] font-medium">
            Lo que dicen nuestros clientes
          </span>
        </div>

        {/* Cuadrícula de 3 columnas - Igual a la referencia de productos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
          {reviews.map((item) => (
            <div key={item.id} className="bg-white p-12 flex flex-col justify-between hover:bg-slate-50 transition-colors duration-500">
              
              <div>
                {/* Categoría sutil */}
                <span className="text-fresh-gold text-[9px] font-black uppercase tracking-[0.3em] mb-8 block">
                  {item.category}
                </span>
                
                {/* Texto del testimonio con tipografía clara */}
                <p className="text-fresh-navy text-lg leading-relaxed font-light italic mb-12">
                  "{item.quote}"
                </p>
              </div>

              {/* Firma estilo editorial */}
              <div className="border-t border-slate-100 pt-8">
                <h4 className="text-fresh-navy text-xs font-bold uppercase tracking-wider mb-1">
                  {item.author}
                </h4>
                <p className="text-slate-400 text-[10px] uppercase tracking-widest font-medium">
                  {item.project}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Cierre con sentido comercial */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 text-[11px] uppercase tracking-[0.2em] mb-4">
            Únete a la exclusividad de Fresh
          </p>
          <button className="text-fresh-navy font-black text-xs uppercase tracking-[0.3em] border-b-2 border-fresh-gold pb-1 hover:text-fresh-gold transition-colors">
            Ver portafolio de proyectos
          </button>
        </div>

      </div>
    </section>
  );
}