
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior E-Commerce Specialist',
      company: 'Qeyam.sa',
      period: 'Feb 2025 – Present',
      description: 'Leading comprehensive e-commerce operations with a focus on strategic growth and operational excellence. Managing end-to-end marketing campaigns, optimizing marketplace integrations across multiple platforms, and implementing data-driven strategies to enhance customer acquisition and retention. Spearheading digital transformation initiatives and coordinating cross-functional teams to achieve business objectives.',
      current: true
    },
    {
      title: 'E-Commerce Specialist',
      company: 'Taif Almasia Medical Co',
      period: 'Jan 2023 – Feb 2025',
      description: 'Drove significant improvements in online presence through strategic site optimization and technical enhancements. Coordinated inventory management systems to ensure seamless product availability and fulfillment. Implemented performance marketing strategies that increased conversion rates and customer engagement. Collaborated with stakeholders to align e-commerce initiatives with broader business goals.',
      current: false
    },
    {
      title: 'Ecommerce Coordinator',
      company: 'La Secta Beauty',
      period: 'Feb 2019 – Dec 2022',
      description: 'Pioneered digital advertising campaigns across multiple channels, resulting in substantial revenue growth. Optimized Shopify platform for enhanced user experience and conversion optimization. Managed Amazon marketplace operations including product listings, inventory management, and customer service. Developed and executed data-driven marketing strategies that consistently exceeded performance targets.',
      current: false
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="text-[#1E3A8A]">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-[#1E3A8A] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1E3A8A] to-gray-300 transform md:-translate-x-1/2"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                    <div className={`w-4 h-4 rounded-full border-4 ${
                      exp.current ? 'bg-[#1E3A8A] border-[#1E3A8A] animate-pulse' : 'bg-white border-[#1E3A8A]'
                    }`}></div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#1E3A8A]/30">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-[#1E3A8A]/10 rounded-lg">
                          <Briefcase className="text-[#1E3A8A]" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-[#1E3A8A] mb-2">
                            {exp.company}
                          </p>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar size={16} />
                            <span className="text-sm font-medium">{exp.period}</span>
                            {exp.current && (
                              <span className="ml-2 px-3 py-1 bg-[#1E3A8A] text-white text-xs font-semibold rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
