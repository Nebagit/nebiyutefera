import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Recommendations from './components/Recommendations';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BlogFeed from "./components/BlogFeed";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'skills', 'services', 'portfolio', 'blogs', 'recommendations', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      <Navigation activeSection={activeSection} />

      <main className="overflow-hidden">
        <section id="home" className="min-h-screen">
          <Hero />
        </section>

        <section id="about" className="min-h-screen py-20">
          <About />
        </section>

        <section id="resume" className="min-h-screen py-20">
          <Resume />
        </section>

        <section id="skills" className="min-h-screen py-20">
          <Skills />
        </section>

        <section id="services" className="min-h-screen py-20">
          <Services />
        </section>

        <section id="portfolio" className="min-h-screen py-20">
          <Portfolio />
        </section>

        <section id="blogs" className="min-h-screen py-20">
          <BlogFeed
            substackUrl="https://nebiyutefera.substack.com/feed"
            maxPosts={8}
          />
        </section>

        <section id="recommendations" className="min-h-screen py-20">
          <Recommendations />
        </section>

        <section id="contact" className="min-h-screen py-20">
          <Contact />
        </section>
        <Footer />
      </main>

    </div>
  );
};

export default Index;
