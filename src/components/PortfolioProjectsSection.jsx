
import React from 'react';
import { ExternalLink, ShoppingCart, Globe, TrendingUp, Search, BarChart, Smartphone } from 'lucide-react';

const PortfolioProjectsSection = () => {
  const projects = [
    {
      name: 'Qeyam.sa E-Commerce Platform',
      url: 'https://qeyam.sa',
      role: 'Senior E-Commerce Specialist',
      description: 'Led comprehensive e-commerce operations, optimizing marketplace integrations and implementing data-driven strategies to enhance customer acquisition and retention.',
      icon: Globe
    },
    {
      name: 'Taif Almasia Medical Store',
      url: '#',
      role: 'E-Commerce Specialist',
      description: 'Drove significant improvements in online presence through strategic site optimization, technical enhancements, and seamless inventory management coordination.',
      icon: ShoppingCart
    },
    {
      name: 'La Secta Beauty Shopify',
      url: '#',
      role: 'Ecommerce Coordinator',
      description: 'Optimized Shopify platform for enhanced user experience and conversion optimization. Managed Amazon marketplace operations and digital advertising campaigns.',
      icon: Smartphone
    },
    {
      name: 'AI-Driven SEO Implementation',
      url: '#',
      role: 'SEO Strategist',
      description: 'Leveraged Generative AI and semantic search strategies to overhaul content optimization, resulting in significant organic traffic growth and improved search rankings.',
      icon: Search
    },
    {
      name: 'Multi-Channel Marketplace Integration',
      url: '#',
      role: 'Project Lead',
      description: 'Successfully integrated and synchronized product catalogs, inventory, and order management across multiple regional marketplaces to expand brand reach.',
      icon: TrendingUp
    },
    {
      name: 'Performance Marketing Dashboard',
      url: '#',
      role: 'Data Analyst',
      description: 'Developed comprehensive analytics dashboards using Google Analytics and predictive modeling to track KPIs, customer behavior, and optimize marketing ROI.',
      icon: BarChart
    },
    {
      name: 'Conversion Rate Optimization (CRO)',
      url: '#',
      role: 'E-Commerce Strategist',
      description: 'Implemented rigorous A/B testing and user journey analysis to identify bottlenecks, streamlining the checkout process and boosting overall conversion rates.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1E3A8A 2px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio <span className="text-[#1E3A8A]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#1E3A8A] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            A showcase of scalable e-commerce systems, data-driven optimizations, and digital growth initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#1E3A8A]/30 hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
              >
                {/* Decorative Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-[#1E3A8A] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-[#1E3A8A]/10 rounded-xl group-hover:bg-[#1E3A8A] transition-colors duration-300">
                    <IconComponent className="text-[#1E3A8A] group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <ExternalLink className="text-gray-400 group-hover:text-[#1E3A8A] transition-colors" size={20} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1E3A8A] transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-sm font-semibold text-[#1E3A8A] mb-4 uppercase tracking-wider">
                  {project.role}
                </p>

                <p className="text-gray-600 leading-relaxed mt-auto">
                  {project.description}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjectsSection;
