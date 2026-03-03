
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import AboutSection from '@/components/AboutSection.jsx';
import ExperienceSection from '@/components/ExperienceSection.jsx';
import PortfolioProjectsSection from '@/components/PortfolioProjectsSection.jsx';
import SkillsSection from '@/components/SkillsSection.jsx';
import CertificationsSection from '@/components/CertificationsSection.jsx';
import ContactSection from '@/components/ContactSection.jsx';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Zakaria Fadl - E-Commerce Specialist & Data Analytics Expert</title>
        <meta 
          name="description" 
          content="Portfolio of Zakaria Fadl - Senior E-Commerce Specialist with expertise in Generative AI SEO, Data Analytics, and Performance Marketing. Physics graduate driving data-driven digital growth." 
        />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <PortfolioProjectsSection />
          <SkillsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
};

export default HomePage;
