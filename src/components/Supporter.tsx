import React, { useState } from 'react';
import {
  Heart,
  Coffee,
  Rocket,
  Smartphone,
  Copy,
  Check,
  ExternalLink,
  QrCode
} from 'lucide-react';
import { track } from '@vercel/analytics';
import './Supporter.css';

const UPI_ID = 'getwere-1@oksbi';
const UPI_PAY_URL = 'upi://pay?pa=getwere-1@oksbi&pn=Rajnish%20Rajput&aid=uGICAgICm786GTg';
const BUY_ME_A_COFFEE_URL = 'https://buymeacoffee.com/rajnishcoder';
const GITHUB_SPONSORS_URL = 'https://github.com/sponsors/rajnishcoder';

const TIERS = [
  {
    amount: 5,
    name: 'Coffee Supporter',
    tagline: 'Thanks! ☕',
    desc: 'Buy a coffee for the developer and keep caffeine levels high.',
    icon: Coffee,
    url: 'https://buymeacoffee.com/rajnishcoder',
    highlight: false
  },
  {
    amount: 10,
    name: 'Project Backer',
    tagline: 'You Rock! ❤️',
    desc: 'Directly fund continuous updates, OS compatibility fixes, and new features.',
    icon: Heart,
    url: 'https://buymeacoffee.com/rajnishcoder',
    highlight: true
  },
  {
    amount: 20,
    name: 'Power Supporter',
    tagline: 'Fund Future Dev 🚀',
    desc: 'Champion independent privacy-first software and accelerate future tools.',
    icon: Rocket,
    url: 'https://buymeacoffee.com/rajnishcoder',
    highlight: false
  }
];

export const Supporter: React.FC = () => {
  const [showQr, setShowQr] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(UPI_ID).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });

    try {
      track('UPI_Copy_Click', { upi_id: UPI_ID });
    } catch {
      // ignore
    }
  };

  const handleTrackTier = (tierAmount: number, tierName: string) => {
    try {
      track('Sponsor_Tier_Click', { amount: tierAmount, name: tierName, platform: 'buymeacoffee' });
    } catch {
      // ignore
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      try {
        (window as any).gtag('event', 'sponsor_click', {
          event_category: 'Sponsorship',
          event_label: `${tierName} ($${tierAmount})`,
          value: tierAmount,
          currency: 'USD',
          platform: 'buymeacoffee'
        });
      } catch {
        // ignore
      }
    }
  };

  const handleTrackPlatform = (platform: string) => {
    try {
      track('Sponsor_Platform_Click', { platform });
    } catch {
      // ignore
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      try {
        (window as any).gtag('event', 'sponsor_platform_click', {
          event_category: 'Sponsorship',
          event_label: platform,
          platform
        });
      } catch {
        // ignore
      }
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
            <div className="section-tag">Support Independent Dev</div>
            <h2 className="supporter-title">
              Free to use.<br />
              <span className="gradient-text-pink">Supported by the community.</span>
            </h2>
            <p className="supporter-desc">
              Storage Unleashed is <strong>100% free and fully functional</strong> with no subscriptions, no ads, and zero telemetry. If it helped you reclaim valuable disk space, consider fueling development with a coffee or sponsor!
            </p>
          </div>

          {/* 3 Main Tiers Grid (Original UI) */}
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
                    onClick={() => handleTrackTier(tier.amount, tier.name)}
                  >
                    <span>Support ${tier.amount}</span>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Small UPI Option on the same page */}
          <div className="supporter-upi-inline-bar">
            <div className="web-upi-header">
              <div className="web-upi-left">
                <span className="web-upi-flag">🇮🇳</span>
                <span className="web-upi-label">UPI:</span>
                <code className="web-upi-code">{UPI_ID}</code>
              </div>
              <div className="web-upi-actions">
                <button
                  type="button"
                  className={`btn-web-upi-copy ${copied ? 'copied' : ''}`}
                  onClick={handleCopyUpi}
                  title="Copy UPI ID"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? 'Copied!' : 'Copy UPI'}</span>
                </button>
                <button
                  type="button"
                  className={`btn-web-upi-qr ${showQr ? 'active' : ''}`}
                  onClick={() => setShowQr(!showQr)}
                >
                  <QrCode size={13} />
                  <span>{showQr ? 'Hide QR' : 'Show QR'}</span>
                </button>
              </div>
            </div>

            {/* Expandable QR Preview */}
            {showQr && (
              <div className="web-upi-qr-preview">
                <div className="web-upi-qr-box">
                  <img
                    src="/upi-qr.png"
                    alt="Google Pay QR Code"
                    className="web-upi-qr-img"
                  />
                </div>
                <div className="web-upi-qr-text-wrap">
                  <div className="web-upi-scan-note">
                    <QrCode size={14} className="text-cyan" />
                    <span>Scan with <strong>Google Pay, PhonePe, Paytm, BHIM</strong> or any UPI app</span>
                  </div>
                  <a
                    href={UPI_PAY_URL}
                    className="web-upi-intent-link"
                    onClick={() => {
                      try {
                        track('UPI_Pay_Click', { upi_id: UPI_ID });
                      } catch {
                        // ignore
                      }
                    }}
                  >
                    <Smartphone size={14} />
                    <span>Open in UPI App</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="custom-support-row">
            <div className="support-platforms-list">
              <a
                href={BUY_ME_A_COFFEE_URL}
                target="_blank"
                rel="noreferrer"
                className="custom-support-link"
                onClick={() => handleTrackPlatform('buymeacoffee')}
              >
                ☕ Buy Me a Coffee (1-Click / Apple Pay)
              </a>
              <span className="platform-sep">•</span>
              <a
                href={GITHUB_SPONSORS_URL}
                target="_blank"
                rel="noreferrer"
                className="custom-support-link"
                onClick={() => handleTrackPlatform('github_sponsors')}
              >
                ❤️ GitHub Sponsors
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
