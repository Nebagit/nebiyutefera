import { useState } from 'react';
import Netflix from '../assets/images/Netflix.png';
import Amazon from '../assets/images/amazon.jpg';
import Evangadi from '../assets/images/Evangadi-forum.png';
import Employee from '../assets/images/Employee.png';
import Expense from '../assets/images/Expense-tracker.png';
import Landing from '../assets/images/nextjs.png';


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Netflix Web Applicstion Cloning",
      description: "Full-stack Netflix clone with responsive design and video streaming",
      image: Netflix,
      technologies: ["React", "Node", "Firebase", "Express"],
      category: "fullstack",
      demoUrl: "https://nebagit.github.io/Netflix-clone-neba/",
      codeUrl: "https://github.com/Nebagit/Netflix-clone-neba"
    },
    {
      title: "Amazon Clone",
      description: "E-commerce platform clone with user authentication and product management",
      image: Amazon,
      technologies: ["React.js", "Node.js", "Firebase", "Stripe"],
      category: "fullstack",
      demoUrl: "https://nebagit.github.io/amazonclon/",
      codeUrl: "https://github.com/Nebagit/amazonclon"
    },
    {
      title: "Evangadi Online Learning Platform",
      description: "Online learning platform with course management and user profiles",
      image: Evangadi,
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      category: "fullstack",
      demoUrl: "https://nebagit.github.io/login",
      codeUrl: "https://github.com/Nebagit/login"
    },
    {
      title: "Employee Management System",
      description: "Web application for managing employee records and performance tracking",
      image: Employee,
      technologies: ["React", "Node.js"],
      category: "fullstack",
      demoUrl: "https://nebagit.github.io/Employee-mgt-syst/",
      codeUrl: "https://github.com/Nebagit/Employee-mgt-syst"
    },
    {
      title: "Student Expense Tracker",
      description: "Expense tracking application for students with budget management features",
      image: Expense,
      technologies: ["Vue.js", "Next.js", "MySQL", "Tailwind CSS"],
      category: "fullstack",
      demoUrl: "https://www.youtube.com/watch?v=wD-E0Rqlr5k&feature=youtu.be",
      codeUrl: "https://www.youtube.com/watch?v=wD-E0Rqlr5k&feature=youtu.be"
    },
    {
      title: "Next JS Landing Page",
      description: "Landing page built with Next.js and Tailwind CSS for fast performance",
      image: Landing,
      technologies: ["Next", "Tailwind", "Typescript"],
      category: "web",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'web', label: 'Web Front' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
          Portfolio
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Showcasing innovative projects that demonstrate expertise in modern technologies and problem-solving capabilities.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${activeFilter === filter.id
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
              : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/10'
              }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Project Links Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-600 transition-all duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 text-sm rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Profile Link */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-4">Explore More Projects</h3>
          <p className="text-gray-300 mb-8">
            Check out my GitHub profile for additional projects and open-source contributions.
          </p>
          <a
            href="https://github.com/Nebagit/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
