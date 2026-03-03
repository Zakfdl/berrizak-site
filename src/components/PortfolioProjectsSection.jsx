import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';

const PortfolioProjectsSection = ({ projects = [] }) => {
  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1E3A8A 2px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio <span className="text-[#1E3A8A]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#1E3A8A] mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            A showcase of scalable e-commerce systems, data-driven optimizations, and digital growth initiatives.
          </p>
        </div>

        {/* ✅ لو مفيش مشاريع في الـ CMS */}
        {projects.length === 0 ? (
          <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
            <p className="text-gray-700 font-semibold">No projects yet.</p>
            <p className="text-gray-500 mt-2">
              Go to <span className="font-mono">/admin</span> and add your projects.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => {
              const IconComponent = Globe; // ✅ مؤقتًا أيقونة ثابتة

              return (
                <a
                  key={project.id || index}
                  href={project.url || '#'}
                  target={project.url ? '_blank' : undefined}
                  rel={project.url ? 'noopener noreferrer' : undefined}
                  className="group block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#1E3A8A]/30 hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
                >
                  {/* Decorative Top Border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-[#1E3A8A] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-[#1E3A8A]/10 rounded-xl group-hover:bg-[#1E3A8A] transition-colors duration-300">
                      <IconComponent
                        className="text-[#1E3A8A] group-hover:text-white transition-colors duration-300"
                        size={24}
                      />
                    </div>
                    <ExternalLink
                      className="text-gray-400 group-hover:text-[#1E3A8A] transition-colors"
                      size={20}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1E3A8A] transition-colors">
                    {project.title || project.name || 'Untitled Project'}
                  </h3>

                  {project.role && (
                    <p className="text-sm font-semibold text-[#1E3A8A] mb-4 uppercase tracking-wider">
                      {project.role}
                    </p>
                  )}

                  <p className="text-gray-600 leading-relaxed mt-auto">
                    {project.description || ''}
                  </p>

                  {/* Tags (اختياري) */}
                  {!!(project.tags && project.tags.length) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioProjectsSection;