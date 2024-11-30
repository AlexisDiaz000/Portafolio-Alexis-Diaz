import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          ¡Hola! Soy{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Alexis Diaz
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12">
          Software Engineer, Desarrollador Full Stack & Diseñador UI/UX
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="#proyectos"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contactar
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;