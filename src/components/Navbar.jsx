import React, { useState, useEffect } from "react";
import { 
  Search, ChevronDown, Globe, Phone, 
  User, ShoppingBag 
} from "lucide-react";
import Ticker from "./Ticker";
import logoFresh from "../assets/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Categorización Industrial Estilo Firplak
  const navigationItems = [
    {
      name: "Sistemas de Hidromasaje",
      sub: ["Spas Premium", "Bañeras Acrílicas", "Sistemas de Nado", "Jacuzzis de Obra"]
    },
    {
      name: "Línea Hidrosanitaria",
      sub: ["Sanitarios One-Piece", "Lavamanos de Lujo", "Grifería Monocontrol"]
    },
    {
      name: "Dotación de Servicios",
      sub: ["Lavaderos en Fibra", "Pozuelos Industriales", "Grifería de Servicio"]
    },
    {
      name: "Sistemas de Cocina",
      sub: ["Lavaplatos de Incrustar", "Grifería Gourmet", "Herrajes"]
    },
    {
      name: "Ingeniería & Repuestos",
      sub: ["Motobombas", "Calentadores", "Jets y Accesorios", "Mantenimiento"]
    }
  ];

  const handleContact = (type) => {
    const phone = "573172464196";
    const messages = {
      general: "Hola FRESH. Deseo solicitar una asesoría técnica para un proyecto de hidromasajes.",
      catalogo: "Hola FRESH. Me gustaría recibir el catálogo técnico completo en PDF."
    };
    const text = encodeURIComponent(messages[type] || messages.general);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col transition-all duration-500">
      
      {/* 1. TICKER (Logística e Ingeniería) */}
      <div className="relative z-50 bg-fresh-navy">
        <Ticker />
      </div>

      {/* 2. NAVBAR SUPERIOR (Identidad Corporativa) */}
      <div className={`bg-fresh-navy text-white transition-all duration-700 ease-in-out flex items-center border-b border-white/5 relative z-40 ${
        isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-24 opacity-100"
      }`}>
        <div className="max-w-[1600px] mx-auto px-8 w-full grid grid-cols-3 items-center">
          
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-4 border-r border-white/10 pr-6">
              {/* Instagram SVG Puro */}
              <a href="https://www.instagram.com/jacuzzis_fresh/" target="_blank" rel="noopener noreferrer" className="hover:text-fresh-gold transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* Facebook SVG Puro */}
              <a href="https://www.facebook.com/people/FRESH-Jacuzzis/61555844768663/" target="_blank" rel="noopener noreferrer" className="hover:text-fresh-gold transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
            <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] font-black">
              <Phone size={14} className="text-fresh-gold" />
              <span className="hidden lg:inline">+57 317 246 4196</span>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img src={logoFresh} alt="FRESH" className="h-14 lg:h-16 brightness-0 invert object-contain" />
          </div>

          <div className="flex gap-8 items-center justify-end text-[9px] uppercase tracking-[0.3em] font-black">
            <div className="flex items-center gap-2 text-fresh-gold pl-6 border-l border-white/10">
              <Globe size={14} /> <span className="text-white">CO / SEDE MEDELLÍN</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. NAVBAR DE NAVEGACIÓN TÉCNICA */}
      <nav className={`transition-all duration-500 ease-in-out border-b relative z-30 ${
          isScrolled ? "h-20 bg-white/98 backdrop-blur-md border-slate-200 shadow-2xl" : "h-20 bg-transparent border-transparent"
        }`}>
        <div className="max-w-[1600px] mx-auto px-8 w-full h-full flex justify-between items-center">
          
          {/* Logo dinámico */}
          <div className={`transition-all duration-500 flex items-center ${isScrolled ? "w-32 opacity-100 translate-x-0" : "w-0 opacity-0 -translate-x-4 overflow-hidden"}`}>
            <img src={logoFresh} alt="FRESH" className="h-8 object-contain" />
          </div>

          {/* Menú de Categorías Industriales */}
          <div className={`flex items-center gap-4 lg:gap-8 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${
            isScrolled ? "text-fresh-navy" : "text-white"
          }`}>
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group py-8 cursor-pointer">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="group-hover:text-fresh-gold transition-colors">{item.name}</span>
                  <ChevronDown size={10} className="text-fresh-gold group-hover:rotate-180 transition-transform duration-300" />
                </div>
                
                {/* Mega-Menú Sutil */}
                <div className="absolute top-[90%] left-0 w-64 bg-white border border-slate-100 shadow-2xl p-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="w-10 h-1 bg-fresh-gold mb-4"></div>
                  <ul className="flex flex-col gap-3">
                    {item.sub.map((subItem) => (
                      <li key={subItem} className="text-fresh-navy text-[9px] font-bold hover:text-fresh-gold transition-colors border-b border-slate-50 pb-2 last:border-0 uppercase tracking-widest">
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Acciones Finales */}
          <div className="flex items-center gap-6">
            <div className={`flex items-center gap-5 pr-6 border-r transition-all ${
              isScrolled ? "text-fresh-navy border-slate-200" : "text-white border-white/20"
            }`}>
              <Search size={18} className="cursor-pointer hover:text-fresh-gold transition-colors" />
              <div className="relative cursor-pointer group">
                <ShoppingBag size={18} className="group-hover:text-fresh-gold transition-colors" />
                <span className="absolute -top-2 -right-2 bg-fresh-gold text-white text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full">0</span>
              </div>
            </div>
            
            <button 
              onClick={() => handleContact('general')}
              className={`px-7 py-3 font-black text-[9px] uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 ${
                isScrolled 
                  ? "bg-fresh-navy text-white hover:bg-fresh-gold shadow-lg" 
                  : "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-fresh-navy"
              }`}
            >
              Asesoría Técnica
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}