import React from "react";
import { Globe, Truck, CheckCircle } from "lucide-react";

export default function WhereToBuy() {
  return (
    <div className="pt-40 pb-20">
      <div className="max-w-[1200px] mx-auto px-4 text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-black text-fresh-navy uppercase">
            Presencia en <span className="text-fresh-gold">toda Colombia</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Desde nuestra planta de producción en Antioquia, despachamos y garantizamos la instalación técnica de nuestros equipos en cualquier rincón del país.
          </p>
        </div>

        {/* CARDS DE COBERTURA */}
        <div className="grid md:grid-cols-3 gap-8 pt-12">
          <div className="p-10 border border-slate-100 shadow-xl space-y-4 hover:border-fresh-gold transition-colors">
            <div className="w-12 h-12 bg-fresh-navy text-white flex items-center justify-center mx-auto">
              <Globe size={24} />
            </div>
            <h3 className="font-black uppercase text-sm text-fresh-navy">Cobertura Nacional</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Enviamos nuestros sistemas Nixira, Wakanda y Spas a todas las ciudades principales e intermedias.</p>
          </div>
          <div className="p-10 border border-slate-100 shadow-xl space-y-4 hover:border-fresh-gold transition-colors">
            <div className="w-12 h-12 bg-fresh-navy text-white flex items-center justify-center mx-auto">
              <Truck size={24} />
            </div>
            <h3 className="font-black uppercase text-sm text-fresh-navy">Logística Especializada</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Contamos con transporte propio y aliado para asegurar que su equipo llegue en perfectas condiciones.</p>
          </div>
          <div className="p-10 border border-slate-100 shadow-xl space-y-4 hover:border-fresh-gold transition-colors">
            <div className="w-12 h-12 bg-fresh-navy text-white flex items-center justify-center mx-auto">
              <CheckCircle size={24} />
            </div>
            <h3 className="font-black uppercase text-sm text-fresh-navy">Instalación Garantizada</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Nuestros técnicos se desplazan para asegurar que la ingeniería hidráulica sea perfecta.</p>
          </div>
        </div>

        {/* SECCIÓN PLANTA / SHOWROOM */}
        <div className="mt-24 bg-fresh-navy text-white p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-12 text-left">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tighter">Punto de Fábrica & <br />Showroom Principal</h2>
            <div className="space-y-4 text-slate-400">
              <p className="font-bold text-white uppercase text-xs tracking-widest">Medellín - Antioquia</p>
              <p className="text-sm">Contáctenos para agendar una visita técnica a nuestra planta y conocer de cerca los materiales y la tecnología de nuestros hidromasajes.</p>
            </div>
            <button className="border-2 border-fresh-gold text-fresh-gold px-8 py-4 font-black uppercase text-[10px] tracking-widest hover:bg-fresh-gold hover:text-white transition-all">
              Agendar Visita
            </button>
          </div>
          <div className="flex-1 w-full h-64 bg-white/5 border border-white/10 flex items-center justify-center">
            <p className="text-fresh-gold font-black uppercase tracking-widest text-[10px]">Mapa Interactivo Próximamente</p>
          </div>
        </div>
      </div>
    </div>
  );
}