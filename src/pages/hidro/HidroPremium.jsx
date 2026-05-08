import React from 'react';
import { productosPremium } from './dataPremium';
import { MapPin, Phone, ShieldCheck, Truck, Info, Crown, Layers } from 'lucide-react';

const ProductCard = ({ item }) => (
  <div className="bg-white border border-slate-200 rounded-[40px] overflow-hidden shadow-2xl mb-20 group hover:border-fresh-gold transition-all duration-700">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
      
      {/* Lado Imagen */}
      <div className="relative overflow-hidden bg-slate-100 flex items-center justify-center min-h-[400px]">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
        <div className="absolute top-8 left-8">
           <div className="bg-fresh-navy/90 backdrop-blur-md text-white px-6 py-3 rounded-2xl flex items-center gap-3 border border-white/20 shadow-xl">
              <Crown size={20} className="text-fresh-gold" />
              <span className="text-xs font-black tracking-[0.3em] uppercase">{item.capacity}</span>
           </div>
        </div>
      </div>

      {/* Lado Datos */}
      <div className="p-8 md:p-14 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
            <span className="text-fresh-gold font-black text-[10px] tracking-[0.5em] uppercase">{item.category}</span>
            <div className="h-px flex-grow bg-slate-100"></div>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black text-fresh-navy mb-4 tracking-tighter uppercase italic leading-none">
          {item.name}
        </h2>
        
        <div className="flex items-baseline gap-4 mb-8">
            <p className="text-3xl font-bold text-slate-800">{item.price}</p>
            <span className="text-slate-300 font-medium text-sm">/ Ref: {item.dims}</span>
        </div>
        
        <p className="text-slate-500 leading-relaxed mb-10 text-lg">
          {item.description}
        </p>

        {/* Tabla de Especificaciones de Lujo */}
        <div className="grid grid-cols-2 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden shadow-inner">
          {item.includes.map((spec, i) => (
            <div key={i} className="bg-white p-4 flex flex-col gap-1 hover:bg-slate-50 transition-colors">
              <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{spec.label}</span>
              <span className="text-fresh-navy font-black text-sm uppercase">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Footer de Tarjeta - Branding de Confianza */}
    <div className="bg-fresh-navy p-8 text-white/80">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex items-center gap-3">
            <MapPin size={18} className="text-fresh-gold" />
            <span className="text-[9px] font-bold uppercase tracking-widest">Origen: Colombia</span>
        </div>
        <div className="flex items-center gap-3">
            <ShieldCheck size={18} className="text-fresh-gold" />
            <span className="text-[9px] font-bold uppercase tracking-widest">Garantía Directa</span>
        </div>
        <div className="flex items-center gap-3">
            <Phone size={18} className="text-fresh-gold" />
            <span className="text-[9px] font-bold uppercase tracking-widest">Asesoría Técnica</span>
        </div>
        <div className="flex items-center gap-3">
            <Truck size={18} className="text-fresh-gold" />
            <span className="text-[9px] font-bold uppercase tracking-widest">Envíos Nacionales</span>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-white/5 text-center">
         <p className="text-[9px] opacity-40 uppercase tracking-widest flex items-center justify-center gap-2">
            <Info size={12} /> Las imágenes son modelos ilustrativos y pueden presentar variaciones con respecto al producto final.
         </p>
      </div>
    </div>
  </div>
);

export default function HidroPremium() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-fresh-navy text-fresh-gold rounded-full shadow-2xl">
                <Layers size={32} />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-fresh-navy tracking-tighter mb-6 leading-tight">SPAS PREMIUM</h1>
          <p className="text-slate-400 uppercase tracking-[0.6em] text-[10px] font-black leading-loose">
            Ingeniería de Alto Desempeño • El Estándar de Oro en Hidromasajes
          </p>
        </header>
        
        <div className="space-y-12">
            {productosPremium.map(prod => <ProductCard key={prod.id} item={prod} />)}
        </div>
      </div>
    </div>
  );
}