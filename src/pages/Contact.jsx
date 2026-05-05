import React from "react";
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/573126799235?text=Hola%20FRESH.%20Deseo%20solicitar%20una%20asesoría%20profesional.", "_blank");
  };

  return (
    <div className="pt-40 pb-20 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* INFORMACIÓN DE CONTACTO */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-black text-fresh-navy uppercase tracking-tighter">
                Hablemos de su <span className="text-fresh-gold">próximo proyecto</span>
              </h1>
              <p className="text-slate-500 text-lg">
                Nuestro equipo técnico está listo para asesorarlo en la elección del sistema ideal para su espacio.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-fresh-gold font-black uppercase text-[10px] tracking-widest">
                  <Phone size={16} /> Línea de Ventas
                </div>
                <p className="text-fresh-navy font-bold">322 918 1669</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-fresh-gold font-black uppercase text-[10px] tracking-widest">
                  <MessageSquare size={16} /> WhatsApp Técnico
                </div>
                <p className="text-fresh-navy font-bold">+57 312 679 9235</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-fresh-gold font-black uppercase text-[10px] tracking-widest">
                  <Mail size={16} /> Correo Electrónico
                </div>
                <p className="text-fresh-navy font-bold">ventas@freshjacuzzis.com.co</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-fresh-gold font-black uppercase text-[10px] tracking-widest">
                  <MapPin size={16} /> Planta Principal
                </div>
                <p className="text-fresh-navy font-bold">Medellín, Antioquia</p>
              </div>
            </div>

            <button 
              onClick={handleWhatsApp}
              className="w-full sm:w-auto bg-fresh-navy text-white px-10 py-5 font-black uppercase text-[11px] tracking-[0.2em] hover:bg-fresh-gold transition-all shadow-xl"
            >
              Chatear con un experto ahora
            </button>
          </div>

          {/* FORMULARIO */}
          <div className="bg-white p-10 shadow-2xl border border-slate-100 relative">
            <div className="absolute top-0 right-10 w-12 h-1 bg-fresh-gold"></div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Nombre Completo</label>
                  <input type="text" className="w-full bg-slate-50 border-none p-4 text-sm focus:ring-2 focus:ring-fresh-gold transition-all" placeholder="Ej: Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Teléfono / WhatsApp</label>
                  <input type="text" className="w-full bg-slate-50 border-none p-4 text-sm focus:ring-2 focus:ring-fresh-gold" placeholder="Ej: 300 000 0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Tipo de Proyecto</label>
                <select className="w-full bg-slate-50 border-none p-4 text-sm focus:ring-2 focus:ring-fresh-gold">
                  <option>Residencial (Casa/Finca)</option>
                  <option>Hotelero / Spa</option>
                  <option>Remodelación</option>
                  <option>Distribuidor</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">¿En qué modelo está interesado?</label>
                <input type="text" className="w-full bg-slate-50 border-none p-4 text-sm focus:ring-2 focus:ring-fresh-gold" placeholder="Ej: Wakanda, Nixira, Vitalia..." />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Mensaje</label>
                <textarea rows="4" className="w-full bg-slate-50 border-none p-4 text-sm focus:ring-2 focus:ring-fresh-gold" placeholder="Cuéntenos más sobre su espacio..."></textarea>
              </div>
              <button className="w-full bg-fresh-navy text-white py-5 font-black uppercase text-[11px] tracking-[0.2em] hover:bg-fresh-gold transition-all">
                Enviar Solicitud Técnica
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}