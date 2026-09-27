import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQS = [
  {
    q: 'Is Storage Unleashed really 100% free?',
    a: 'Yes! Storage Unleashed is completely free and unrestricted. There are no subscriptions, no ads, no feature locks, and no hidden upsells. We rely entirely on voluntary contributions from users who find value in the product.'
  },
  {
    q: 'Are any features locked behind a paywall?',
    a: 'No. All scanning algorithms, Treemap views, Sunburst radial charts, file categorization filters, and batch cleanup lists are 100% unlocked in the free download.'
  },
  {
    q: 'How is my privacy protected?',
    a: 'Storage Unleashed runs 100% locally on your computer. It never communicates file names, folder structures, or disk usage data across the internet. There is zero telemetry and zero network analytics.'
  },
  {
    q: 'Why is it faster than traditional disk analyzers?',
    a: 'Storage Unleashed uses an asynchronous, parallel filesystem scanner engine that traverses disk hierarchies concurrently across multiple CPU threads without blocking the user interface.'
  },
  {
    q: 'Where do deleted files go?',
    a: 'All deletion actions in Storage Unleashed are mapped to your macOS native Trash with full undo support. Nothing is permanently destroyed without your explicit confirmation.'
  },
  {
    q: 'Which operating systems are supported?',
    a: 'Storage Unleashed is crafted specifically for macOS, supporting macOS 12 (Monterey) through macOS 15+ (Sequoia) with dedicated high-performance DMG builds for Apple Silicon (M1/M2/M3/M4) and Intel Macs.'
  },
  {
    q: "Why does macOS show 'StorageUnleash is damaged or from an unidentified developer'?",
    a: "This is Apple Gatekeeper's standard security notice for free, open-source applications distributed outside the Mac App Store. To launch: Drag the app into your Applications folder, then right-click (or Control-click) StorageUnleash and select 'Open' once, or run 'xattr -cr /Applications/StorageUnleash.app' in Terminal."
  }
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Frequently Asked Questions</div>
          <h2 className="section-title">Got Questions? We Have Answers.</h2>
        </div>

        <div className="faq-accordion">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`faq-item glass-card ${isOpen ? 'open' : ''}`}
                onClick={() => toggle(idx)}
              >
                <div className="faq-question-row">
                  <h3 className="faq-question">{faq.q}</h3>
                  <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                </div>
                {isOpen && <div className="faq-answer">{faq.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
