import { useState, useEffect } from 'react';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript/TypeScript", level: 95, color: "from-yellow-400 to-yellow-600" },
        { name: "Python", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "Java", level: 85, color: "from-red-400 to-red-600" },
        { name: "C++", level: 80, color: "from-purple-400 to-purple-600" },
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React/Next.js", level: 95, color: "from-cyan-400 to-cyan-600" },
        { name: "Vue.js/Nuxt.js", level: 90, color: "from-green-400 to-green-600" },
        { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-teal-600" },
        { name: "HTML/CSS", level: 98, color: "from-orange-400 to-orange-600" },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 90, color: "from-green-500 to-green-700" },
        { name: "PostgreSQL", level: 85, color: "from-blue-500 to-blue-700" },
        { name: "MongoDB", level: 88, color: "from-green-600 to-green-800" },
        { name: "GraphQL", level: 82, color: "from-pink-400 to-pink-600" },
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", level: 85, color: "from-orange-500 to-orange-700" },
        { name: "PyTorch", level: 80, color: "from-red-500 to-red-700" },
        { name: "Scikit-learn", level: 88, color: "from-blue-500 to-indigo-600" },
        { name: "Deep Learning", level: 82, color: "from-purple-500 to-purple-700" },
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const allSkillsIndexes = skillCategories.flatMap((category, categoryIndex) =>
        category.skills.map((_, skillIndex) => categoryIndex * 10 + skillIndex)
      );

      allSkillsIndexes.forEach((index, i) => {
        setTimeout(() => {
          setVisibleSkills(prev => [...prev, index]);
        }, i * 100);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className={`w-6 h-6 bg-gradient-to-r ${category.skills[0].color} rounded-full mr-3`}></span>
              {category.title}
            </h3>

            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => {
                const skillId = categoryIndex * 10 + skillIndex;
                const isVisible = visibleSkills.includes(skillId);

                return (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm font-semibold">
                        {isVisible ? `${skill.level}%` : '0%'}
                      </span>
                    </div>

                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          boxShadow: isVisible ? `0 0 20px rgba(59, 130, 246, 0.5)` : 'none'
                        }}
                      >
                        <div className="h-full bg-white/20 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Skills Cloud */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Additional Technologies</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'AI', 'ML', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Git', 'CI/CD', 'Microservices',
            'REST API', 'WebSocket', 'Redis', 'Elasticsearch', 'Jenkins', 'Linux', 'GraphQL', 'Firebase', 'Postman', 'Figma', 'Agile/Scrum', 'DevOps', 'Blockchain', 'IoT', 'AR/VR', 'Cybersecurity', 'SEO', 'WebAssembly', 'Progressive Web Apps (PWA)', 'Serverless Architecture'
          ].map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-full text-white border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;