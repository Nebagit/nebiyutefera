import React, { useState } from 'react';
import PopupCard from '../assets/ui/PopupMessage';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [popup, setPopup] = useState<{ type: 'success' | 'error'; message: string } | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_52j8stm',
        'template_48c9mbf',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Nebiyu',
        },
        '1iTcEddhziGdw4KNs'
      );

      setFormData({ name: '', email: '', subject: '', message: '' });

      setPopup({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.'
      });

    } catch (error) {
      console.error(error);
      setPopup({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    }
    finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: "Email",
      value: "neba.t.git@gmail.com",
      icon: "📧",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Phone",
      value: "+251923536007",
      icon: "📱",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Location",
      value: "Addis Ababa, 4Kilo, Ethiopia",
      icon: "📍",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/nebiyu-tefera-aau/",
      icon: "💼",
      gradient: "from-blue-600 to-indigo-600"
    }
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Nebagit", icon: "💻" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/nebiyu-tefera-aau/", icon: "💼" },
    { name: "Substack", url: "https://nebiyutefera.substack.com", icon: "📝" },
    { name: "LeetCode", url: "https://leetcode.com/u/Nebiyu-T/", icon: "💻" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
          Contact Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Ready to collaborate on your next project or discuss AI research opportunities? Let's connect!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-green focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              >
                <option value="">Select a subject</option>
                <option value="collaboration">Project Collaboration</option>
                <option value="research">AI Research Opportunity</option>
                <option value="consultation">Technical Consultation</option>
                <option value="hiring">Job Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isSubmitting
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg'
                } text-white`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-lg flex items-center justify-center text-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-center group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {social.name}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Availability Status */}
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 backdrop-blur-lg rounded-xl p-6 border border-green-500/20">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse mr-3"></div>
              <div>
                <h4 className="text-white font-semibold">Available for Projects</h4>
                <p className="text-gray-300 text-sm">Open to new opportunities and collaborations</p>
              </div>
            </div>
          </div>
        </div>
        {popup && (
          <PopupCard
            type={popup.type}
            message={popup.message}
            onClose={() => setPopup(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Contact;