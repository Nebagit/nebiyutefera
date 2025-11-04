import AboutMeImage from '../assets/images/Aboutmepageimage.jpg';
import './About.css'; // ⬅️ Create this CSS file (code below)

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-20 bg-background">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left - Text Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                My Former Creed:{' '}
                <span className="text-blue-400">
                  AI as Digital Heresy
                </span>{' '}
                now as a Confession of a Sacred Exodus
              </h2>

              <p className="text-white leading-relaxed mb-4 text-justify">
                My journey through life, be it through philosophy, psychology,
                and theology, helped me understand and appreciate the notion
                that technology is not an end in itself, but rather a method of
                shaping meaning. Raised in a book-loving family, my curiosity
                led me not to academia, but to a deeper search for meaning. That
                search eventually brought me to computer science at Addis Ababa
                University, where I transformed from a tech resister to what I
                now call an{' '}
                <span className="text-blue-400 font-semibold">"AlComputist"</span>,
                a thinker who views AI as both logic and language.
              </p>

              <p className="text-white leading-relaxed text-justify">
                Now a full-stack developer and AI specialist with experience
                across three Ethiopian tech firms, I merge technical knowledge
                with philosophical inquiry. My work extends beyond building
                functional systems to creating meaningful digital
                experiences—technology rooted in purpose, ethics, and human
                growth. My goal is to engineer systems that don't just perform
                but elevate—bridging code with conscience, syntax with soul.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-blue-400/20 hover:scale-105 transition-transform duration-300">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  2+
                </h3>
                <p className="text-white text-sm md:text-base">
                  Years Experience
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-blue-400/20 hover:scale-105 transition-transform duration-300">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  5+
                </h3>
                <p className="text-white text-sm md:text-base">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>

          {/* Right - Animated Image */}
          <div className="flex items-center justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4] group">
              {/* Animated Luminous Line (background animation) */}
              <div className="absolute -inset-[3px] rounded-2xl overflow-hidden z-0 animated-luminous"></div>

              {/* Image */}
              <div className="relative h-full rounded-2xl overflow-hidden border-2 border-blue-400/20 shadow-xl shadow-blue-400/20 z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>

                <img
                  src={AboutMeImage}
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-blue-400/10 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
