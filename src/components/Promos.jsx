import React from 'react';

const news = [
  { 
    title: "Tu cocina, el lugar perfecto para cada encuentro", 
    desc: "Griferías de alta gama con diseño ergonómico y certificación de ahorro hídrico.", 
    img: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=800", 
    tag: "Ingeniería" 
  },
  { 
    title: "Tahití Spa: Ingeniería de relajación total", 
    desc: "Nuevos sistemas de hidromasaje avanzados con control táctil y cromoterapia de última generación.", 
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800", 
    tag: "Innovación" 
  }
];

export default function Editorial() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        
        {/* Cabecera Estilo Editorial */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6 animate-reveal">
          <div>
            <span className="text-fresh-gold text-[10px] md:text-xs font-black uppercase tracking-[.5em] block mb-4">
              Fresh Insights
            </span>
            <h2 className="text-4xl md:text-6xl font-display italic text-fresh-navy leading-tight">
              Evolución en <br className="md:hidden" />
              <span className="font-sans not-italic font-black uppercase text-2xl md:text-4xl tracking-tighter">Bienestar</span>
            </h2>
          </div>
          <button className="group flex items-center gap-4 text-fresh-navy font-black text-[10px] uppercase tracking-[0.3em] border-b border-fresh-navy/10 pb-2 hover:border-fresh-gold transition-all duration-500">
            Explorar el Blog 
            <span className="text-fresh-gold group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>

        {/* Grid de Noticias */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {news.map((item, i) => (
            <div 
              key={i} 
              className={`group relative bg-[#fdfdfd] border border-slate-100 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-fresh-navy/5 transition-all duration-700 animate-reveal delay-${(i + 1) * 200}`}
            >
              <div className="flex flex-col md:flex-row items-stretch h-full">
                
                {/* Imagen */}
                <div className="w-full md:w-52 lg:w-64 shrink-0 overflow-hidden relative">
                  <img 
                    src={item.img} 
                    className="w-full h-64 md:h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-1000 ease-out" 
                    alt={item.title} 
                  />
                  {/* Tag para Móvil */}
                  <div className="absolute top-4 left-4 md:hidden">
                    <span className="bg-white/90 backdrop-blur-md text-fresh-navy text-[8px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="hidden md:inline-block text-fresh-gold text-[9px] font-black uppercase tracking-[0.2em] mb-4">
                    // {item.tag}
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-fresh-navy leading-snug tracking-tight group-hover:text-fresh-gold transition-colors duration-500 mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 line-clamp-2 md:line-clamp-none">
                    {item.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <button className="flex items-center gap-3 text-fresh-navy font-black text-[9px] uppercase tracking-[0.3em] group/btn">
                      <span className="relative overflow-hidden">
                        Leer Artículo
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-fresh-gold transform translate-x-[-105%] group-hover/btn:translate-x-0 transition-transform duration-500"></span>
                      </span>
                      <span className="text-fresh-gold transform group-hover/btn:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}