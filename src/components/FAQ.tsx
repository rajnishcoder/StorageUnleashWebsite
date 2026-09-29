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
    a: 'All deletion actions in Storage Unleashed are safely routed to your system native Trash or Recycle Bin with full undo support. Nothing is permanently destroyed without your explicit review and confirmation.'
  },
  {
    q: 'Which operating systems are supported?',
    a: 'Storage Unleashed is currently available for macOS 12+ (with native builds for Apple Silicon M1/M2/M3/M4 and Intel Macs). Official Windows and Linux desktop releases are actively in development to bring the same blazing-fast visual disk analysis experience to all platforms.'
  },
  {
    q: 'How does Storage Unleashed compare to WinDirStat, DaisyDisk, or Disk Inventory X?',
    a: 'Storage Unleashed combines the best of all worlds: high-throughput multi-threaded scanning, modern dark-mode interactive Treemap and Sunburst visualizations, specialized 1-click developer cache cleaners (node_modules, Docker, Xcode, Python), zero cloud telemetry, and 100% free open-source availability with no paywalls or subscriptions.'
  },
  {
    q: "Why does macOS show 'Storage Unleashed is damaged or from an unidentified developer'?",
    a: "When you download the .dmg file directly from a browser, macOS Gatekeeper tags it with a quarantine attribute. Before opening the app for the first time, simply run 'xattr -cr /Applications/StorageUnleashed.app' in Terminal (or click 'Open Anyway' in System Settings → Privacy & Security). If you install via Homebrew ('brew install rajnishcoder/tap/storageunleashed'), this quarantine removal is handled automatically."
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
