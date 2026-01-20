
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Categories from './Categories';
import Benefits from './Benefits';
import TargetAudience from './TargetAudience';
import ValueProof from './ValueProof';
import CTA from './CTA';
import Footer from './Footer';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="bg-[#020617]">
      <Navbar />
      <Hero onStart={onStart} />
      <About />
      <Categories />
      <Benefits />
      <TargetAudience />
      <ValueProof />
      <section id="pricing">
        <CTA onStart={onStart} />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
