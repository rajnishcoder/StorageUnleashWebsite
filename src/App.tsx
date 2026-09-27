import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveVisualizer } from './components/InteractiveVisualizer';
import { Features } from './components/Features';
import { Supporter } from './components/Supporter';
import { Feedback } from './components/Feedback';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';

export const App: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#privacy') {
        setIsPrivacyOpen(true);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="app-root">
      <Navbar onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <main>
        <Hero />
        <InteractiveVisualizer />
        <Features />
        <Supporter />
        <Feedback />
        <FAQ />
      </main>
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => {
        setIsPrivacyOpen(false);
        if (window.location.hash === '#privacy') {
          history.replaceState(null, '', window.location.pathname);
        }
      }} />
      <Analytics />
    </div>
  );
};

export default App;

