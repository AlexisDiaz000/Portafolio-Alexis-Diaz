import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Mi pagina web que muestra mis logos personales que utilizo en mi redes y fueron creados con inteligencia artificial.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/AlexisDiaz000/Mis-logos.git',
      demo: 'https://alexisdiaz000.github.io/Mis-logos/'
    },
    {
      title: 'Proyecto 2',
      description: 'Una página que consulta la API de OpenWeather y muestra el clima actual en las diferentes cuidades del mundos',
      image: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&q=80',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      github: 'https://github.com/AlexisDiaz000/Aplicacion-del-clima.git',
      demo: 'https://climaapalexisdiaz.netlify.app/'
    },
    {
      title: 'Proyecto 3',
      description: 'Gestor de tareas proyecto sobre la implementacion del patron de arquitectura MVC en un app web sencilla.',
      image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80',
      technologies: ['HTML','CSS','JavaScript','Firebase'],
      github: 'https://github.com/AlexisDiaz000/Gestor-de-tareas.git',
      demo: 'https://alexisdiaz000.github.io/Gestor-de-tareas/'
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Mis Proyectos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Código
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;