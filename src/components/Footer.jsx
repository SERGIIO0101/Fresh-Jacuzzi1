import React from 'react';
import * as Icons from 'lucide-react';
import logoFresh from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Función interna segura para iconos de Lucide (excepto redes sociales problemáticas)
  const SafeIcon = ({ name, size = 18, className = "" }) => {
    const LucideIcon = Icons[name];
    if (!LucideIcon) return null;
    return <LucideIcon size={size} className={className} />;
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-8 border-t border-white/5 font-sans">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Identidad */}
          <div className="flex flex-col gap-8">
            <img 
              src={logoFresh} 
              className="h-10 w-auto brightness-0 invert self-start" 
              alt="FRESH" 
            />
            <p className="text-white/40 text-[13px] leading-relaxed max-w-sm font-light italic">
              Líderes en ingeniería de bienestar. Sistemas de hidromasaje de alta gama con garantía estructural premium.
            </p>
            
            {/* Redes Sociales con SVGs Directos (Anti-errores) */}
            <div className="flex gap-4">
              {/* Instagram */}
              <a href="https://www.instagram.com/jacuzzis_fresh/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-fresh-gold hover:border-fresh-gold transition-all duration-500 group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-fresh-navy transition-colors">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/people/FRESH-Jacuzzis/61555844768663/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-fresh-gold hover:border-fresh-gold transition-all duration-500 group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-fresh-navy transition-colors">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Líneas de Producto */}
          <div>
            <h4 className="text-fresh-gold text-[10px] font-black uppercase tracking-[0.3em] mb-10">Líneas de Producto</h4>
            <ul className="flex flex-col gap-5 text-[11px] uppercase tracking-widest font-bold">
              <li className="group">
                <a href="#" className="hover:text-fresh-gold transition-colors flex items-center gap-2">
                  Hidromasajes <SafeIcon name="ArrowUpRight" size={12} className="opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
                </a>
              </li>
              <li><a href="#" className="hover:text-fresh-gold transition-colors">Spas & Wellness</a></li>
              <li><a href="#" className="hover:text-fresh-gold transition-colors">Zona de Labores</a></li>
              <li><a href="#" className="hover:text-fresh-gold transition-colors">Cocinas</a></li>
            </ul>
          </div>

          {/* Corporativo */}
          <div>
            <h4 className="text-fresh-gold text-[10px] font-black uppercase tracking-[0.3em] mb-10">Corporativo</h4>
            <ul className="flex flex-col gap-5 text-[11px] uppercase tracking-widest font-bold text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Fichas Técnicas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manuales de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Políticas de Garantía</a></li>
            </ul>
          </div>

          {/* Contacto Técnico */}
          <div className="bg-white/[0.02] p-8 border border-white/5 rounded-2xl">
            <h4 className="text-fresh-gold text-[10px] font-black uppercase tracking-[0.3em] mb-8">Contacto Oficial</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <SafeIcon name="Phone" size={16} className="text-fresh-gold shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase opacity-40 tracking-widest mb-1">Línea Nacional</span>
                  <a href="tel:+573172464196" className="text-sm font-bold hover:text-fresh-gold transition-colors">+57 317 246 4196</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <SafeIcon name="Mail" size={16} className="text-fresh-gold shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase opacity-40 tracking-widest mb-1">Email Corporativo</span>
                  <a href="mailto:ventas@freshhidro.com" className="text-sm font-bold hover:text-fresh-gold transition-colors text-balance">ventas@freshhidro.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <SafeIcon name="MapPin" size={16} className="text-fresh-gold shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase opacity-40 tracking-widest mb-1">Centro de Operaciones</span>
                  <span className="text-sm font-bold italic">Medellín, Colombia</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Final */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 text-center md:text-left font-medium">
            © {currentYear} FRESH HIDROJACUZZ S.A.S. • Todos los derechos reservados.
          </p>
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
              Desarrollado por <span className="text-white font-black hover:text-fresh-gold transition-colors cursor-default">Sergio Severiche Guerrero</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}