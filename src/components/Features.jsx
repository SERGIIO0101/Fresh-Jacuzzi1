import React from 'react';

export default function Features() {
  const items = [
    { 
      title: "Asesoría personalizada", 
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
    },
    { 
      title: "Envío a todo Colombia", 
      icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 9h4l3 3v5h-2M1 5h12v7H1z" 
    },
    { 
      title: "Servicio de instalación", 
      icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" 
    },
    { 
      title: "Respaldo de fábrica", 
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-white shadow-sm border-y border-slate-100">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-y-8 gap-x-4 md:gap-x-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              {/* Icon Container con fresh-navy y hover fresh-gold */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 group-hover:bg-fresh-gold/10 transition-all duration-300">
                <svg 
                  className="w-6 h-6 text-fresh-navy group-hover:text-fresh-gold transition-colors duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.8" 
                    d={item.icon} 
                  />
                </svg>
              </div>

              {/* Texto con tipografía institucional */}
              <div className="flex flex-col">
                <span className="text-[10px] md:text-[11px] font-black text-fresh-navy uppercase tracking-[0.15em] group-hover:text-fresh-gold transition-colors duration-300">
                  {item.title}
                </span>
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
                  Garantía Fresh
                </span>
              </div>

              {/* Divisor visual solo en desktop */}
              {i !== items.length - 1 && (
                <div className="hidden xl:block h-10 w-[1px] bg-slate-100 ml-12"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}