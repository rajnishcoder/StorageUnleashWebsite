import React, { useState } from 'react';
import { Heart, Coffee, Rocket, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import './Supporter.css';

const TIERS = [
  {
    amount: 5,
    name: 'Coffee Supporter',
    tagline: 'Thanks! ☕',
    desc: 'Buy a coffee for the developer and keep caffeine levels high.',
    icon: Coffee,
    url: 'https://buy.lemonsqueezy.com/checkout/buy/...',
    highlight: false
  },
  {
    amount: 10,
    name: 'Project Backer',
    tagline: 'You Rock! ❤️',
    desc: 'Directly fund continuous updates, OS compatibility fixes, and new features.',
    icon: Heart,
    url: 'https://buy.lemonsqueezy.com/checkout/buy/...',
    highlight: true
  },
  {
    amount: 20,
    name: 'Power Supporter',
    tagline: 'Fund Future Dev 🚀',
    desc: 'Champion independent privacy-first software and accelerate future tools.',
    icon: Rocket,
    url: 'https://buy.lemonsqueezy.com/checkout/buy/...',
    highlight: false
  }
];

export const Supporter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="supporter-section" id="supporter">
      <div className="container">
        <div className="supporter-wrapper glass-card">
          <div className="supporter-header">
            <div className="heart-circle-badge">
              <Heart size={26} className="heart-pulsing-icon" />
            </div>
            <div className="section-tag">Value-First Support</div>
            <h2 className="supporter-title">
              Free to use.<br />
              <span className="gradient-text-pink">Supported by the community.</span>
            </h2>
            <p className="supporter-desc">
              Storage Unleashed is <strong>100% free and fully functional</strong> with no subscriptions, no ads, and no locked features. If it helped you reclaim valuable disk space, consider supporting independent development!
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
                    href={`https://storageunleashed.com/support?amount=${tier.amount}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn-tier-cta ${tier.highlight ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    <span>Support ${tier.amount}</span>
                  </a>
                </div>
              );
            })}
          </div>

          <div className="custom-support-row">
            <span>Want to contribute a custom amount? </span>
            <a
              href="https://storageunleashed.com/support"
              target="_blank"
              rel="noreferrer"
              className="custom-support-link"
            >
              Choose Custom Amount →
            </a>
          </div>

          {/* Optional Opt-in Newsletter */}
          <div className="newsletter-card">
            <div className="newsletter-info">
              <div className="newsletter-icon-wrap">
                <Sparkles size={18} color="#38bdf8" />
              </div>
              <div className="newsletter-text">
                <div className="newsletter-title">Get Notified for Major Releases</div>
                <div className="newsletter-desc">
                  No spam. We only send emails when major features (like cloud storage or duplicate finders) drop.
                </div>
              </div>
            </div>

            {subscribed ? (
              <div className="newsletter-success">
                <CheckCircle2 size={18} color="#10b981" />
                <span>You are on the list! We will notify you on major releases.</span>
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-submit-btn">
                  <span>Notify Me</span>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
