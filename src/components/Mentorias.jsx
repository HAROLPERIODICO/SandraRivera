import React from 'react';

const Mentorias = () => {
    return (
        <section
            id="mentorias"
            className="bg-white py-16 px-6 md:px-12 flex flex-col md:flex-row-reverse items-center gap-8"
        >
            {/* Imagen a la derecha */}
            <div className="md:w-1/2">
                <img
                    src="/images/mentorias.jpg"
                    alt="Mentorías"
                    className="rounded-xl shadow-xl w-full h-auto object-cover"
                />
            </div>

            {/* Contenido de texto */}
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4 font-display">
                    Mentorías 1:1
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    A través de mis sesiones personalizadas, te acompaño a mirar tu historia con amor, soltar patrones limitantes
                    y activar tu poder interior.
                    <br /><br />
                    Juntas trazamos el camino para que te lideres desde tu esencia y tomes decisiones con claridad, visión y propósito.
                </p>
                <a
                    href="#contacto"
                    className="inline-block bg-pink-700 hover:bg-pink-800 text-white px-6 py-3 rounded-full transition-colors duration-300 text-sm font-semibold"
                >
                    Agendar sesión
                </a>
            </div>
        </section>
    );
};

export default Mentorias;
