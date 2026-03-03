import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
const HeroSection = () => {
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1554078140-01f553ad4d40" alt="Professional workspace background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-[#1E3A8A]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Profile Picture */}
          <div className="flex justify-center mb-8 animate-in fade-in zoom-in duration-700">
            <img src="https://horizons-cdn.hostinger.com/3ab4aec4-2c7c-4c28-b507-29c6155aa379/fd7c60cef6495d7d6b2fbb0c0c2211e7.png" alt="Zakaria Fadl" className="w-40 h-40 md:w-48 md:h-48 rounded-full aspect-square object-cover border-4 border-blue-200 shadow-lg hover:scale-105 transition-transform duration-300" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Bridging Analytical Physics with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#1E3A8A]">
              Data-Driven Digital Growth
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">Zakaria Fadl - Senior E-Commerce Specialist</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button onClick={() => scrollToSection('experience')} className="group px-8 py-4 bg-[#1E3A8A] text-white rounded-lg font-semibold text-lg hover:bg-[#2D4BA8] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
              View Experience
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <button onClick={() => scrollToSection('contact')} className="group px-8 py-4 bg-white text-[#1E3A8A] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 border-2 border-white">
              Contact Me
              <Mail className="group-hover:scale-110 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;