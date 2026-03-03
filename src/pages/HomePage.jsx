import React, { useEffect, useState } from 'react';
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
  const [cms, setCms] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/get.php', { cache: 'no-store' });
        if (!res.ok) throw new Error(`CMS API error: ${res.status}`);
        const data = await res.json();
        setCms(data);
      } catch (e) {
        setError(e?.message || 'Failed to load CMS data');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div className="p-10">Loading...</div>;

  if (error) {
    return (
      <div className="p-10">
        <p className="font-semibold">CMS Error</p>
        <p className="opacity-80 mt-2">{error}</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {cms?.profile?.name
            ? `${cms.profile.name} - Portfolio`
            : 'Portfolio'}
        </title>
        <meta
          name="description"
          content={
            cms?.profile?.bio ||
            'Portfolio website'
          }
        />
      </Helmet>

      <div className="min-h-screen">
        <Header data={cms} />
        <main>
          {/* ✅ مرر cms للسكاشنز */}
          <HeroSection data={cms} />
          <AboutSection data={cms} />
          <ExperienceSection data={cms} />
          <PortfolioProjectsSection projects={cms?.projects || []} data={cms} />
          <SkillsSection data={cms} />
          <CertificationsSection data={cms} />
          <ContactSection data={cms} />
        </main>
      </div>
    </>
  );
};

export default HomePage;