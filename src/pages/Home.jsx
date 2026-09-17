import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TechnologyStrip from '../components/TechnologyStrip';
import ProblemSection from '../components/ProblemSection';
import Solutions from '../components/Solutions';
import IAMProblemFinder from '../components/IAMProblemFinder';
import BeforeAfter from '../components/BeforeAfter';
import IdentityLifecycle from '../components/IdentityLifecycle';
import IdentityEngine from '../components/IdentityEngine';
import AISection from '../components/AISection';
import IAMRiskExplorer from '../components/IAMRiskExplorer';
import Industries from '../components/Industries';
import Stats from '../components/Stats';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechnologyStrip />
        <ProblemSection />
        <Solutions />
        <IAMProblemFinder />
        <BeforeAfter />
        <IdentityLifecycle />
        <IdentityEngine />
        <AISection />
        <IAMRiskExplorer />
        <Industries />
        <Stats />
        <CaseStudies />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Home;
