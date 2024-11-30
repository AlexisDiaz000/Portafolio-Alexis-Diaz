import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-gray-900">Inicio</a>
            <a href="#sobre-mi" className="text-gray-700 hover:text-gray-900">Sobre Mí</a>
            <a href="#proyectos" className="text-gray-700 hover:text-gray-900">Proyectos</a>
            <a href="#habilidades" className="text-gray-700 hover:text-gray-900">Habilidades</a>
            <a href="#contacto" className="text-gray-700 hover:text-gray-900">Contacto</a>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/AlexisDiaz000" className="text-gray-700 hover:text-gray-900">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/alexis-diaz-5518a6255" className="text-gray-700 hover:text-gray-900">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:axel.608@hotmail.com" className="text-gray-700 hover:text-gray-900">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Inicio</a>
            <a href="#sobre-mi" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Sobre Mí</a>
            <a href="#proyectos" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Proyectos</a>
            <a href="#habilidades" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Habilidades</a>
            <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contacto</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;