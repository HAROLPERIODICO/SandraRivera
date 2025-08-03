import React from 'react';

const EscuelaLiderazgo = () => {
    return (
        <section
            id="escuela"
            className="bg-rose-50 py-16 px-6 md:px-12 flex flex-col md:flex-row items-center gap-8"
        >
            {/* Imagen */}
            <div className="md:w-1/2">
                <img
                    src="/images/escuela.jpg"
                    alt="Escuela de Liderazgo"
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
            </div>

            {/* Contenido de texto */}
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4 font-display">
                    Mi Escuela de Liderazgo
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Un espacio transformador para que las mujeres reconecten con su propósito, activen su liderazgo consciente y desarrollen una visión de vida auténtica.
                    Aquí aprenderás a liderarte desde tu esencia, con herramientas, comunidad y guía experta.
                </p>
                <a
                    href="#mentorias"
                    className="inline-block bg-pink-700 hover:bg-pink-800 text-white px-6 py-3 rounded-full transition-colors duration-300 text-sm font-semibold"
                >
                    Quiero saber más
                </a>
            </div>
        </section>
    );
};

export default EscuelaLiderazgo;
