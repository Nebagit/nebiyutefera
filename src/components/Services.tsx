
const Services = () => {
  const services = [
    {
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern frameworks and technologies.",
      features: [
        "React/Vue.js Frontend Development",
        "Node.js/Python Backend Services",
        "Database Design & Optimization",
        "API Development & Integration"
      ],
      icon: "💻",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge AI solutions for business automation and intelligent decision making.",
      features: [
        "Machine Learning Model Development",
        "Natural Language Processing",
        "Computer Vision Applications",
        "AI Research & Consulting"
      ],
      icon: "🤖",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Cloud Architecture",
      description: "Scalable cloud solutions designed for performance, security, and cost efficiency.",
      features: [
        "AWS/Azure Cloud Migration",
        "Microservices Architecture",
        "DevOps & CI/CD Implementation",
        "Container Orchestration"
      ],
      icon: "☁️",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Technical Consulting",
      description: "Strategic technology guidance to help businesses make informed decisions.",
      features: [
        "Technology Stack Selection",
        "Code Review & Optimization",
        "Team Training & Mentoring",
        "Project Planning & Management"
      ],
      icon: "🎯",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Research & Development",
      description: "Innovative research in AI and computer science for academic and commercial applications.",
      features: [
        "Academic Paper Writing",
        "Prototype Development",
        "Algorithm Design & Analysis",
        "Open Source Contributions"
      ],
      icon: "🔬",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications with native performance and user experience.",
      features: [
        "React Native Development",
        "Progressive Web Apps",
        "Mobile UI/UX Design",
        "App Store Optimization"
      ],
      icon: "📱",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
          Services
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          I am Leading expert-driven teams to deliver comprehensive software and tech solutions; turning your ideas and projects into powerful and tailored innovations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            {/* Service Icon */}
            <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
              {service.icon}
            </div>

            {/* Service Title */}
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-600 transition-all duration-300">
              {service.title}
            </h3>

            {/* Service Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* Service Features */}
            <ul className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="text-gray-400 flex items-start group-hover:text-gray-300 transition-colors duration-300"
                >
                  <span className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Hover Effect Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;