import { 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  Building2, 
  ExternalLink, 
  AlignLeft, 
  Dot 
} from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      title: "ERP Developer",
      company: "Addis Software",
      companyUrl: "https://addissoftware.com/",
      period: "Mar, 2025 - Present",
      description: "Develop and customize ERP solutions for various industries.",
      achievements: [
        "Develop and support ERP modules to improve business operations, focusing on finance, HR, procurement, and CRM.",
        "Optimize system functionality and troubleshoot technical issues to ensure smooth performance.",
        "Ensure seamless integration across modules and deliver efficient, scalable ERP solutions."
      ]
    },
    {
      title: "Project Manager and Translator",
      company: "Gemstone App",
      companyUrl: "https://gemstonesapp.com/",
      period: "Mar, 2025 - Present",
      description: "Managing and overseeing the development of an African languages learning application.",
      achievements: [
        "Translated and proofread the Amharic language content during the application development.",
        "Contributed to the successful implementation of the project, which was recognized among the top 3 winning projects in a U.S. competition.",
        "Led a team of 13 members from Europe and Africa who worked as translators and proofreaders for the development of an African languages learning app."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "GUBA Technology",
      companyUrl: "https://gubatech.com/",
      period: "Aug, 2024 - Mar, 2025",
      description: "Developing and maintaining web and mobile applications, contributing to both backend and frontend projects.",
      achievements: [
        "Built secure and scalable backend services using Node.js, Express.js, MySQL, Postgres, and Firebase.",
        "Developed responsive web and mobile interfaces with React.js, HTML/CSS, JavaScript, and Flutter.",
        "Customized ERPNext modules using the Frappe framework and collaborated in Agile teams to deliver tailored solutions."
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
      description: "Leading frontend training sessions for multiple student batches, combining technical instruction with hands-on mentorship.",
      achievements: [
        "Trained and mentored students in frontend technologies and programming fundamentals.",
        "Designed and delivered industry-relevant curriculum covering both basic and advanced topics.",
        "Collaborated with staff to maintain an engaging and effective learning environment."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Addis Ababa University",
      companyUrl: "https://www.aau.edu.et/",
      period: "2020 - 2024",
      description: "Studied core computer science subjects including data structures, databases, and web development.",
      focus: "Applied theoretical knowledge through projects and research at Addis Ababa University."
    },
    {
      degree: "ERP Specialist Training and Project Management",
      institution: "HansaWorld University",
      companyUrl: "https://www.hansaworld.com/en/university",
      period: "Mar 2025 - Oct 2025",
      description: "Comprehensive training in ERP systems and project management methodologies.",
      focus: "Focused on practical business process optimization and ERP implementation."
    },
    {
      degree: "Full Stack Web Development",
      institution: "Evangadi Inc",
      companyUrl: "https://www.aau.edu.et/",
      period: "Feb 2023 - Feb 2024",
      description: "Intensive bootcamp in full stack web development using React and Node.js.",
      focus: "Hands-on coding and project-based learning for real-world application."
    }
  ];

  const extracurriculars = [
    {
      activity: "Student Representative for Computer Science Department",
      institution: "Addis Ababa University",
      companyUrl: "https://www.aau.edu.et/",
      period: "2022 - 2024",
      description: "Served as the official liaison between students and faculty members.",
      focus: "Organized academic and social events to strengthen student engagement."
    },
    {
      activity: "Huawei ICT Academy Ambassador at AAU",
      institution: "Huawei ICT Academy and Addis Ababa University",
      companyUrl: "https://e.huawei.com/en/talent/ict-academy/#/home",
      period: "Apr 2023 - Jul 2024",
      description: "Represented Huawei ICT Academy and promoted digital education initiatives.",
      focus: "Facilitated academy activities and assisted in skill development programs."
    },
    {
      activity: "President of Volunteers Club",
      institution: "Addis Ababa University",
      companyUrl: "https://www.aau.edu.et/",
      period: "Feb 2023 - Jul 2024",
      description: "Led impactful community initiatives and student volunteer programs.",
      focus: "During my time at Addis Ababa University, I served as a resident leader of the Volunteers and Development Club, where I led numerous initiatives aimed at empowering students and enhancing campus life. My leadership was recognized with a Certificate of Effective Leadership of the Year, awarded for organizing impactful programs including bi-weekly campus-wide clean-up campaigns, student-led service rotations to provide campus workers with scheduled rest periods, and collaborative events with alumni through a dedicated communication panel. I also coordinated academic and social development activities that enabled students to actively contribute to their university environment and grow through shared community engagement"
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
            <Briefcase className="w-8 h-8 text-blue-500 mr-3" />
            Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h4 className="text-xl font-bold text-white flex items-center">
                    <Briefcase className="w-5 h-5 text-blue-400 mr-2" />
                    {exp.title}
                  </h4>
                  <span className="text-blue-400 font-semibold">{exp.period}</span>
                </div>
                <h5 className="text-lg text-purple-400 mb-3 flex items-center">
                  <Building2 className="w-5 h-5 text-purple-400 mr-2" />
                  {exp.company}
                </h5>
                <a href={exp.companyUrl} className="text-green-300 mb-4 flex items-center" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" /> Link
                </a>
                <p className="text-gray-300 mb-4 flex items-start">
                  <AlignLeft className="w-4 h-4 text-blue-300 mr-2 mt-1" />
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-400 flex items-start">
                      <Dot className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Extracurriculars */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <GraduationCap className="w-8 h-8 text-purple-500 mr-3" />
            Education
          </h3>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h4 className="text-xl font-bold text-white flex items-center">
                    <GraduationCap className="w-5 h-5 text-purple-400 mr-2" />
                    {edu.degree}
                  </h4>
                  <span className="text-purple-400 font-semibold">{edu.period}</span>
                </div>
                <h5 className="text-lg text-blue-400 mb-3 flex items-center">
                  <Building2 className="w-5 h-5 text-blue-400 mr-2" />
                  {edu.institution}
                </h5>
                <a href={edu.companyUrl} className="text-green-300 mb-4 flex items-center" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" /> Link
                </a>
                <p className="text-gray-300 mb-3 flex items-start">
                  <AlignLeft className="w-4 h-4 text-purple-300 mr-2 mt-1" />
                  {edu.description}
                </p>
                <p className="text-gray-400 italic">{edu.focus}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Sparkles className="w-8 h-8 text-pink-500 mr-3" />
              Extra Curricular Activities
            </h3>

            <div className="space-y-8">
              {extracurriculars.map((extra, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h4 className="text-xl font-bold text-white flex items-center">
                      <Sparkles className="w-5 h-5 text-pink-400 mr-2" />
                      {extra.activity}
                    </h4>
                    <span className="text-purple-400 font-semibold">{extra.period}</span>
                  </div>
                  <h5 className="text-lg text-blue-400 mb-3 flex items-center">
                    <Building2 className="w-5 h-5 text-blue-400 mr-2" />
                    {extra.institution}
                  </h5>
                  <a href={extra.companyUrl} className="text-green-300 mb-4 flex items-center" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" /> Link
                  </a>
                  <p className="text-gray-300 mb-3 flex items-start">
                    <AlignLeft className="w-4 h-4 text-pink-300 mr-2 mt-1" />
                    {extra.description}
                  </p>
                  <p className="text-gray-400 italic">{extra.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <a href="https://www.linkedin.com/in/nebiyu-tefera-aau/" target="_blank" rel="noopener noreferrer">
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
