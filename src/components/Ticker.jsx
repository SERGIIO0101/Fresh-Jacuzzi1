import React from "react";

export default function Ticker() {
  const text = "FRESH HidroJacuzz • Ingeniería del Confort • Garantía Estructural Premium • Sistemas de Hidromasaje de Alta Presión • Envíos Nacionales • Diseño en Fibra de Vidrio de Alta Resistencia • ";
  
  return (
    <div className="bg-fresh-slate text-white py-2 overflow-hidden border-b border-white/10 uppercase tracking-[0.2em] text-[10px] font-medium">
      <div className="flex w-max animate-[marquee_40s_linear_infinite]">
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
      </div>
    </div>
  );
}