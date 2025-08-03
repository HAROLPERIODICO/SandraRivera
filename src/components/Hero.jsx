import React from 'react';

const Hero = () => {
    return (
        <section
            className="h-[90vh] bg-cover bg-center relative flex items-center justify-center"
            style={{
                backgroundImage: "url('/images/hero.jpg')", // Asegúrate de tener esta imagen
            }}
            id="inicio"
        >
            {/* Fondo semitransparente */}
            <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-blur-sm"></div>

            {/* Contenido */}
            <div className="relative z-10 text-center px-6 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-display text-pink-700 font-bold mb-4">
                    Despierta tu Liderazgo Consciente
                </h1>
                <p className="text-lg md:text-xl text-gray-800 font-medium">
                    Acompaño a mujeres a liderar con autenticidad, propósito y poder interior.
                </p>
            </div>
        </section>
    );
};

export default Hero;
