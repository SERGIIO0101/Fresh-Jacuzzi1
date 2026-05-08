import React from 'react';

export default function Subscription() {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/5 text-center font-montserrat">
      <div className="container mx-auto px-6">
        
        {/* Título con tracking amplio para estilo premium */}
        <h2 className="text-xl md:text-2xl font-black text-white mb-4 tracking-[0.2em] uppercase italic">
          Suscríbete a la vanguardia
        </h2>
        
        <p className="text-slate-500 text-[9px] md:text-[10px] uppercase tracking-[5px] mb-12 max-w-2xl mx-auto leading-relaxed">
          Recibe las últimas tendencias en ingeniería del bienestar y diseño de hidromasajes
        </p>

        <form 
          className="max-w-xl mx-auto flex flex-col md:flex-row items-end gap-8 md:gap-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="w-full relative group">
            <input 
              type="email" 
              placeholder="TU CORREO ELECTRÓNICO" 
              className="bg-transparent border-b border-white/10 w-full py-4 text-[10px] tracking-[3px] text-white outline-none transition-all duration-500 focus:border-fresh-gold/50 placeholder:text-slate-700" 
            />
            
            {/* Línea de foco animada con el dorado de Fresh */}
            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-fresh-gold transition-all duration-700 group-focus-within:w-full"></div>
          </div>

          <button 
            type="submit"
            className="w-full md:w-auto text-[10px] tracking-[4px] font-black uppercase text-white hover:text-fresh-gold transition-all duration-300 pb-4 border-b border-white/10 hover:border-fresh-gold whitespace-nowrap"
          >
            Suscribirse
          </button>
        </form>

        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="w-10 h-[1px] bg-fresh-gold/30"></div>
          <p className="text-[7px] md:text-[8px] text-slate-600 uppercase tracking-[3px] max-w-xs leading-loose">
            Al suscribirte, aceptas nuestra política de tratamiento de datos personales y privacidad.
          </p>
        </div>
      </div>
    </section>
  );
}