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

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch('/api/get.php', { cache: 'no-store' });

        // لو الـ API مش موجود أو رجع خطأ → استخدم fallback
        if (!res.ok) throw new Error(`CMS API not ready (${res.status})`);

        // تأكد إن الرد JSON فعلاً
        const contentType = res.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
          throw new Error('CMS API returned non-JSON response');
        }

        const data = await res.json();

        if (!cancelled) {
          setCms(data);
        }
      } catch (e) {
        // ✅ أهم تغيير: بدل ما نوقف الموقع بخطأ… نخلي cms = null ونعرض الموقع عادي
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

  // Loading بسيط (اختياري)
  if (loading) {
    return <div className="p-10">Loading...</div>;
  }

  // ✅ مفيش Error screen خلاص — الموقع لازم يشتغل حتى لو API واقع
  return (
    <>
      <Helmet>
        <title>
          {cms?.profile?.name ? `${cms.profile.name} - Portfolio` : 'Zakaria Fadl - Portfolio'}
        </title>
        <meta
          name="description"
          content={cms?.profile?.bio || 'Portfolio website'}
        />
      </Helmet>

      <div className="min-h-screen">
        <Header data={cms} />
        <main>
          <HeroSection data={cms} />
          <AboutSection data={cms} />
          <ExperienceSection data={cms} />

          {/* ✅ projects هتيجي من cms لو موجودة، وإلا هتكون [] */}
          <PortfolioProjectsSection projects={cms?.projects || []} />

          <SkillsSection data={cms} />
          <CertificationsSection data={cms} />
          <ContactSection data={cms} />
        </main>
      </div>
    </>
  );
};

export default HomePage;