import React from 'react';

const Contacto = () => {
  return (
    <section
      id="contacto"
      className="bg-white py-16 px-6 md:px-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-6 font-display">
        Contáctame
      </h2>
      <p className="text-gray-700 mb-10 max-w-xl mx-auto">
        ¿Tienes preguntas, deseas agendar una sesión o simplemente conectar?
        Completa el formulario y me pondré en contacto contigo pronto.
      </p>

      <form
        action="https://formspree.io/f/XXXXXXX" // ← reemplaza con tu ID de Formspree
        method="POST"
        className="max-w-xl mx-auto text-left space-y-6"
      >
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Nombre completo
          </label>
          <input
            type="text"
            name="nombre"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Correo electrónico
          </label>
          <input
            type="email"
            name="correo"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Mensaje
          </label>
          <textarea
            name="mensaje"
            rows="5"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-pink-700 hover:bg-pink-800 text-white px-6 py-3 rounded-full transition-colors duration-300 font-semibold text-sm"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
};

export default Contacto;
