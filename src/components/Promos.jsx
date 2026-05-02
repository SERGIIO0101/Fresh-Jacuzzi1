import React from 'react';

export default function Promos() {
  const news = [
    { title: "Tu cocina, el lugar perfecto para cada encuentro", desc: "Griferías de alta gama con diseño ergonómico y certificación de ahorro hídrico.", img: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=800", tag: "Novedad" },
    { title: "Tahití Spa: Ingeniería de relajación total", desc: "Nuevos sistemas de hidromasaje avanzados con control táctil y cromoterapia.", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800", tag: "Destacado" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-fresh-gold text-xs font-black uppercase tracking-[.4em]">Fresh News</span>
            <h2 className="text-3xl font-bold text-fresh-navy mt-2 tracking-tight">Evolución en bienestar</h2>
          </div>
          <button className="text-fresh-navy font-bold text-xs uppercase border-b-2 border-fresh-navy pb-1 tracking-widest hover:text-fresh-gold hover:border-fresh-gold transition-colors">Explorar blog</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {news.map((item, i) => (
            <div key={i} className="bg-[#f8f9fa] p-8 rounded-2xl flex flex-col md:flex-row items-center gap-10 shadow-sm hover:shadow-xl transition-all duration-700 border border-slate-100 group">
              <div className="w-full md:w-60 h-60 shrink-0 rounded-xl overflow-hidden shadow-lg">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={item.title} />
              </div>
              <div className="flex flex-col gap-5">
                <span className="bg-white text-fresh-navy text-[9px] font-black uppercase px-4 py-1.5 rounded-full w-fit shadow-sm border border-slate-100 tracking-widest">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-bold text-fresh-navy leading-tight tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
                <button className="flex items-center gap-3 text-fresh-gold font-black text-[10px] uppercase tracking-[0.3em] mt-2 group/btn">
                  Descubrir ahora 
                  <span className="text-lg group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}