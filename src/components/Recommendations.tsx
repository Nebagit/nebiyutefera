import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Tilye from '../assets/images/ProfTileye4.jpg';
import Ashenafi from '../assets/images/MrAshenafi1.jpg';
import Beimnet from '../assets/images/MrsBeimnet.jpeg';
import Adugna from '../assets/images/Adugna.png';
import Hermela from '../assets/images/Hermella.jpg';




const Recommendations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const recommendations = [
    {
      name: "Prof. Tileye Feyissa (Former Dean, CNCS)",
      position: "Dean of College of Natural and Computational Sciences",
      company: "Addis Ababa University",
      image: Tilye,
      recommendation: "As the Dean of the College of Natural and Computational Sciences (CNCS) at Addis Ababa University, I have observed Nebiyu's academic journey with admiration. Nebiyu's execellent grades reflect his dedication to his studies and his commitment to excellence. Additionally, his role as a Student Representative for the Computer Science department showcases his leadership and communication skills. Nebiyu's contributions to both academia and student representation are commendable.",
      email: "tileye.feyissa@aau.edu.et",
      phone: "+251911949025"
    },
    {
      name: "Mr. Ashenafi Kassahun (Head of Computer Science, AAU)",
      position: "Department Head of Computer Science, AAU",
      company: "Addis Ababa University",
      image: Ashenafi,
      recommendation: "As the Department Head of Computer Science at Addis Ababa University, I've had the pleasure of teaching Nebiyu in two courses: Artificial Intelligence and Mobile Application Development. He has consistently shown his dedication to learning in both subjects. His active participation in class discussions is also good. Beyond his academic performance, Nebiyu's role as the Student Representative showcases his communication skills and leadership qualities. He effectively communicates the needs and concerns of his peers, fostering a collaborative and supportive community with in the class.",
      email: "ashenafi.kassahun@aau.edu.et",
      phone: "+251911618627"
    },
    {
      name: "Mrs. Beimnet Girma",
      position: "Lecturer and Advisor",
      company: "Addis Ababa University",
      image: Beimnet,
      recommendation: "I've had the privilege of guiding Nebiyu through two fundamental courses: Algorithm (C++) and Event Driven Programming (.Net). Throughout our journey together, I've witnessed Nebiyu's dedication and intellect, evident in his approach to problem-solving and software development. As Nebiyu's advisor for the Final Year Project, I've seen him blend theoretical knowledge with practical application, demonstrating aptitude and a good grasp of concepts. Nebiyu's commitment and passion for learning make him a remarkable student, poised for success in his future endeavors. - Mrs. Beimnet Girma",
      email: "beimnet.girma@aau.edu.et",
      phone: "none"
    },
    {
      name: "Mr. Adugna Bekele",
      position: "Evangadi INC Founder and CEO",
      company: "Evangadi Networks",
      image: Adugna,
      recommendation: "Nebiyu's journey through our Full Stack Web Development program at Evangadi Networks has been marked by dedication and commitments. With classes held four days per week over a six-month period, he consistently displayed a better work ethics and an ability to grasp complex concepts.His collaborative nature and his adeptness at embracing new challenges make him well-equipped to excel in diverse work environments and adapt to emerging technologies. As the owner of Evangadi Networks, I have observed Nebiyu's eagerness to learn and adapt firsthand. Given his openness and quick learning ability, I believe providing Nebiyu with opportunities to collaborate and learn from your experienced developers would not only enrich his skill set but also contribute to the success of your next projects.",
      email: "support@evangadi.com",
      phone: "(202) 386 2702"
    },
    {
      name: "Mrs. Hermela Fikre",
      position: "KoderLab's Founder and CEO",
      company: "KoderLab Training Center",
      image: Hermela,
      recommendation: "Nebiyu Tefera, who served as a Frontend Development trainer at KODERSLAB Training Center. He effectively trained two batches in Frontend Development and Programming, showcasing his proficiency across multiple programming languages. His contributions greatly enriched our training programs and positively impacted our students' learning experiences.",
      email: "fikre.eleni@gmail.com",
      phone: "+251922383939"
    },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % recommendations.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [recommendations.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % recommendations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
          Recommendations
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Testimonials from industry leaders and academic professionals who have worked with me.
        </p>
      </div>

      <div className="relative">
        {/* Main Carousel */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 mx-4">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Recommender Info */}
                    <div className="text-center md:text-left">
                      <div className="relative mb-6">
                        <img
                          src={rec.image}
                          alt={rec.name}
                          className="w-32 h-32 rounded-full mx-auto md:mx-0 object-cover border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full animate-pulse"></div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2">{rec.name}</h3>
                      <p className="text-lg text-blue-400 mb-1">{rec.position}</p>
                      <p className="text-purple-400 font-semibold mb-4">{rec.company}</p>

                      {/* Contact Info */}
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-400">
                          <span className="font-semibold">Email:</span> {rec.email}
                        </p>
                        <p className="text-gray-400">
                          <span className="font-semibold">Phone:</span> {rec.phone}
                        </p>
                      </div>
                    </div>

                    {/* Recommendation Text */}
                    <div className="md:col-span-2">
                      <div className="relative">
                        <div className="text-6xl text-blue-500/30 font-serif absolute -top-4 -left-2">"</div>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic pl-8">
                          {rec.recommendation}
                        </p>
                        <div className="text-6xl text-blue-500/30 font-serif absolute -bottom-8 right-0">"</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {recommendations.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-125'
                : 'bg-white/30 hover:bg-white/50'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Additional Testimonials Preview */}
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {recommendations.slice(0, 3).map((rec, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            onClick={() => goToSlide(index)}
          >
            <div className="flex items-center mb-4">
              <img
                src={rec.image}
                alt={rec.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-white font-semibold">{rec.name}</h4>
                <p className="text-gray-400 text-sm">{rec.company}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm line-clamp-3">
              {rec.recommendation.substring(0, 100)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;