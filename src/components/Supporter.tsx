import React from 'react';
import { Heart, Coffee, Rocket } from 'lucide-react';
import './Supporter.css';

const GITHUB_SPONSORS_URL = 'https://github.com/sponsors/rajnishcoder';

const TIERS = [
  {
    amount: 5,
    name: 'Coffee Supporter',
    tagline: 'Thanks! ☕',
    desc: 'Buy a coffee for the developer and keep caffeine levels high.',
    icon: Coffee,
    url: 'https://github.com/sponsors/rajnishcoder?frequency=one-time&sponsor=rajnishcoder&amount=5',
    highlight: false
  },
  {
    amount: 10,
    name: 'Project Backer',
    tagline: 'You Rock! ❤️',
    desc: 'Directly fund continuous updates, OS compatibility fixes, and new features.',
    icon: Heart,
    url: 'https://github.com/sponsors/rajnishcoder?frequency=one-time&sponsor=rajnishcoder&amount=10',
    highlight: true
  },
  {
    amount: 20,
    name: 'Power Supporter',
    tagline: 'Fund Future Dev 🚀',
    desc: 'Champion independent privacy-first software and accelerate future tools.',
    icon: Rocket,
    url: 'https://github.com/sponsors/rajnishcoder?frequency=one-time&sponsor=rajnishcoder&amount=20',
    highlight: false
  }
];

export const Supporter: React.FC = () => {
  return (
    <section className="supporter-section" id="supporter">
      <div className="container">
        <div className="supporter-wrapper glass-card">
          <div className="supporter-header">
            <div className="heart-circle-badge">
              <Heart size={26} className="heart-pulsing-icon" />
            </div>
            <div className="section-tag">GitHub Sponsors</div>
            <h2 className="supporter-title">
              Free to use.<br />
              <span className="gradient-text-pink">Supported by the community.</span>
            </h2>
            <p className="supporter-desc">
              Storage Unleashed is <strong>100% free and fully functional</strong> with no subscriptions, no ads, and no locked features. If it helped you reclaim valuable disk space, consider sponsoring on GitHub!
            </p>
          </div>

          {/* Tiers Grid */}
          <div className="supporter-tiers-grid">
            {TIERS.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.amount}
                  className={`supporter-tier-card ${tier.highlight ? 'featured' : ''}`}
                >
                  {tier.highlight && <span className="featured-badge">Community Favorite</span>}
                  <div className="tier-header">
                    <div className="tier-icon-box">
                      <Icon size={22} />
                    </div>
                    <div className="tier-price-group">
                      <span className="tier-price-symbol">$</span>
                      <span className="tier-price-val">{tier.amount}</span>
                    </div>
                  </div>
                  <h3 className="tier-heading">{tier.name}</h3>
                  <div className="tier-sub-tag">{tier.tagline}</div>
                  <p className="tier-body-text">{tier.desc}</p>
                  <a
                    href={tier.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn-tier-cta ${tier.highlight ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    <span>Sponsor ${tier.amount}</span>
                  </a>
                </div>
              );
            })}
          </div>

          <div className="custom-support-row">
            <span>Want to sponsor a custom or monthly amount? </span>
            <a
              href={GITHUB_SPONSORS_URL}
              target="_blank"
              rel="noreferrer"
              className="custom-support-link"
            >
              Sponsor on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

