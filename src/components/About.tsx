import { useEffect, useState } from 'react';
import Nebiyu5 from "../assets/images/Nebiyu5.jpg"; // Adjust the path as necessary

const About = () => {
  const [currentTech, setCurrentTech] = useState(0);

  const techStack = [
    { name: 'WEB', color: 'from-blue-400 to-blue-600' },
    { name: 'Philosophy', color: 'from-blue-500 to-blue-700' },
    { name: 'Python', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Psychology', color: 'from-green-400 to-green-600' },
    { name: 'TensorFlow', color: 'from-orange-400 to-orange-600' },
    { name: 'AI & ML', color: 'from-orange-500 to-yellow-500' },
    { name: 'Leadership', color: 'from-blue-400 to-cyan-500' },
    { name: 'ERP', color: 'from-pink-400 to-pink-600' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [techStack.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
          From the Whole Me: A Quick Peek
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Photo and Tech Stack */}
        <div className="relative">
          <div className="relative group">
            {/* Profile Photo */}
            <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
              <img
                src={Nebiyu5}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Rotating Tech Stack */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {techStack.map((tech, index) => {
                const angle = (index * 360) / techStack.length;
                const isActive = index === currentTech;

                return (
                  <div
                    key={tech.name}
                    className={`absolute w-16 h-16 rounded-lg flex items-center justify-center text-white font-semibold text-sm transition-all duration-500 transform ${isActive ? 'scale-125 animate-pulse' : 'scale-100'
                      } bg-gradient-to-r ${tech.color} shadow-lg`}
                    style={{
                      transform: `rotate(${angle}deg) translateY(-180px) rotate(-${angle}deg) ${isActive ? 'scale(1.25)' : 'scale(1)'}`,
                      transition: 'all 0.5s ease-in-out'
                    }}
                  >
                    {tech.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side - Description */}
        <div className="space-y-6">
          <div className="w-full bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">My Former Creed: AI as Digital Heresy now as a Confession of a Sacred Exodus - From Heresy to Code, Psalms to Syntax, unfolded through the corridors of my computer science college.</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              My journey through life, be it through philosophy, psychology, and theology, helped me understand and appreciate the notion that technology is not an end in itself, but rather a method of shaping meaning. Raised in a book-loving family, my curiosity led me not to academia, but to a deeper search for meaning. That search eventually brought me to computer science at Addis Ababa University, where I transformed from a tech resister to what I now call an "AlComputist", a thinker who views AI as both logic and language. This transition wasn’t just academic; it was personal, almost spiritual—a sacred exodus from ignorance to insight.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Now a full-stack developer and AI specialist with experience across three Ethiopian tech firms, I merge technical knowledge with philosophical inquiry. My work extends beyond building functional systems to creating meaningful digital experiences, technology rooted in purpose, ethics, and human growth. With a background in software development, ERP implementation, and machine learning, my goal is to engineer systems that don’t just perform but elevate—bridging code with conscience, syntax with soul.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <h4 className="text-3xl font-bold text-white mb-2">2+</h4>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <h4 className="text-3xl font-bold text-white mb-2">5+</h4>
              <p className="text-gray-300">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
