import React from "react";
import { Users, ShieldCheck, Target, Eye, Heart, Star, CheckCircle } from "lucide-react";

// Importación de imágenes
import fotoPrincipal from "../assets/about/about1.png";
import imgAlejandro from "../assets/about/alejandro.jpeg";
import imgAlex from "../assets/about/alex.jpeg";
import imgCarlos from "../assets/about/carlos.jpeg";
import imgOver from "../assets/about/over.jpeg";
import imgRamon from "../assets/about/ramon.jpeg";
import imgSebastian from "../assets/about/sebastian.jpeg";

export default function About() {
  const team = [
    { name: "Alejandro Londoño", role: "Especialista en Hidromasajes", img: imgAlejandro },
    { name: "Ramón Ocampo", role: "Especialista en Hidromasajes", img: imgRamon },
    { name: "Sebastian Piedrahita", role: "Especialista en Hidromasajes", img: imgSebastian },
    { name: "Carlos Tangarife", role: "Especialista en Hidromasajes", img: imgCarlos },
    { name: "Alex Serna", role: "Especialista en Hidromasajes", img: imgAlex },
    { name: "Over Ocampo", role: "Especialista en Hidromasajes", img: imgOver },
  ];

  return (
    <div className="pt-32 bg-white">
      {/* SECCIÓN 1: HISTORIA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-fresh-gold/10 border border-fresh-gold/20 text-fresh-gold text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded-full">
              Nuestra Trayectoria
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-fresh-navy uppercase mb-6 leading-tight tracking-tighter">
              Empresa familiar con <br />
              <span className="text-fresh-gold">25 años de experiencia</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              En <strong>Fresh Hidrojacuzzis</strong> somos una empresa familiar especializada en la fabricación artesanal de jacuzzis y productos en fibra de vidrio de alta resistencia. Combinamos bienestar, diseño ergonómico y durabilidad.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-fresh-navy text-white px-6 py-4 rounded-xl flex items-center gap-3 shadow-lg">
                <Users className="text-fresh-gold" size={20} />
                <span className="font-bold uppercase text-[10px] tracking-widest">Personal Calificado</span>
              </div>
              <div className="bg-fresh-navy text-white px-6 py-4 rounded-xl flex items-center gap-3 shadow-lg">
                <ShieldCheck className="text-fresh-gold" size={20} />
                <span className="font-bold uppercase text-[10px] tracking-widest">Productos con Calidad</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-fresh-gold/30 rounded-3xl"></div>
            <img 
              src={fotoPrincipal} 
              alt="Instalación Fresh" 
              className="relative z-10 rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: FILOSOFÍA (MISIÓN Y VISIÓN) */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-fresh-navy uppercase mb-6 tracking-tight">Controlamos la Calidad</h2>
          <p className="text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
            Controlamos cada detalle de nuestro proceso artesanal para asegurar que la instalación aumente el atractivo y valor de su vivienda.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 flex items-start gap-6">
              <Target className="text-fresh-gold shrink-0 mt-1" size={36} />
              <div>
                <h4 className="font-black text-fresh-navy uppercase text-lg mb-3">Misión</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Ser proveedores de bienestar integral, fabricando productos de ingeniería superior que transformen espacios en refugios de relajación y salud.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 flex items-start gap-6">
              <Eye className="text-fresh-gold shrink-0 mt-1" size={36} />
              <div>
                <h4 className="font-black text-fresh-navy uppercase text-lg mb-3">Visión</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Liderar la industria nacional de hidromasajes, siendo reconocidos por nuestra innovación y la calidad innegociable de nuestra fibra de vidrio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: VALORES (Nueva) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-fresh-navy uppercase tracking-tighter">Nuestros Valores</h2>
          <div className="w-20 h-1 bg-fresh-gold mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "Calidad", icon: <Star />, desc: "Excelencia en cada fibra y componente de nuestros productos." },
            { title: "Compromiso", icon: <CheckCircle />, desc: "Dedicación total para superar las expectativas de nuestros clientes." },
            { title: "Pasión", icon: <Heart />, desc: "Amamos lo que hacemos: crear espacios de relax y salud." }
          ].map((v, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="w-16 h-16 bg-fresh-navy text-fresh-gold rounded-2xl flex items-center justify-center mx-auto shadow-lg transform rotate-3">
                {React.cloneElement(v.icon, { size: 32 })}
              </div>
              <h4 className="font-black text-fresh-navy uppercase tracking-widest">{v.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed px-6">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 4: EQUIPO */}
      <section className="bg-fresh-navy py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
              Nuestro <span className="text-fresh-gold not-italic">Equipo</span>
            </h2>
            <p className="mt-4 text-slate-400 uppercase tracking-widest text-[10px] font-bold">Personal Altamente Calificado</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {team.map((member, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-fresh-gold rounded-full scale-0 group-hover:scale-105 transition-transform duration-500 opacity-20"></div>
                  <div className="relative w-32 h-32 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700">
                     <img src={member.img} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
                <h3 className="text-white font-black uppercase text-sm md:text-lg tracking-tighter group-hover:text-fresh-gold transition-colors">
                  {member.name}
                </h3>
                <p className="text-fresh-gold/60 font-bold text-[10px] uppercase tracking-widest mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}