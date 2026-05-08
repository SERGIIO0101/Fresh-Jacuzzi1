import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown, ShoppingBag, Menu, X } from "lucide-react";
import Ticker from "./Ticker";
import logoFresh from "../assets/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      setIsScrolled(scrolled);
      
      // Actualizamos la variable de altura para el CSS
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--navbar-height', `${height}px`);
      }
    };

    // Medición inicial
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]); // Re-calcula cuando cambia el estado

  const navigationItems = [
    {
      name: "Sistemas de Hidromasaje",
      sub: [
        { label: "1 Persona", link: "/categoria/1-persona" },
        { label: "2 Personas", link: "/categoria/2-personas" },
        { label: "Multipersonales", link: "/categoria/multipersonales" },
        { label: "Spas Premium", link: "/categoria/spas" }
      ]
    },
    {
      name: "Bañeras",
      sub: [
        { label: "Freestanding", link: "/categoria/freestanding" },
        { label: "Bañeras Acrílicas", link: "/categoria/acrilicas" },
        { label: "Diseños a Medida", link: "/categoria/medida" }
      ]
    },
    {
      name: "Línea Hogar",
      sub: [
        { label: "Lavarropas en Fibra", link: "/categoria/lavarropas" },
        { label: "Fregaderos de Lujo", link: "/categoria/fregaderos" },
      ]
    },
    {
      name: "Servicios",
      sub: [
        { label: "Instalación Profesional", link: "/servicios" },
        { label: "Mantenimiento Preventivo", link: "/servicios" },
        { label: "Repuestos Genuinos", link: "/servicios" }
      ]
    }
  ];

  const handleContact = (phone) => {
    const message = encodeURIComponent("Hola FRESH. Deseo solicitar una asesoría profesional.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-[100] flex flex-col transition-all duration-500"
    >
      {/* NIVEL 1: TICKER */}
      <div className="relative z-[60] bg-fresh-navy">
        <Ticker />
      </div>

      {/* NIVEL 2: INSTITUCIONAL */}
      <div className={`bg-fresh-navy text-white transition-all duration-500 ease-in-out border-b border-white/5 relative z-40 ${
        isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-16 lg:h-24 opacity-100"
      }`}>
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 w-full flex justify-between items-center h-full">
          <div className="hidden lg:flex flex-col gap-1 text-[8px] uppercase tracking-[0.2em] font-black border-r border-white/10 pr-8 text-left">
            <div className="flex items-center gap-2 cursor-pointer hover:text-fresh-gold transition-colors" onClick={() => handleContact('573126799235')}>
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span>WS: +57 312 679 9235</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-fresh-gold transition-colors" onClick={() => handleContact('573229181669')}>
              <span className="text-fresh-gold">VENTAS: 322 918 1669</span>
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/">
              <img src={logoFresh} alt="FRESH" className="h-10 lg:h-16 brightness-0 invert object-contain" />
            </Link>
          </div>

          <div className="hidden lg:flex gap-8 items-center text-[9px] uppercase tracking-[0.3em] font-black">
            <Link to="/acerca-de-fresh" className="hover:text-fresh-gold transition-colors">Acerca</Link>
            <Link to="/contacto" className="hover:text-fresh-gold transition-colors">Contacto</Link>
            <Link to="/donde-comprar" className="text-fresh-gold border-l border-white/10 pl-6 flex items-center gap-2 group cursor-pointer">
              <span className="text-white group-hover:text-fresh-gold transition-colors">¿Dónde comprar?</span>
            </Link>
          </div>
        </div>
      </div>

      {/* NIVEL 3: NAVEGACIÓN PRINCIPAL */}
      <nav className={`transition-all duration-500 ease-in-out relative z-30 ${
          isScrolled ? "h-16 lg:h-20 bg-white shadow-xl" : "h-16 lg:h-20 bg-white/90 backdrop-blur-md"
        }`}>
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 w-full h-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-fresh-navy">
              <Menu size={24} />
            </button>
            <Link to="/" className={`transition-all duration-500 ${isScrolled ? "w-24 lg:w-32 opacity-100" : "w-0 opacity-0 pointer-events-none"}`}>
              <img src={logoFresh} alt="FRESH" className="h-6 lg:h-8 object-contain" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-fresh-navy">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group py-8 cursor-pointer">
                <div className="flex items-center gap-1.5 group-hover:text-fresh-gold transition-colors">
                  <span>{item.name}</span>
                  <ChevronDown size={10} className="text-fresh-gold group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <div className="absolute top-[90%] left-0 w-80 bg-white border border-slate-100 shadow-2xl p-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="w-8 h-0.5 bg-fresh-gold mb-4"></div>
                  <ul className="flex flex-col gap-3">
                    {item.sub.map((sub) => (
                      <li key={sub.label} className="text-fresh-navy text-[9px] font-bold hover:text-fresh-gold transition-colors border-b border-slate-50 pb-2 last:border-0 uppercase tracking-[0.1em] text-left">
                        <Link to={sub.link} className="block w-full">{sub.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 pr-5 border-r border-slate-200 text-fresh-navy">
              <Search size={18} className="cursor-pointer hover:text-fresh-gold transition-colors" />
              <div className="relative cursor-pointer group">
                <ShoppingBag size={18} className="group-hover:text-fresh-gold transition-colors" />
                <span className="absolute -top-2 -right-2 bg-fresh-gold text-white text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full">0</span>
              </div>
            </div>
            <button 
              onClick={() => handleContact('573126799235')}
              className="px-6 py-3 font-black text-[9px] uppercase tracking-[0.2em] bg-fresh-navy text-white hover:bg-fresh-gold transition-all duration-300"
            >
              Asesoría Técnica
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-[110] ${isMobileMenuOpen ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-fresh-navy/95 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-0 left-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-10">
              <img src={logoFresh} alt="FRESH" className="h-6 object-contain" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-50 rounded-full"><X size={20} /></button>
            </div>
            <div className="flex-grow overflow-y-auto space-y-8">
              <div className="flex flex-col gap-4 border-b border-slate-100 pb-6">
                <Link to="/acerca-de-fresh" onClick={() => setIsMobileMenuOpen(false)} className="text-fresh-navy text-[11px] font-black uppercase tracking-widest">Acerca</Link>
                <Link to="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="text-fresh-navy text-[11px] font-black uppercase tracking-widest">Contacto</Link>
                <Link to="/donde-comprar" onClick={() => setIsMobileMenuOpen(false)} className="text-fresh-navy text-[11px] font-black uppercase tracking-widest">Tiendas</Link>
              </div>
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <p className="text-slate-400 text-[10px] font-black uppercase mb-3 tracking-widest">{item.name}</p>
                  <div className="flex flex-col gap-3 pl-3">
                    {item.sub.map(sub => (
                      <Link key={sub.label} to={sub.link} onClick={() => setIsMobileMenuOpen(false)} className="text-[10px] text-fresh-navy font-bold uppercase">{sub.label}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}