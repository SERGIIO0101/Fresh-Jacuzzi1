import React, { useState, useEffect } from "react";
import { 
  Search, ChevronDown, Globe, Phone, 
  User, ShoppingBag, Menu, X 
} from "lucide-react";
import Ticker from "./Ticker";
import logoFresh from "../assets/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className="fixed top-0 left-0 w-full z-[100] flex flex-col transition-all duration-500">
      
      {/* 1. TICKER */}
      <div className="relative z-[60] bg-fresh-navy">
        <Ticker />
      </div>

      {/* 2. NAVBAR SUPERIOR (Oculto en móvil para mayor limpieza, o reducido) */}
      <div className={`bg-fresh-navy text-white transition-all duration-700 ease-in-out flex items-center border-b border-white/5 relative z-40 ${
        isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-16 lg:h-24 opacity-100"
      }`}>
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 w-full flex justify-between items-center">
          
          <div className="flex gap-6 items-center">
            <div className="hidden md:flex items-center gap-4 border-r border-white/10 pr-6">
              <a href="https://www.instagram.com/jacuzzis_fresh/" target="_blank" rel="noopener noreferrer" className="hover:text-fresh-gold transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
            <div className="flex items-center gap-3 text-[8px] lg:text-[9px] uppercase tracking-[0.3em] font-black">
              <Phone size={12} className="text-fresh-gold" />
              <span>+57 317 246 4196</span>
            </div>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2">
            <img src={logoFresh} alt="FRESH" className="h-10 lg:h-16 brightness-0 invert object-contain" />
          </div>

          <div className="hidden lg:flex gap-8 items-center justify-end text-[9px] uppercase tracking-[0.3em] font-black">
            <div className="flex items-center gap-2 text-fresh-gold pl-6 border-l border-white/10">
              <Globe size={14} /> <span className="text-white">CO / SEDE MEDELLÍN</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. NAVBAR DE NAVEGACIÓN PRINCIPAL */}
      <nav className={`transition-all duration-500 ease-in-out border-b relative z-30 ${
          isScrolled ? "h-16 lg:h-20 bg-white/98 backdrop-blur-md border-slate-200 shadow-2xl" : "h-16 lg:h-20 bg-transparent border-transparent"
        }`}>
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 w-full h-full flex justify-between items-center">
          
          {/* Logo dinámico y Botón Hamburguesa Móvil */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-fresh-navy" : "text-white"}`}
            >
              <Menu size={24} />
            </button>
            <div className={`transition-all duration-500 flex items-center ${isScrolled ? "w-24 lg:w-32 opacity-100" : "w-0 opacity-0 pointer-events-none overflow-hidden"}`}>
              <img src={logoFresh} alt="FRESH" className="h-6 lg:h-8 object-contain" />
            </div>
          </div>

          {/* Menú Desktop (Hidden en móvil) */}
          <div className={`hidden lg:flex items-center gap-4 lg:gap-8 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${
            isScrolled ? "text-fresh-navy" : "text-white"
          }`}>
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group py-8 cursor-pointer">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="group-hover:text-fresh-gold transition-colors">{item.name}</span>
                  <ChevronDown size={10} className="text-fresh-gold group-hover:rotate-180 transition-transform duration-300" />
                </div>
                {/* Mega-Menú */}
                <div className="absolute top-[90%] left-0 w-64 bg-white border border-slate-100 shadow-2xl p-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="w-10 h-1 bg-fresh-gold mb-4"></div>
                  <ul className="flex flex-col gap-3">
                    {item.sub.map((subItem) => (
                      <li key={subItem} className="text-fresh-navy text-[9px] font-bold hover:text-fresh-gold transition-colors border-b border-slate-50 pb-2 last:border-0 uppercase tracking-widest text-left">
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Acciones Finales */}
          <div className="flex items-center gap-2 lg:gap-6">
            <div className={`flex items-center gap-3 lg:gap-5 pr-2 lg:pr-6 border-r transition-all ${
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
              className={`hidden sm:block px-4 lg:px-7 py-2 lg:py-3 font-black text-[8px] lg:text-[9px] uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 ${
                isScrolled 
                  ? "bg-fresh-navy text-white hover:bg-fresh-gold" 
                  : "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-fresh-navy"
              }`}
            >
              Asesoría Técnica
            </button>
          </div>
        </div>
      </nav>

      {/* --- PANEL MENÚ MÓVIL (Drawer) --- */}
      <div className={`fixed inset-0 z-[110] transition-visibility duration-500 ${isMobileMenuOpen ? "visible" : "invisible"}`}>
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-fresh-navy/90 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Contenido del Drawer */}
        <div className={`absolute top-0 left-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-expo ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-10">
              <img src={logoFresh} alt="FRESH" className="h-6 object-contain" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-fresh-navy p-2">
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto">
              <p className="text-[10px] font-black text-fresh-gold tracking-[0.3em] uppercase mb-6">Categorías Industriales</p>
              <div className="space-y-6">
                {navigationItems.map((item) => (
                  <div key={item.name} className="border-b border-slate-100 pb-4">
                    <p className="text-fresh-navy text-xs font-black uppercase tracking-widest mb-3">{item.name}</p>
                    <div className="grid grid-cols-1 gap-2 pl-2">
                      {item.sub.map(sub => (
                        <a key={sub} href="#" className="text-[10px] text-slate-500 font-bold hover:text-fresh-gold uppercase">{sub}</a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <button 
                onClick={() => handleContact('general')}
                className="w-full bg-fresh-navy text-white py-4 text-[10px] font-black uppercase tracking-widest"
              >
                Solicitar Asesoría
              </button>
              <div className="flex justify-center gap-6 py-4">
                 {/* Redes sociales en móvil */}
                 <a href="#" className="text-slate-400 hover:text-fresh-gold"><Phone size={18}/></a>
                 <a href="#" className="text-slate-400 hover:text-fresh-gold">IG</a>
                 <a href="#" className="text-slate-400 hover:text-fresh-gold">FB</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}