import React from 'react';

const SobreMi = () => {
    return (
        <section
            id="sobre-mi"
            className="bg-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center gap-8"
        >
            {/* Imagen */}
            <div className="md:w-1/2">
                <img
                    src="/images/sandra.jpg"
                    alt="Sandra C. Rivera"
                    className="rounded-xl shadow-xl w-full h-auto object-cover"
                />
            </div>

            {/* Contenido de texto */}
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4 font-display">
                    Sobre mí
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Soy <strong>Sandra C. Rivera</strong>, mentora y formadora de liderazgo femenino.
                    Acompaño a mujeres que desean conectar con su esencia, transformar su historia y liderar desde el corazón.
                    <br /><br />
                    Mi propósito es guiarte a que lideres tu vida desde la autenticidad, con visión, fuerza interior y conciencia.
                </p>
                <a
                    href="#escuela"
                    className="inline-block bg-pink-700 hover:bg-pink-800 text-white px-6 py-3 rounded-full transition-colors duration-300 text-sm font-semibold"
                >
                    Conoce mi escuela
                </a>
            </div>
        </section>
    );
};

export default SobreMi;
