import React from "react";
import Ticker from "./components/Ticker";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Offers from "./components/Offers";
import Carousel from "./components/Carousel";
import Promos from "./components/Promos";
import Testimonials from "./components/Testimonials";
import TrustBar from "./components/TrustBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white antialiased flex flex-col">
      {/* 1. Header: Corregido con Flex-Col para evitar que se pisen los componentes */}
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col shadow-2xl">
        <Ticker />
        <Navbar />
      </header>
      
      {/* 2. Main Content: 
        - Eliminamos el pt-[140px] para que el Hero suba hasta el techo.
        - El Navbar se encargará de ser transparente al inicio para que el Hero se vea completo.
      */}
      <main className="flex-grow"> 
        
        {/* El Hero ahora empieza desde arriba (Z-0) detrás del Navbar transparente */}
        <Hero />
        
        {/* Contenedor de seguridad para el resto de secciones */}
        <div className="relative z-10 bg-white">
          
          <Categories />
          <Offers />
          <Carousel />
          <Promos />
          <TrustBar />
          <Testimonials />

        </div>

        {/* 9. Sección Call to Action / Cierre de Venta (Mejorada) */}
        <section className="relative py-32 md:py-44 px-6 bg-fresh-navy overflow-hidden">
          <div className="absolute inset-0 opacity-20 grayscale bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000')] bg-cover bg-fixed bg-center"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
              Transforma tu <br />
              <span className="text-fresh-gold italic font-serif lowercase">espacio hoy</span>
            </h2>
            
            <p className="text-white/70 text-[10px] md:text-xs uppercase tracking-[0.5em] mb-12 font-bold">
              Diseño de vanguardia • Calidad Superior • Garantía Fresh
            </p>

            <a 
              href="https://wa.me/573172464196" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-16 py-6 overflow-hidden border-2 border-fresh-gold transition-all duration-500"
            >
              <span className="relative z-10 text-white text-xs font-black uppercase tracking-[0.3em] group-hover:text-fresh-navy transition-colors duration-500">
                Solicitar Presupuesto
              </span>
              <div className="absolute inset-0 bg-fresh-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;