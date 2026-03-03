import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';

const CertificationsSection = () => {
  const certificates = [
    {
      title: 'Search Engine Optimization and Content Marketing',
      url: 'https://coursera.org/share/502601fb8107d1e6393846c2f8076bb5',
      institution: 'IBM',
      logo: 'https://horizons-cdn.hostinger.com/3ab4aec4-2c7c-4c28-b507-29c6155aa379/c8a1baddfec7f010b43a4204841333bd.png'
    },
    {
      title: 'GenAI for SEO: A Hands-On Playbook',
      url: 'https://coursera.org/share/879f94130d4ef52420dec973ccd23423',
      institution: 'IBM',
      logo: 'https://horizons-cdn.hostinger.com/3ab4aec4-2c7c-4c28-b507-29c6155aa379/c8a1baddfec7f010b43a4204841333bd.png'
    },
    {
      title: 'Generative AI: Accelerate your Digital Marketing Career',
      url: 'https://coursera.org/share/dbdaf315c4edca62559128e238f8990c',
      institution: 'IBM',
      logo: 'https://horizons-cdn.hostinger.com/3ab4aec4-2c7c-4c28-b507-29c6155aa379/c8a1baddfec7f010b43a4204841333bd.png'
    },
    {
      title: 'Excel Basics for Data Analysis',
      url: 'https://coursera.org/share/12391a8575c98663720ebe556e8d8c21',
      institution: 'IBM',
      logo: 'https://horizons-cdn.hostinger.com/3ab4aec4-2c7c-4c28-b507-29c6155aa379/c8a1baddfec7f010b43a4204841333bd.png'
    },
    {
      title: 'Digital Marketing and E-commerce',
      url: 'https://coursera.org/share/934ea31ed8b16be08bc1db88600d4351',
      institution: 'Google',
      logo: 'https://horizons-cdn.hostinger.com/3ab4aec4-2c7c-4c28-b507-29c6155aa379/bd314f387411b0ada18df54e0950909b.png'
    },
    {
      title: 'AI SEO: Mastering Generative Engine Optimization (GEO)',
      url: 'https://coursera.org/share/187ce166a37b48df93fff5d0bb132ca2',
      institution: 'SkillUp',
      logo: 'https://horizons-cdn.hostinger.com/3ab4aec4-2c7c-4c28-b507-29c6155aa379/caff067afd62b2f51c71e1a04f99e98d.png'
    },
    {
      title: 'Introduction to Data Analytics',
      url: 'https://coursera.org/share/54a0117a71e44530655d79ccc17d2f2a',
      institution: 'Meta',
      logo: 'https://horizons-cdn.hostinger.com/3ab4aec4-2c7c-4c28-b507-29c6155aa379/481f0e3f21eb1a3102022049719ad5dc.png'
    },
    {
      title: 'Foundations: Data, Data, Everywhere',
      url: 'https://coursera.org/share/d070b5c46c4887047ec05b07107e1022',
      institution: 'Google',
      logo: 'https://horizons-cdn.hostinger.com/3ab4aec4-2c7c-4c28-b507-29c6155aa379/bd314f387411b0ada18df54e0950909b.png'
    },
    {
      title: 'Create your e-commerce store with Shopify',
      url: 'https://coursera.org/share/7a9641cedfceba9d1ec51c591bda2fa7',
      institution: 'Coursera',
      logo: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=scale-down/dqhc9b68JewD344S/image-removebg-preview-63-eOnt28HwgbGAW40H.png'
    },
    {
      title: 'Build a Full Website using WordPress',
      url: 'https://coursera.org/share/fee6e75831ad708825c0d28c994f09b8',
      institution: 'Coursera',
      logo: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=scale-down/dqhc9b68JewD344S/image-removebg-preview-63-eOnt28HwgbGAW40H.png'
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="text-[#1E3A8A]">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-[#1E3A8A] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Continuous learning and verified expertise from industry-leading institutions.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#1E3A8A]/30 hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>

                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="h-12 w-auto flex items-center justify-center bg-white rounded-lg p-1 shadow-sm border border-gray-50">
                      <img
                        src={cert.logo}
                        alt={`${cert.institution} logo`}
                        className="h-full w-auto object-contain max-w-[100px]"
                      />
                    </div>
                    <ExternalLink className="text-gray-400 group-hover:text-[#1E3A8A] transition-colors" size={20} />
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#1E3A8A] transition-colors line-clamp-3">
                    {cert.title}
                  </h4>

                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-medium text-gray-500 border-t border-gray-50">
                    <CheckCircle className="text-green-500" size={16} />
                    <span>Verified by {cert.institution}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
