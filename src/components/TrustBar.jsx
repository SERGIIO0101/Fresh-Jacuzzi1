import React from 'react';
import { MessageCircle, Truck, Wrench, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { icon: <MessageCircle size={28}/>, title: "Asesoría", desc: "Personalizada" },
    { icon: <Truck size={28}/>, title: "Envíos", desc: "A todo el país" },
    { icon: <Wrench size={28}/>, title: "Instalación", desc: "Técnica autorizada" },
    { icon: <ShieldCheck size={28}/>, title: "Respaldo", desc: "Directo de fábrica" },
  ];

  return (
    <div className="bg-white border-y border-slate-100 py-12">
      <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-center gap-4 text-fresh-navy border-r last:border-0 border-slate-100">
            <div className="text-fresh-gold">{item.icon}</div>
            <div className="flex flex-col">
              <span className="font-bold text-sm uppercase tracking-tight">{item.title}</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}