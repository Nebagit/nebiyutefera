
const Resume = () => {
  const experiences = [
    {
      title: "ERP Developer",
      company: "Addis Software",
      companyUrl: "https://addissoftware.com/",
      period: "Mar, 2025, - Present",
      description: "Develope and customize ERP solutions for various industries.",
      achievements: [
        "Develop and support ERP modules to improve business operations, focusing on finance, HR, procurement, and CRM.",
        "Optimize system functionality and troubleshoot technical issues to ensure smooth performance.",
        "Ensure seamless integration across modules and deliver efficient, scalable ERP solutions."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "GUBA Technology",
      companyUrl: "https://gubatech.com/",
      period: "Aug, 2024 - Mar, 2025",
      description: "Developed and maintaining web and mobile applications, contributing to both backend and frontend projects",
      achievements: [
        "Build secure and scalable backend services using Node.js, Express.js, MySQL, Postgres, and Firebase.",
        "Develop responsive web and mobile interfaces with React.js, HTML/CSS, JavaScript, and Flutter.",
        "Customize ERPNext modules using the Frappe framework and collaborate in Agile teams to deliver tailored solutions."
      ]
    },
    {
      title: "Full Stack Developer (Intern)",
      company: "Peragon Information Systems",
      companyUrl: "https://www.peragosystems.com/",
      period: "June 2023 - Feb 2024",
      description: "Participated in two projects, focusing on full-stack development and backend services.",
      achievements: [
        "Proficient in full-stack development using HTML, CSS, JavaScript, React.js, and Node.js.",
        "Skilled in backend technologies like Express.js, Redux, Microsoft SQL Server, and C++.",
        "Experienced in Agile methodologies and delivering responsive, scalable web applications."
      ]
    },
    {
      title: "Software Engineering Courses Instructor",
      company: "Koderlab Training Center",
      companyUrl: "https://koderlab.net/",
      period: "Oct 2023 - Jul 2024",
      description: "Leading frontend training sessions for multiple student batches, combining technical instruction with hands-on mentorship to prepare students for real-world development.",
      achievements: [
        "Train and mentor students in frontend technologies and programming fundamentals.",
        "Design and deliver industry-relevant curriculum covering both basic and advanced topics.",
        "Collaborate with staff to maintain an engaging and effective learning environment."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Addis Ababa University",
      companyUrl: "https://www.aau.edu.et/",
      period: "2021 - 2024",
      description: "Pursuing a Bachelor of Science in Computer Science at Addis Ababa University, gaining a strong foundation in software development, algorithms, and systems design.",
      focus: "Studying core computer science subjects—including data structures, databases, operating systems, and web development—while applying knowledge through hands-on projects and research."
    },
    {
      degree: "Full Stack Web Development",
      institution: "Evangadi Inc",
      companyUrl: "https://www.aau.edu.et/",
      period: "Feb 2023 - Feb 2024",
      description: "Full Stack Web Development Bootcamp – Evangadi Networks",
      focus: "Completed an intensive, project-based bootcamp covering HTML, CSS, JavaScript, React, Node.js, Express, and databases, with hands-on training and daily coding practice."
    }
  ];

  const extracurriculars = [
    {
      activity: "Student Representative for Computer Science Department",
      institution: "Addis Ababa University",
      companyUrl: "https://www.aau.edu.et/",
      period: "2022 - 2024",
      description: "As a Student Representative of the Computer Science department, I've perfected the art of communication with esteemed instructors, from Drs. to Professors and also all students, navigating the academic landscape with finesse and charm. 🎓💬",
      focus: "Amazingly 😁, I've also mastered the intricate dance of phone rings, messages, meetings, and all the jazz – a marathon of responsibilities, laughter, and the occasional dash across the library to silence a ringing phone (sorry, librarians!)."
    },
    {
      activity: "President of Volunteers Club",
      institution: "Addis Ababa University",
      companyUrl: "https://www.aau.edu.et/",
      period: "Feb 2023 - Jul 2024",
      description: "Awarded Effective Leadership of the Year for impactful student-led initiatives and community-centered coordination.",
      focus: "During my time at Addis Ababa University, I served as a resident leader of the Volunteers and Development Club, where I led numerous initiatives aimed at empowering students and enhancing campus life. My leadership was recognized with a Certificate of Effective Leadership of the Year, awarded for organizing impactful programs including bi-weekly campus-wide clean-up campaigns, student-led service rotations to provide campus workers with scheduled rest periods, and collaborative events with alumni through a dedicated communication panel. I also coordinated academic and social development activities that enabled students to actively contribute to their university environment and grow through shared community engagement."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
          Resume
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Experience Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></span>
            Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                  <span className="text-blue-400 font-semibold">{exp.period}</span>
                </div>
                <h5 className="text-lg text-purple-400 mb-3">{exp.company}</h5>
                <a href={exp.companyUrl} className="text-green-300 mb-4" target="_blank" rel="noopener noreferrer">
                  Link
                </a>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-400 flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-3"></span>
            Education
          </h3>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <span className="text-purple-400 font-semibold">{edu.period}</span>
                </div>
                <h5 className="text-lg text-blue-400 mb-3">{edu.institution}</h5>
                <a href={edu.companyUrl} className="text-green-300 mb-4" target="_blank" rel="noopener noreferrer">
                  Link
                </a>
                <p className="text-gray-300 mb-3">{edu.description}</p>
                <p className="text-gray-400 italic">{edu.focus}</p>
              </div>
            ))}
          </div>


          {/* Extracurricular Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-3"></span>
              Extra Curricular Activities
            </h3>

            <div className="space-y-8">
              {extracurriculars.map((extra, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{extra.activity}</h4>
                    <span className="text-purple-400 font-semibold">{extra.period}</span>
                  </div>
                  <h5 className="text-lg text-blue-400 mb-3">{extra.institution}</h5>
                  <a href={extra.companyUrl} className="text-green-300 mb-4" target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                  <p className="text-gray-300 mb-3">{extra.description}</p>
                  <p className="text-gray-400 italic">{extra.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* View On LinkedIn Button */}
          <div className="mt-8">
            <a
              href="https://www.linkedin.com/in/nebiyu-tefera-aau/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                View On LinkedIn
              </button>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Resume;