import React from 'react';
import { Bug, Lightbulb, MessageSquare, Star, ExternalLink, ArrowRight } from 'lucide-react';
import './Feedback.css';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const FEEDBACK_CARDS = [
  {
    icon: Bug,
    title: 'Report a Bug',
    desc: 'Found a scanning error, incorrect size calculation, or UI issue? Open an issue with your system details.',
    color: '#f43f5e',
    btnLabel: 'Report Bug',
    url: 'https://github.com/rajnishcoder/StorageUnleash/issues/new?title=%5BBug%5D+&labels=bug'
  },
  {
    icon: Lightbulb,
    title: 'Request a Feature',
    desc: 'Have an idea for duplicate file detection, cloud drives, or custom cache cleaner rules? Suggest it!',
    color: '#f59e0b',
    btnLabel: 'Suggest Feature',
    url: 'https://github.com/rajnishcoder/StorageUnleash/issues/new?title=%5BFeature+Request%5D+&labels=enhancement'
  },
  {
    icon: MessageSquare,
    title: 'General Feedback',
    desc: 'Share your overall experience or questions directly with the developer on our GitHub tracker.',
    color: '#38bdf8',
    btnLabel: 'Send Feedback',
    url: 'https://github.com/rajnishcoder/StorageUnleash/issues'
  },
  {
    icon: Star,
    title: 'Star on GitHub',
    desc: 'Show your appreciation and help more users discover Storage Unleashed by starring the project.',
    color: '#eab308',
    btnLabel: 'Star Repository',
    url: 'https://github.com/rajnishcoder/StorageUnleash'
  }
];

export const Feedback: React.FC = () => {
  return (
    <section className="feedback-section" id="feedback">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Community & Open Source</div>
          <h2 className="section-title">Support, Feedback & Bug Reports</h2>
          <p className="section-desc">
            Storage Unleashed is 100% open source. Found a bug, have a feature idea, or want to give feedback? We welcome your contributions on GitHub.
          </p>
        </div>

        <div className="feedback-grid">
          {FEEDBACK_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <a
                key={idx}
                href={card.url}
                target="_blank"
                rel="noreferrer"
                className="feedback-card glass-card"
              >
                <div
                  className="feedback-icon-wrap"
                  style={{
                    backgroundColor: `${card.color}15`,
                    borderColor: `${card.color}35`,
                    color: card.color
                  }}
                >
                  <Icon size={22} />
                </div>
                <h3 className="feedback-card-title">{card.title}</h3>
                <p className="feedback-card-desc">{card.desc}</p>
                <div className="feedback-card-action" style={{ color: card.color }}>
                  <span>{card.btnLabel}</span>
                  <ArrowRight size={14} className="action-arrow" />
                </div>
              </a>
            );
          })}
        </div>

        {/* GitHub Banner Callout */}
        <div className="github-callout-banner glass-card">
          <div className="callout-left">
            <div className="callout-github-icon">
              <GithubIcon size={28} />
            </div>
            <div className="callout-text">
              <div className="callout-title">rajnishcoder/StorageUnleash</div>
              <div className="callout-desc">
                Public GitHub repository • MIT Licensed • Free for everyone
              </div>
            </div>
          </div>
          <a
            href="https://github.com/rajnishcoder/StorageUnleash"
            target="_blank"
            rel="noreferrer"
            className="btn-primary btn-callout"
          >
            <span>Visit GitHub Repo</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
