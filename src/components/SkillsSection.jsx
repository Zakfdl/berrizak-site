import React from 'react';
import { Sparkles, BarChart3, TrendingUp, Code } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Generative AI SEO (GEO)',
      icon: Sparkles,
      color: 'from-purple-500 to-[#1E3A8A]',
      skills: [
        { name: 'AI-Powered Content Optimization', icon: 'https://i.imgur.com/oPbHjUU.png' },
        { name: 'Semantic Search Strategy', icon: 'https://i.imgur.com/dNobQGh.png' },
        { name: 'LLM-Based SEO', icon: 'https://i.imgur.com/Z4UIeli.png' },
        { name: 'Voice Search Optimization', icon: 'https://i.imgur.com/0Q08x6s.png' },
        { name: 'AI Content Generation', icon: 'https://i.imgur.com/YTuqMTj.png' },
      ],
    },
    {
      title: 'Data Analytics',
      icon: BarChart3,
      color: 'from-blue-500 to-[#1E3A8A]',
      skills: [
        { name: 'Google Analytics', icon: 'https://example.com/icons/google-analytics.png' },
        { name: 'Data Visualization', icon: 'https://example.com/icons/data-visualization.png' },
        { name: 'Predictive Analytics', icon: 'https://example.com/icons/predictive-analytics.png' },
        { name: 'Customer Behavior Analysis', icon: 'https://example.com/icons/customer-behavior.png' },
        { name: 'KPI Tracking & Reporting', icon: 'https://example.com/icons/kpi-reporting.png' },
      ],
    },
    {
      title: 'Performance Marketing',
      icon: TrendingUp,
      color: 'from-green-500 to-[#1E3A8A]',
      skills: [
        { name: 'Digital Advertising', icon: 'https://example.com/icons/digital-advertising.png' },
        { name: 'Conversion Rate Optimization', icon: 'https://example.com/icons/cro.png' },
        { name: 'A/B Testing', icon: 'https://example.com/icons/ab-testing.png' },
        { name: 'Marketing Automation', icon: 'https://example.com/icons/marketing-automation.png' },
        { name: 'ROI Optimization', icon: 'https://example.com/icons/roi.png' },
      ],
    },
    {
      title: 'Technical Skills',
      icon: Code,
      color: 'from-orange-500 to-[#1E3A8A]',
      skills: [
        { name: 'HTML/CSS', icon: 'https://example.com/icons/html-css.png' },
        { name: 'JavaScript', icon: 'https://example.com/icons/javascript.png' },
        { name: 'Shopify Development', icon: 'https://example.com/icons/shopify.png' },
        { name: 'API Integration', icon: 'https://example.com/icons/api.png' },
        { name: 'E-Commerce Platforms', icon: 'https://example.com/icons/ecommerce.png' },
        { name: 'Salla Platform', icon: 'https://example.com/icons/salla.png' },
        { name: 'Zid Platform', icon: 'https://example.com/icons/zid.png' },
      ],
    },
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
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-[#1E3A8A]/5 transition-colors duration-200"
                    >
                      {/* Icon */}
                      <div className="w-6 h-6 flex items-center justify-center">
                        <img
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          className="w-5 h-5 object-contain"
                          loading="lazy"
                          onError={(e) => {
                            // fallback: hide broken icon and show dot instead
                            e.currentTarget.style.display = 'none';
                            const dot = e.currentTarget.parentElement?.querySelector('.skill-dot');
                            if (dot) dot.style.display = 'block';
                          }}
                        />
                        <div
                          className="skill-dot w-2 h-2 rounded-full bg-[#1E3A8A]"
                          style={{ display: 'none' }}
                        ></div>
                      </div>

                      <span className="text-gray-700 font-medium">{skill.name}</span>
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