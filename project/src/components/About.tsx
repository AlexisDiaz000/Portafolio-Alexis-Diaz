import React from 'react';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Mí</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
             Soy un estudiante de Ingeniería de Software apasionado por el diseño y desarrollo de proyectos de software a medida.
              
            </p>
            <p className="text-lg text-gray-600">
             Diseño y desarrollo de páginas y aplicaciones web, implementando tecnologías modernas y mejores prácticas para crear soluciones funcionales, eficientes y escalables. 
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;