import React from "react";

export default function Ticker() {
  const text = "FRESH HidroJacuzzi • Ingeniería del Confort • Garantía Estructural Premium • Sistemas de Hidromasaje de Alta Presión • Envíos Nacionales • Diseño en Fibra de Vidrio de Alta Resistencia • ";
  
  return (
    <div className="bg-fresh-slate text-white py-2 overflow-hidden border-b border-white/10 uppercase tracking-[0.2em] text-[10px] font-medium">
      {/* Cambié la clase de abajo por 'animate-ticker' que es la que definimos en el CSS */}
      <div className="flex w-max animate-ticker">
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
        <span className="px-4">{text}</span>
      </div>
    </div>
  );
}