import React from 'react';
import { productosMulti } from './dataMulti';
import { MapPin, Phone, ShieldCheck, Truck, Info, Users2 } from 'lucide-react';

const ProductCard = ({ item }) => (
  <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 mb-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10">
      
      {/* Visual con Badge de Capacidad Grupal */}
      <div className="rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-100 relative group">
        <img src={item.image} alt={item.name} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute top-4 left-4 bg-fresh-navy text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-lg">
           <Users2 size={16} className="text-fresh-gold" />
           <span className="text-[11px] font-black tracking-[0.2em] uppercase">{item.capacity}</span>
        </div>
      </div>

      {/* Info Técnica */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-2">
            <div className="h-[2px] w-8 bg-fresh-gold"></div>
            <span className="text-blue-600 font-black text-[10px] tracking-[0.3em] uppercase">{item.category}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 uppercase italic tracking-tighter">
          {item.name} <span className="text-slate-300 font-light">/ {item.dims}</span>
        </h2>
        <p className="text-3xl font-bold text-slate-800 mb-6">{item.price}</p>
        
        <p className="text-sm text-slate-500 leading-relaxed mb-8 border-l-4 border-fresh-navy/10 pl-5">
          {item.description}
        </p>

        {/* Tabla de Especificaciones */}
        <div className="grid grid-cols-2 border border-slate-100 rounded-2xl overflow-hidden text-[11px]">
          <div className="col-span-2 bg-slate-900 p-3 font-black uppercase tracking-widest text-[9px] text-white flex justify-between">
            <span>Especificación Técnica</span>
            <span className="text-fresh-gold italic">Fresh Engineering</span>
          </div>
          {item.includes.map((spec, i) => (
            <div key={i} className="p-3 border-b border-r border-slate-50 flex justify-between items-center hover:bg-slate-50 transition-colors">
              <span className="text-slate-400 font-bold uppercase">{spec.label}</span>
              <span className="text-slate-900 font-black">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Banner de Confianza */}
    <div className="bg-slate-50/80 p-8 border-t border-slate-100">
      <div className="flex items-center gap-4 mb-8 text-slate-400 justify-center lg:justify-start">
        <Info size={18} className="text-fresh-gold" />
        <p className="text-[10px] leading-tight uppercase font-bold tracking-wider">
          Nota: las imágenes son ilustrativas y pueden presentar variaciones mínimas respecto al producto final.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <FeatureIcon Icon={MapPin} text="Origen Colombiano" />
        <FeatureIcon Icon={Phone} text="Soporte Técnico" />
        <FeatureIcon Icon={ShieldCheck} text="Garantía de Fábrica" />
        <FeatureIcon Icon={Truck} text="Logística Nacional" />
      </div>
    </div>
  </div>
);

const FeatureIcon = ({ Icon, text }) => (
  <div className="flex flex-col items-center gap-3 group cursor-default">
    <div className="p-3 rounded-full bg-white border border-slate-100 group-hover:border-fresh-gold transition-colors shadow-sm">
        <Icon size={22} className="text-slate-400 group-hover:text-fresh-gold transition-colors" />
    </div>
    <span className="text-[10px] font-black uppercase text-slate-500 tracking-tighter">{text}</span>
  </div>
);

export default function HidroMulti() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center -top-10">
              <span className="text-[120px] font-black text-slate-50 opacity-[0.03] select-none">SOCIAL</span>
          </div>
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-4 relative z-10">LÍNEA MULTIPERSONAL</h1>
          <p className="text-slate-400 uppercase tracking-[0.5em] text-xs font-bold relative z-10 italic">Experiencias Colectivas • Confort de Alto Flujo</p>
        </header>
        
        {productosMulti.map(prod => <ProductCard key={prod.id} item={prod} />)}
      </div>
    </div>
  );
}