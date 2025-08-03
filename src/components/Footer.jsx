import React from 'react';
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-pink-700 text-white py-10 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Enlaces rápidos */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Navegación</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#inicio" className="hover:underline">Inicio</a></li>
                        <li><a href="#sobre-mi" className="hover:underline">Sobre mí</a></li>
                        <li><a href="#escuela" className="hover:underline">Escuela de Liderazgo</a></li>
                        <li><a href="#mentorias" className="hover:underline">Mentorías</a></li>
                        <li><a href="#testimonios" className="hover:underline">Testimonios</a></li>
                        <li><a href="#contacto" className="hover:underline">Contacto</a></li>
                    </ul>
                </div>

                {/* Información de contacto */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Contáctame</h2>
                    <p className="text-sm">Email: contacto@sandracrivera.com</p>
                    <p className="text-sm mt-2">Teléfono: +57 300 000 0000</p>
                </div>

                {/* Redes sociales */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Sígueme</h2>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-200"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-200"
                        >
                            <FaFacebookF size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-200"
                        >
                            <FaLinkedinIn size={20} />
                        </a>
                        <a
                            href="mailto:contacto@sandracrivera.com"
                            className="hover:text-gray-200"
                        >
                            <FaEnvelope size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Derechos reservados */}
            <div className="mt-8 border-t border-white/30 pt-4 text-center text-sm">
                © {new Date().getFullYear()} Sandra C. Rivera · Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
