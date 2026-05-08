import React, { useState } from 'react';
import { productos1P } from './data1P';
import { MapPin, Phone, ShieldCheck, Truck, Info } from 'lucide-react';

const ProductCard = ({ item }) => {
  // Manejamos el caso de que images sea undefined o esté vacío por error
  const images = item.images || [];
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10">
        
        {/* Galería de Imágenes */}
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-100 aspect-video">
            <img 
              src={activeImg} 
              alt={item.name} 
              className="w-full h-full object-contain p-4 transition-all duration-500" 
            />
          </div>
          
          {/* Miniaturas */}
          {images.length > 1 && (
            <div className="flex gap-3 justify-center">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImg(img)}
                  className={`w-20 h-16 rounded-lg border-2 overflow-hidden transition-all ${
                    activeImg === img ? 'border-fresh-gold scale-105 shadow-md' : 'border-slate-100 opacity-60'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="miniatura" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info Técnica */}
        <div className="flex flex-col">
          <span className="text-blue-600 font-black text-[10px] tracking-[0.3em] uppercase mb-2">
            {item.category}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 uppercase italic leading-tight">
            HIDROMASAJE {item.name} / {item.dims}
          </h2>
          <p className="text-2xl font-bold text-slate-800 mb-6">{item.price}</p>
          
          <p className="text-sm text-slate-500 leading-relaxed mb-8 border-l-2 border-slate-200 pl-4 italic">
            {item.description}
          </p>

          <div className="grid grid-cols-2 border border-slate-100 rounded-xl overflow-hidden text-[11px]">
            <div className="col-span-2 bg-slate-50 p-2 font-black uppercase tracking-widest text-[9px] border-b border-slate-100">
              Especificaciones Incluidas:
            </div>
            {item.includes.map((spec, i) => (
              <div key={i} className="p-3 border-b border-r border-slate-50 flex justify-between items-center">
                <span className="text-slate-400 font-bold uppercase">{spec.label}</span>
                <span className="text-slate-900 font-black">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner de Confianza Inferior */}
      <div className="bg-slate-50/50 p-6 border-t border-slate-100">
        <div className="flex items-start gap-3 mb-8 text-slate-400">
          <Info size={16} className="mt-1 shrink-0 text-fresh-gold" />
          <p className="text-[10px] leading-tight uppercase font-medium">
            Importante: las imágenes son un modelo ilustrativo del producto y puede presentar algunas variaciones con respecto a la realidad.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <FeatureIcon Icon={MapPin} text="Producto Colombiano" />
          <FeatureIcon Icon={Phone} text="Asesoría WhatsApp" />
          <FeatureIcon Icon={ShieldCheck} text="Garantía Directa" />
          <FeatureIcon Icon={Truck} text="Envíos Nacionales" />
        </div>
      </div>
    </div>
  );
};

// Componente auxiliar para los iconos
const FeatureIcon = ({ Icon, text }) => (
  <div className="flex flex-col items-center gap-2">
    <Icon size={24} className="text-slate-300" strokeWidth={1.5} />
    <span className="text-[9px] font-black uppercase text-slate-500 tracking-tighter text-center">{text}</span>
  </div>
);

// --- ESTA ES LA EXPORTACIÓN QUE TE FALTABA ---
export default function Hidro1P() {
  return (
    <div className="min-h-screen bg-slate-50/30 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">SISTEMAS INDIVIDUALES</h1>
          <p className="text-slate-400 uppercase tracking-[0.4em] text-xs font-bold italic">Ingeniería Personalizada FRESH</p>
        </header>
        
        {productos1P.map(prod => <ProductCard key={prod.id} item={prod} />)}
      </div>
    </div>
  );
}