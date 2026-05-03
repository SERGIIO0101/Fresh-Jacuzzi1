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
      {/* 1. Header: Optimizamos el Z-index y la sombra para móvil */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex flex-col shadow-xl md:shadow-2xl">
        <Ticker />
        <Navbar />
      </header>
      
      {/* 2. Main Content */}
      <main className="flex-grow"> 
        
        {/* El Hero maneja su propio padding interno para no quedar tapado por el header fijo */}
        <Hero />
        
        {/* Contenedor de secciones con espaciado responsivo */}
        <div className="relative z-10 bg-white">
          <Categories />
          <Offers />
          <Carousel />
          <Promos />
          <TrustBar />
          <Testimonials />
        </div>

        {/* 9. Sección Call to Action: Optimizada para pulgares y pantallas pequeñas */}
        <section className="relative py-24 md:py-44 px-6 bg-fresh-navy overflow-hidden">
          {/* Fondo: quitamos bg-fixed en móvil (da problemas de rendimiento) */}
          <div className="absolute inset-0 opacity-20 grayscale bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000')] bg-cover bg-center md:bg-fixed"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Texto: Ajustamos el tamaño de 5xl a 4xl en móvil para evitar saltos de línea feos */}
            <h2 className="text-white text-4xl md:text-8xl font-black uppercase tracking-tighter mb-6 md:mb-8 leading-[0.9] md:leading-[0.85]">
              Transforma tu <br />
              <span className="text-fresh-gold italic font-serif lowercase block md:inline mt-2 md:mt-0">
                espacio hoy
              </span>
            </h2>
            
            {/* Separador visual opcional para móvil */}
            <div className="w-12 h-[1px] bg-fresh-gold/50 mx-auto mb-8 md:hidden"></div>

            <p className="text-white/70 text-[8px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] mb-10 md:mb-12 font-bold px-4 md:px-0">
              Diseño de vanguardia • Calidad Superior • Garantía Fresh
            </p>

            {/* Botón: Más alto en móvil para facilitar el clic (Tap Target) */}
            <a 
              href="https://wa.me/573172464196" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full md:w-auto items-center justify-center px-10 md:px-16 py-5 md:py-6 overflow-hidden border-2 border-fresh-gold transition-all duration-500"
            >
              <span className="relative z-10 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] group-hover:text-fresh-navy transition-colors duration-500">
                Solicitar Presupuesto
              </span>
              <div className="absolute inset-0 bg-fresh-gold transform scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;