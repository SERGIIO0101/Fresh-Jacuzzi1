import React from 'react';
import { Search, ChevronDown, ShoppingBag, Menu, X, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import logoFresh from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // SVGs MANUALES (Cero errores de exportación y máxima velocidad)
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
    { name: "Youtube", href: "https://www.youtube.com/@freshjacuzzis", icon: SVGIcons.youtube },
    { name: "Instagram", href: "https://www.instagram.com/jacuzzis_fresh/", icon: SVGIcons.instagram },
    { name: "Facebook", href: "https://www.facebook.com/people/FRESH-Jacuzzis/61555844768663/", icon: SVGIcons.facebook }
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 md:pt-32 pb-10 px-6 md:px-12 border-t border-white/5 font-sans overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20 md:mb-28">
          
          {/* Bloque 1: Identidad */}
          <div className="flex flex-col gap-6 md:gap-8">
            <img 
              src={logoFresh} 
              className="h-8 md:h-10 w-auto brightness-0 invert self-start" 
              alt="FRESH" 
            />
            <p className="text-white/40 text-[12px] md:text-[13px] leading-relaxed max-w-xs font-medium italic">
              Líderes en ingeniería de bienestar. Sistemas de hidromasaje de alta gama con certificación técnica y garantía estructural premium.
            </p>
            
            {/* Redes Sociales */}
            <div className="flex gap-4 mt-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-fresh-gold hover:border-fresh-gold transition-all duration-500 group"
                  title={social.name}
                >
                  <span className="group-hover:text-fresh-navy transition-colors text-white/70">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Bloque 2: Líneas de Producto */}
          <div className="lg:pl-10">
            <h4 className="text-fresh-gold text-[10px] font-black uppercase tracking-[0.4em] mb-8 md:mb-10">Líneas de Producto</h4>
            <ul className="flex flex-col gap-4 md:gap-5 text-[11px] uppercase tracking-widest font-bold">
              <li className="group">
                <a href="/categoria/spas" className="hover:text-fresh-gold transition-colors flex items-center gap-2">
                  Hidromasajes <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0 text-fresh-gold" />
                </a>
              </li>
              <li><a href="/categoria/spas" className="hover:text-fresh-gold transition-colors">Spas & Wellness</a></li>
              <li><a href="/categoria/lavarropas" className="hover:text-fresh-gold transition-colors">Zona de Labores</a></li>
              <li><a href="/categoria/fregaderos" className="hover:text-fresh-gold transition-colors">Grifería & Cocinas</a></li>
            </ul>
          </div>

          {/* Bloque 3: Corporativo */}
          <div>
            <h4 className="text-fresh-gold text-[10px] font-black uppercase tracking-[0.4em] mb-8 md:mb-10">Corporativo</h4>
            <ul className="flex flex-col gap-4 md:gap-5 text-[11px] uppercase tracking-widest font-bold text-white/40">
              <li><a href="/servicios" className="hover:text-white transition-colors">Fichas Técnicas</a></li>
              <li><a href="/servicios" className="hover:text-white transition-colors">Manuales de Uso</a></li>
              <li><a href="/servicios" className="hover:text-white transition-colors">Políticas de Garantía</a></li>
              <li><a href="/contacto" className="hover:text-white transition-colors">Tratamiento de Datos</a></li>
            </ul>
          </div>

          {/* Bloque 4: Contacto Técnico */}
          <div className="bg-white/[0.03] p-8 md:p-10 border border-white/5 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-fresh-gold/5 blur-3xl rounded-full -mr-10 -mt-10"></div>
            <h4 className="text-fresh-gold text-[10px] font-black uppercase tracking-[0.4em] mb-8 relative z-10">Contacto Oficial</h4>
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-start gap-4">
                <Phone size={16} className="text-fresh-gold shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase opacity-40 tracking-widest mb-1 font-bold">Línea Nacional</span>
                  <a href="tel:+573172464196" className="text-sm md:text-base font-bold hover:text-fresh-gold transition-colors tracking-tight">+57 317 246 4196</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={16} className="text-fresh-gold shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase opacity-40 tracking-widest mb-1 font-bold">Asesoría Técnica</span>
                  <a href="mailto:ventas@freshhidro.com" className="text-sm md:text-base font-bold hover:text-fresh-gold transition-colors break-all tracking-tight">ventas@freshhidro.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-fresh-gold shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase opacity-40 tracking-widest mb-1 font-bold">Centro de Operaciones</span>
                  <span className="text-sm font-bold italic text-white/90">Medellín, Antioquia</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Barra de Copyright */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
              © {currentYear} FRESH HIDROJACUZZ S.A.S. • Registro NIT 901.782.456-1
            </p>
            <p className="text-[8px] uppercase tracking-[0.2em] text-white/10">
              Ingeniería de bienestar para proyectos arquitectónicos de alto nivel.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">
              Desarrollado por <span className="text-white font-black hover:text-fresh-gold transition-all duration-300 cursor-pointer">Sergio Severiche Guerrero</span>
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}