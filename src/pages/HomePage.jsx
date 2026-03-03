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

/* ✅ Fallback Projects */
const fallbackProjects = [
  {
    id: 'p1',
    title: 'E-commerce Store Optimization',
    role: 'E-commerce Specialist',
    description:
      'Improved conversion rate through UX enhancements, checkout optimization, and structured product pages.',
    url: 'https://berrizak.com',
    tags: ['CRO', 'UX', 'E-commerce'],
  },
  {
    id: 'p2',
    title: 'Google Merchant Center Setup',
    role: 'Marketing Operations',
    description:
      'Configured product feeds, resolved disapprovals, and improved Google Shopping visibility.',
    url: 'https://berrizak.com',
    tags: ['GMC', 'GA4', 'Product Feeds'],
  },
  {
    id: 'p3',
    title: 'Performance Dashboard & Reporting',
    role: 'Data Analytics',
    description:
      'Built automated dashboards to track KPIs, marketing performance, and sales growth.',
    url: 'https://berrizak.com',
    tags: ['Analytics', 'Dashboard', 'KPI'],
  },
];

const HomePage = () => {
  const [cms, setCms] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(
          `${import.meta.env.BASE_URL}api/get.php`,
          { cache: 'no-store' }
        );

        if (!res.ok) throw new Error(`CMS API not ready (${res.status})`);

        const contentType = res.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
          throw new Error('CMS API returned non-JSON response');
        }

        const data = await res.json();

        if (!cancelled) {
          setCms(data);
        }
      } catch (e) {
        console.warn('[CMS] fallback to static content:', e?.message || e);
        if (!cancelled) setCms(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  /* ✅ Decide which projects to show */
  const projectsToShow =
    cms?.projects && Array.isArray(cms.projects) && cms.projects.length > 0
      ? cms.projects
      : fallbackProjects;

  if (loading) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>
          {cms?.profile?.name
            ? `${cms.profile.name} - Portfolio`
            : 'Zakaria Fadl - Portfolio'}
        </title>
        <meta
          name="description"
          content={
            cms?.profile?.bio ||
            'Portfolio showcasing e-commerce systems, SEO strategy, and data-driven growth.'
          }
        />
      </Helmet>

      <div className="min-h-screen">
        <Header data={cms} />

        <main>
          <HeroSection data={cms} />
          <AboutSection data={cms} />
          <ExperienceSection data={cms} />

          {/* ✅ Now always shows projects */}
          <PortfolioProjectsSection projects={projectsToShow} />

          <SkillsSection data={cms} />
          <CertificationsSection data={cms} />
          <ContactSection data={cms} />
        </main>
      </div>
    </>
  );
};

export default HomePage;