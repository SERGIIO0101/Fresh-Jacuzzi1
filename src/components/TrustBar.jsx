import React from 'react';
import { MessageCircle, Truck, Wrench, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { 
      icon: <MessageCircle strokeWidth={1.5} size={32}/>, 
      title: "Asesoría", 
      desc: "Expertos en ingeniería" 
    },
    { 
      icon: <Truck strokeWidth={1.5} size={32}/>, 
      title: "Logística", 
      desc: "Cobertura nacional" 
    },
    { 
      icon: <Wrench strokeWidth={1.5} size={32}/>, 
      title: "Soporte", 
      desc: "Instalación técnica" 
    },
    { 
      icon: <ShieldCheck strokeWidth={1.5} size={32}/>, 
      title: "Garantía", 
      desc: "Directo de fábrica" 
    },
  ];

  return (
    <section className="bg-white border-y border-slate-100 py-10 md:py-16">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
          {items.map((item, i) => (
            <div 
              key={i} 
              className="flex items-center lg:justify-center gap-5 text-fresh-navy group"
            >
              {/* Icono con contenedor minimalista */}
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-fresh-gold group-hover:bg-fresh-gold group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>

              <div className="flex flex-col">
                <span className="font-black text-[13px] md:text-sm uppercase tracking-[0.15em] mb-0.5">
                  {item.title}
                </span>
                <span className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-widest font-medium">
                  {item.desc}
                </span>
              </div>

              {/* Divisor visual solo para desktop */}
              {i !== items.length - 1 && (
                <div className="hidden lg:block h-12 w-[1px] bg-slate-100 ml-auto" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}