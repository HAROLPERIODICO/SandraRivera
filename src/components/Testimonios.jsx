import React from 'react';

const testimonios = [
    {
        nombre: 'María G.',
        mensaje:
            'Sandra me ayudó a reconectar con mi propósito y a liderar desde el corazón. Su acompañamiento transformó mi vida.',
    },
    {
        nombre: 'Laura P.',
        mensaje:
            'Gracias a sus mentorías logré salir del miedo y tomar decisiones alineadas con mi esencia. ¡Infinitas gracias!',
    },
    {
        nombre: 'Camila R.',
        mensaje:
            'La Escuela de Liderazgo me dio claridad y herramientas para guiar mi vida y mi negocio desde el amor propio.',
    },
];

const Testimonios = () => {
    return (
        <section
            id="testimonios"
            className="bg-rose-50 py-16 px-6 md:px-12 text-center"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-10 font-display">
                Testimonios
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
                {testimonios.map((testimonio, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between"
                    >
                        <p className="italic text-gray-700 mb-4">“{testimonio.mensaje}”</p>
                        <p className="text-sm font-semibold text-pink-700">
                            — {testimonio.nombre}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonios;
