import { Heart, ArrowUp, Code, Coffee, Zap } from 'lucide-react';
import Newsletter from '../assets/ui/Newsletter';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    const quickLinks = [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" }
    ];

    const services = [
        { label: "Web Development", href: "#" },
        { label: "Mobile Apps", href: "#" },
        { label: "UI/UX Design", href: "#" },
        { label: "Consulting", href: "#" },
        { label: "Code Review", href: "#" }
    ];

    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center">
                                    <Code className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Alex Chen</h3>
                                    <p className="text-blue-300">Creative Developer</p>
                                </div>
                            </div>

                            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
                                Crafting digital experiences that inspire and engage. Every line of code tells a story,
                                and every project is an opportunity to make the web a more beautiful place.
                            </p>

                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2 text-blue-300">
                                    <Coffee className="w-4 h-4" />
                                    <span className="text-sm">Fueled by coffee</span>
                                </div>
                                <div className="flex items-center space-x-2 text-green-300">
                                    <Zap className="w-4 h-4" />
                                    <span className="text-sm">Powered by passion</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-blue-300">Navigation</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative group"
                                        >
                                            {link.label}
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-blue-300">Services</h4>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <a
                                            href={service.href}
                                            className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative group"
                                        >
                                            {service.label}
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <Newsletter />

                    {/* Bottom Section */}
                    <div className="border-t border-slate-900 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="flex items-center space-x-2 text-slate-400 mb-4 md:mb-0">
                                <span>Made with</span>
                                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                                <span>and a deep</span>
                                <Zap className="w-4 h-4 text-amber-400" />
                                <span>© 2025 Nebiyu Tefera. All rights reserved.</span>
                            </div>

                            <button
                                onClick={scrollToTop}
                                className="group flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all duration-300 hover:scale-105"
                                aria-label="Scroll to top"
                            >
                                <span className="text-sm">Back to top</span>
                                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action Elements */}
            <div className="absolute bottom-8 right-8">
                <div className="flex flex-col space-y-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;