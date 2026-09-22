import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveVisualizer } from './components/InteractiveVisualizer';
import { Features } from './components/Features';
import { Supporter } from './components/Supporter';
import { Feedback } from './components/Feedback';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <InteractiveVisualizer />
        <Features />
        <Supporter />
        <Feedback />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
