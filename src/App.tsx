
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SobreMi from './components/SobreMi';
import Escuela from './components/Escuela';
import Mentorias from './components/Mentorias';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <Escuela />
        <SobreMi />
        <Mentorias />
        <Testimonios />
        <Contacto />
        <Footer />
        
        {/* Aquí puedes agregar más componentes si es necesario */}
      
      

      </main>
    </div>

  );
}

export default App;
// 