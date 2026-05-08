import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

// Componentes Base
import Ticker from './components/Ticker';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Páginas
import About from './pages/About';
import Contact from './pages/Contact';
import WhereToBuy from './pages/WhereToBuy';

// --- NUEVAS IMPORTACIONES DE HIDROMASAJES ---
import HidroIndex from './pages/hidro/HidroIndex';
import Hidro1P from './pages/hidro/Hidro1P';
import Hidro2P from './pages/hidro/Hidro2P';
import HidroMulti from './pages/hidro/HidroMulti';
import HidroPremium from './pages/hidro/HidroPremium';

// Componentes de la Home
import Hero from './components/Hero';
import Features from './components/Features'; 
import Categories from './components/Categories';
import Catalogs from './components/Catalogs';
import News from './components/News.jsx'; 
import Testimonials from './components/Testimonials';
import Subscription from './components/Subscription';

// Componente para la página de Inicio
const Home = ({ isScrolled }) => (
  <main className="flex-grow">
    <Hero />
    <div className="relative z-20 -mt-10 md:-mt-24 px-4 md:px-0">
      <Features />
    </div>
    <Categories />
    <div className="bg-slate-50/50 border-y border-slate-100 py-4">
       <Catalogs />
    </div>
    <News />
    <Testimonials />
    <Subscription />
  </main>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white antialiased selection:bg-fresh-gold/20 selection:text-fresh-navy overflow-x-hidden relative">
      
      {/* 1. PRELOADER */}
      <div className={`fixed inset-0 z-[999] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-white"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border-t-2 border-fresh-gold animate-spin mb-6"></div>
          <h1 className="text-fresh-navy text-xl font-black tracking-[10px] uppercase italic">Fresh</h1>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[4px] mt-4">Ingeniería del Bienestar</p>
        </div>
      </div>

      {/* 2. CABECERA FIJA */}
      <header className="fixed top-0 left-0 right-0 z-[100]">
        <Ticker />
        <Navbar isScrolled={isScrolled} />
      </header>

      {/* 3. ESPACIADOR DINÁMICO */}
      <div className={`transition-all duration-500 ease-in-out ${
        isScrolled ? 'h-[70px] lg:h-[90px]' : 'h-[120px] lg:h-[160px]' 
      }`} />

      {/* 4. SISTEMA DE RUTAS */}
      <Routes>
        <Route path="/" element={<Home isScrolled={isScrolled} />} />
        <Route path="/acerca-de-fresh" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/donde-comprar" element={<WhereToBuy />} />

        {/* --- RUTAS DE HIDROMASAJES --- */}
        <Route path="/hidromasajes">
          <Route index element={<HidroIndex />} /> {/* Página principal de Hidros */}
          <Route path="individual" element={<Hidro1P />} />
          <Route path="duo" element={<Hidro2P />} />
          <Route path="multi" element={<HidroMulti />} />
          <Route path="premium" element={<HidroPremium />} />
        </Route>
      </Routes>

      <Footer />
      
      {/* 5. BOTÓN FLOTANTE WHATSAPP */}
      <a 
        href="https://wa.me/3229181669" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex items-center group"
      >
        <div className="hidden md:block mr-4 bg-fresh-navy text-white text-[10px] font-black uppercase tracking-widest py-3 px-6 rounded-full shadow-2xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
          Consultoría Técnica
        </div>
        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </a>
      
    </div>
  );
}