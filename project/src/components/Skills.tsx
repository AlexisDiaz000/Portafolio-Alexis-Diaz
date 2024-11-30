import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['HTML5', 'CSS3', 'JavaScript', 'React', ]
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'Herramientas',
      items: ['Git', 'Docker', 'AWS', 'Firebase', 'Figma', 'VS Code']
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Habilidades</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">
                {skillGroup.category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skillGroup.items.map((skill, i) => (
                  <div
                    key={i}
                    className="bg-white px-4 py-2 rounded-lg shadow-sm text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;