
import React from 'react';
import { Sparkles, BarChart3, TrendingUp, Code } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Generative AI SEO (GEO)',
      icon: Sparkles,
      skills: ['AI-Powered Content Optimization', 'Semantic Search Strategy', 'LLM-Based SEO', 'Voice Search Optimization', 'AI Content Generation'],
      color: 'from-purple-500 to-[#1E3A8A]'
    },
    {
      title: 'Data Analytics',
      icon: BarChart3,
      skills: ['Google Analytics', 'Data Visualization', 'Predictive Analytics', 'Customer Behavior Analysis', 'KPI Tracking & Reporting'],
      color: 'from-blue-500 to-[#1E3A8A]'
    },
    {
      title: 'Performance Marketing',
      icon: TrendingUp,
      skills: ['Digital Advertising', 'Conversion Rate Optimization', 'A/B Testing', 'Marketing Automation', 'ROI Optimization'],
      color: 'from-green-500 to-[#1E3A8A]'
    },
    {
      title: 'Technical Skills',
      icon: Code,
      skills: ['HTML/CSS', 'JavaScript', 'Shopify Development', 'API Integration', 'E-Commerce Platforms'],
      color: 'from-orange-500 to-[#1E3A8A]'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & <span className="text-[#1E3A8A]">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-[#1E3A8A] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#1E3A8A]/30 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-[#1E3A8A]/5 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#1E3A8A]"></div>
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
