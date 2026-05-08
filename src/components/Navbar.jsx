import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Solo importamos los iconos estándar que NO dan problemas de exportación
import { 
  Search, 
  ChevronDown, 
  ShoppingBag, 
  Menu, 
  X 
} from "lucide-react";

import Ticker from "./Ticker";
import logoFresh from "../assets/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // SVGs Manuales para Redes Sociales (Inmunes a errores de Vite/Lucide)
  const SVGIcons = {
    instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    ),
    facebook: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    ),
    youtube: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 119.55 119.55 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 119.55 119.55 0 0 1-15 0 2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
    )
  };

  const socialLinks = [
    { 
      name: "Youtube", 
      icon: SVGIcons.youtube, 
      href: "https://www.youtube.com/@freshjacuzzis" 
    },
    { 
      name: "Instagram", 
      icon: SVGIcons.instagram, 
      href: "https://www.instagram.com/jacuzzis_fresh/" 
    },
    { 
      name: "Facebook", 
      icon: SVGIcons.facebook, 
      href: "https://www.facebook.com/people/FRESH-Jacuzzis/61555844768663/" 
    }
  ];

  const navigationItems = [
    {
      name: "Hidromasajes",
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
        { label: "Instalación", link: "/servicios" },
        { label: "Mantenimiento", link: "/servicios" },
        { label: "Repuestos", link: "/servicios" }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      setIsScrolled(scrolled);
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--navbar-height', `${height}px`);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContact = (phone) => {
    const message = encodeURIComponent("Hola FRESH. Deseo solicitar una asesoría profesional.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full z-[100] flex flex-col">
      {/* TICKER */}
      <div className="bg-fresh-navy relative z-[60]">
        <Ticker />
      </div>

      {/* TOPBAR DESKTOP */}
      <div className={`hidden lg:flex bg-fresh-navy text-white transition-all duration-500 ease-in-out border-b border-white/5 relative z-40 ${
        isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-20 opacity-100"
      }`}>
        <div className="max-w-[1600px] mx-auto px-8 w-full flex justify-between items-center h-full">
          <div className="flex items-center gap-8 border-r border-white/10 pr-8">
            <div className="flex flex-col gap-1 text-[8px] uppercase tracking-[0.2em] font-black">
              <div className="flex items-center gap-2 cursor-pointer hover:text-fresh-gold transition-colors" onClick={() => handleContact('573126799235')}>
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span>WS: +57 312 679 9235</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-fresh-gold transition-colors" onClick={() => handleContact('573229181669')}>
                <span className="text-fresh-gold">VENTAS: 322 918 1669</span>
              </div>
            </div>
            <div className="flex items-center gap-4 border-l border-white/10 pl-8">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-fresh-gold transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/">
              <img src={logoFresh} alt="FRESH" className="h-12 brightness-0 invert object-contain" />
            </Link>
          </div>

          <div className="flex gap-8 items-center text-[9px] uppercase tracking-[0.3em] font-black">
            <Link to="/acerca-de-fresh" className="hover:text-fresh-gold transition-colors">Acerca</Link>
            <Link to="/contacto" className="hover:text-fresh-gold transition-colors">Contacto</Link>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className={`transition-all duration-500 relative z-30 h-16 lg:h-20 ${
          isScrolled ? "bg-white shadow-xl" : "bg-white/90 backdrop-blur-md"
        }`}>
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 w-full h-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-fresh-navy">
              <Menu size={28} />
            </button>
            <Link to="/" className={`transition-all duration-500 ${isScrolled ? "opacity-100 w-auto" : "lg:opacity-0 lg:w-0 overflow-hidden"}`}>
              <img src={logoFresh} alt="FRESH" className="h-6 lg:h-8 object-contain" />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-fresh-navy h-full">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group h-full flex items-center cursor-pointer">
                <div className="flex items-center gap-1.5 group-hover:text-fresh-gold transition-colors">
                  <span>{item.name}</span>
                  <ChevronDown size={10} className="text-fresh-gold group-hover:rotate-180 transition-transform duration-300" />
                </div>
                <div className="absolute top-full left-0 w-64 bg-white border-t-2 border-fresh-gold shadow-2xl p-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <ul className="flex flex-col gap-4">
                    {item.sub.map((sub) => (
                      <li key={sub.label}>
                        <Link to={sub.link} className="text-fresh-navy text-[9px] font-bold hover:text-fresh-gold transition-colors block uppercase">
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 lg:gap-6">
            <div className="flex items-center gap-4 pr-3 lg:pr-5 border-r border-slate-200 text-fresh-navy">
              <Search size={20} className="cursor-pointer hover:text-fresh-gold transition-colors" />
              <div className="relative cursor-pointer group">
                <ShoppingBag size={20} className="group-hover:text-fresh-gold transition-colors" />
                <span className="absolute -top-2 -right-2 bg-fresh-gold text-white text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full">0</span>
              </div>
            </div>
            <button onClick={() => handleContact('573126799235')} className="hidden sm:block px-4 lg:px-6 py-2.5 lg:py-3 font-black text-[8px] lg:text-[9px] uppercase tracking-[0.2em] bg-fresh-navy text-white hover:bg-fresh-gold transition-all duration-300 shadow-lg">
              Asesoría
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-[120] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-fresh-navy/80 backdrop-blur-md transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-0 left-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-6 flex justify-between items-center border-b border-slate-50">
            <img src={logoFresh} alt="FRESH" className="h-6 object-contain" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-fresh-navy bg-slate-100 rounded-full">
              <X size={24} />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-6">
            <div className="space-y-10">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">{item.name}</h3>
                  <div className="flex flex-col gap-4 pl-2 border-l-2 border-fresh-gold/20">
                    {item.sub.map(sub => (
                      <Link key={sub.label} to={sub.link} onClick={() => setIsMobileMenuOpen(false)} className="text-[11px] text-fresh-navy font-bold uppercase">{sub.label}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 bg-slate-50 border-t border-slate-100">
            <div className="flex justify-center gap-8 mb-6">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-fresh-navy/60 hover:text-fresh-gold">
                  {social.icon}
                </a>
              ))}
            </div>
            <button onClick={() => handleContact('573126799235')} className="w-full py-4 bg-fresh-navy text-white text-[10px] font-black uppercase tracking-[0.2em]">
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}