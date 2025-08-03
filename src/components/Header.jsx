import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Inicio', link: '#inicio' },
        { name: 'Sobre mí', link: '#sobre-mi' },
        { name: 'Mi Escuela de Liderazgo', link: '#escuela' },
        { name: 'Mentorías', link: '#mentorias' },
        { name: 'Testimonios', link: '#testimonios' },
    ];

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo o nombre */}
                <a href="#inicio" className="text-2xl font-bold text-pink-700 tracking-wide">
                    Sandra C. Rivera
                </a>

                {/* Botón hamburguesa móvil */}
                <button
                    className="md:hidden text-pink-700"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Menú en pantallas medianas y grandes */}
                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            className="hover:text-pink-600 transition-colors duration-200"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Menú móvil */}
            {isOpen && (
                <nav className="md:hidden bg-white px-4 pb-4 pt-2 space-y-2 shadow">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            className="block text-gray-700 font-medium hover:text-pink-600"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;
