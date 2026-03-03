
import React from 'react';
import { GraduationCap, TrendingUp, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1E3A8A 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-[#1E3A8A]">Me</span>
            </h2>
            <div className="w-24 h-1 bg-[#1E3A8A] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#1E3A8A]/10 rounded-lg">
                  <GraduationCap className="text-[#1E3A8A]" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Physics-Driven Analytical Mindset
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    With a Bachelor's degree in Physics, I bring a unique analytical perspective to the world of e-commerce and digital marketing. My scientific background has instilled in me a rigorous approach to problem-solving, where every challenge is an opportunity to apply systematic thinking and data-driven methodologies. This foundation allows me to dissect complex business problems with precision and develop innovative solutions that drive measurable results.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#1E3A8A]/10 rounded-lg">
                  <TrendingUp className="text-[#1E3A8A]" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Building Scalable E-Commerce Systems
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    My journey from theoretical physics to practical e-commerce has been transformative. I specialize in creating scalable digital ecosystems that seamlessly integrate marketing automation, data analytics, and performance optimization. By applying the same methodical approach used in scientific research, I've successfully managed multi-platform operations, optimized conversion funnels, and implemented AI-driven SEO strategies that consistently deliver growth and efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#1E3A8A]/10 rounded-lg">
                  <Zap className="text-[#1E3A8A]" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Innovation Through Data & Technology
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Today, I leverage cutting-edge technologies including Generative AI for SEO optimization, advanced data analytics for strategic decision-making, and performance marketing techniques to maximize ROI. My technical proficiency in HTML, CSS, and JavaScript, combined with expertise in platforms like Shopify and marketplace integrations, enables me to bridge the gap between technical implementation and business strategy, ensuring every solution is both innovative and practical.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
