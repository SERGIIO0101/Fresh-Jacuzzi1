import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importante para la navegación interna
import { 
  Search, ChevronDown, ShoppingBag, Menu, X 
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
    const message = encodeURIComponent("Hola FRESH. Deseo solicitar una asesoría profesional sobre sus sistemas de hidromasaje.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex flex-col transition-all duration-500">
      
      <div className="relative z-[60] bg-fresh-navy">
        <Ticker />
      </div>

      {/* NIVEL 2: INSTITUCIONAL */}
      <div className={`bg-fresh-navy text-white transition-all duration-700 ease-in-out border-b border-white/5 relative z-40 ${
        isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-16 lg:h-24 opacity-100"
      }`}>
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 w-full flex justify-between items-center h-full">
          
          <div className="hidden lg:flex flex-col gap-1 text-[8px] uppercase tracking-[0.2em] font-black border-r border-white/10 pr-8 text-left">
            <div className="flex items-center gap-2 cursor-pointer hover:text-fresh-gold transition-colors" onClick={() => handleContact('573126799235')}>
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span>WS: +57 312 679 9235</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-fresh-gold transition-colors" onClick={() => handleContact('573229181669')}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-fresh-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>VENTAS: 322 918 1669</span>
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/">
              <img src={logoFresh} alt="FRESH" className="h-10 lg:h-16 brightness-0 invert object-contain" />
            </Link>
          </div>

          <div className="hidden lg:flex gap-8 items-center text-[9px] uppercase tracking-[0.3em] font-black">
            <Link to="/acerca-de-fresh" className="hover:text-fresh-gold transition-colors">Acerca de Fresh</Link>
            <Link to="/contacto" className="hover:text-fresh-gold transition-colors">Contacto</Link>
            <Link to="/donde-comprar" className="flex items-center gap-2 text-fresh-gold border-l border-white/10 pl-6 cursor-pointer group">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <span className="text-white group-hover:text-fresh-gold transition-colors">¿Dónde comprar?</span>
            </Link>
          </div>
        </div>
      </div>

      {/* NIVEL 3: NAVEGACIÓN PRINCIPAL */}
      <nav className={`transition-all duration-500 ease-in-out relative z-30 ${
          isScrolled ? "h-16 lg:h-20 bg-white shadow-xl border-b border-slate-100" : "h-16 lg:h-20 bg-transparent"
        }`}>
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 w-full h-full flex justify-between items-center">
          
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMobileMenuOpen(true)} className={`lg:hidden p-2 ${isScrolled ? "text-fresh-navy" : "text-white"}`}>
              <Menu size={24} />
            </button>
            <Link to="/" className={`transition-all duration-500 ${isScrolled ? "w-24 lg:w-32 opacity-100" : "w-0 opacity-0 pointer-events-none"}`}>
              <img src={logoFresh} alt="FRESH" className="h-6 lg:h-8 object-contain" />
            </Link>
          </div>

          <div className={`hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] ${
            isScrolled ? "text-fresh-navy" : "text-white"
          }`}>
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group py-8 cursor-pointer">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="group-hover:text-fresh-gold transition-colors">{item.name}</span>
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
            <div className={`flex items-center gap-4 pr-5 border-r ${
              isScrolled ? "text-fresh-navy border-slate-200" : "text-white border-white/20"
            }`}>
              <Search size={18} className="cursor-pointer hover:text-fresh-gold transition-colors" />
              <div className="relative cursor-pointer group">
                <ShoppingBag size={18} className="group-hover:text-fresh-gold transition-colors" />
                <span className="absolute -top-2 -right-2 bg-fresh-gold text-white text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full">0</span>
              </div>
            </div>
            
            <button 
              onClick={() => handleContact('573126799235')}
              className={`px-6 py-3 font-black text-[9px] uppercase tracking-[0.2em] transition-all duration-300 ${
                isScrolled 
                  ? "bg-fresh-navy text-white hover:bg-fresh-gold" 
                  : "bg-white text-fresh-navy hover:bg-fresh-gold hover:text-white"
              }`}
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
            <div className="flex justify-between items-center mb-10 text-fresh-navy">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img src={logoFresh} alt="FRESH" className="h-6 object-contain" />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-50 rounded-full"><X size={20} /></button>
            </div>
            <div className="flex-grow overflow-y-auto space-y-8">
              {/* Links institucionales en Móvil */}
              <div className="flex flex-col gap-4 border-b border-slate-100 pb-6">
                 <Link to="/acerca-de-fresh" onClick={() => setIsMobileMenuOpen(false)} className="text-fresh-navy text-[11px] font-black uppercase tracking-widest">Acerca de Fresh</Link>
                 <Link to="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="text-fresh-navy text-[11px] font-black uppercase tracking-widest">Contacto</Link>
                 <Link to="/donde-comprar" onClick={() => setIsMobileMenuOpen(false)} className="text-fresh-navy text-[11px] font-black uppercase tracking-widest">¿Dónde comprar?</Link>
              </div>

              {navigationItems.map((item) => (
                <div key={item.name}>
                  <p className="text-fresh-navy text-[10px] font-black uppercase border-b border-slate-100 pb-2 mb-3 tracking-widest text-slate-400">{item.name}</p>
                  <div className="flex flex-col gap-3 pl-3">
                    {item.sub.map(sub => (
                      <Link key={sub.label} to={sub.link} onClick={() => setIsMobileMenuOpen(false)} className="text-[10px] text-fresh-navy font-bold uppercase hover:text-fresh-gold">{sub.label}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100">
               <button onClick={() => handleContact('573126799235')} className="w-full bg-fresh-navy text-white py-4 text-[10px] font-black uppercase tracking-widest">Chat WhatsApp</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}