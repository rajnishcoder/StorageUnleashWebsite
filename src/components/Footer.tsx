import React from 'react';
import { Heart, Coffee } from 'lucide-react';
import { track } from '@vercel/analytics';
import './Footer.css';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface FooterProps {
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const trackFooterClick = (name: string, category: string = 'Footer') => {
    try {
      track('Footer_Click', { item: name, category });
    } catch {
      // ignore
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      try {
        (window as any).gtag('event', 'footer_click', {
          event_category: category,
          event_label: name
        });
      } catch {
        // ignore
      }
    }
  };

  const handleSponsorClick = (platform: string) => {
    try {
      track('Sponsor_Platform_Click', { platform, source: 'footer' });
    } catch {
      // ignore
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      try {
        (window as any).gtag('event', 'sponsor_platform_click', {
          event_category: 'Sponsorship',
          event_label: `${platform}_footer`,
          platform
        });
      } catch {
        // ignore
      }
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <img src="/app-logo.png" alt="Storage Unleashed" className="footer-logo-img" />
              <span>Storage Unleashed</span>
            </div>
            <p className="footer-tagline">
              Fast, visual, and privacy-first storage exploration for macOS & Windows.
            </p>
            <div className="footer-socials">
              <a
                href="https://github.com/rajnishcoder/StorageUnleashed"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="GitHub Repository"
                title="GitHub (rajnishcoder/StorageUnleashed)"
                onClick={() => trackFooterClick('github_repo')}
              >
                <GithubIcon size={16} />
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-links-col">
              <div className="footer-col-title">Download</div>
              <a
                href="https://github.com/rajnishcoder/StorageUnleashed/releases/download/v1.1.0/StorageUnleashed-1.1.0-arm64.dmg"
                className="footer-link"
                onClick={() => trackFooterClick('dmg_arm64', 'Downloads')}
              >
                macOS (Apple Silicon .dmg)
              </a>
              <a
                href="https://github.com/rajnishcoder/StorageUnleashed/releases/download/v1.1.0/StorageUnleashed-1.1.0.dmg"
                className="footer-link"
                onClick={() => trackFooterClick('dmg_intel', 'Downloads')}
              >
                macOS (Intel .dmg)
              </a>
              <a
                href="https://github.com/rajnishcoder/StorageUnleashed/releases/download/v1.1.0/StorageUnleashed-Setup-1.1.0.exe"
                className="footer-link"
                onClick={() => trackFooterClick('win_installer_exe', 'Downloads')}
              >
                Windows (.exe Installer)
              </a>
              <a
                href="https://github.com/rajnishcoder/StorageUnleashed/releases/download/v1.1.0/StorageUnleashed-1.1.0-portable.exe"
                className="footer-link"
                onClick={() => trackFooterClick('win_portable_exe', 'Downloads')}
              >
                Windows (Portable .exe)
              </a>
              <a
                href="https://github.com/rajnishcoder/StorageUnleashed/releases/latest"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
                onClick={() => trackFooterClick('github_latest_release', 'Downloads')}
              >
                All GitHub Releases
              </a>
            </div>

            <div className="footer-links-col">
              <div className="footer-col-title">Product</div>
              <a href="#features" className="footer-link" onClick={() => trackFooterClick('features')}>Features</a>
              <a href="#visualizer" className="footer-link" onClick={() => trackFooterClick('treemap_view')}>Treemap View</a>
              <a href="#visualizer" className="footer-link" onClick={() => trackFooterClick('sunburst_view')}>Sunburst View</a>
              <a href="#feedback" className="footer-link" onClick={() => trackFooterClick('feedback')}>Feedback & Bugs</a>
              <a href="#faq" className="footer-link" onClick={() => trackFooterClick('faq')}>FAQ</a>
            </div>

            <div className="footer-links-col">
              <div className="footer-col-title">Security & Community</div>
              <button
                type="button"
                className="footer-link privacy-footer-btn"
                onClick={() => {
                  trackFooterClick('privacy_policy');
                  onOpenPrivacy?.();
                }}
                style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', font: 'inherit', color: 'inherit' }}
              >
                Privacy Policy & Safety
              </button>
              <a
                href="https://github.com/rajnishcoder/StorageUnleashed/blob/main/LICENSE"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
                onClick={() => trackFooterClick('mit_license')}
              >
                MIT License
              </a>
              <a
                href="https://buymeacoffee.com/rajnishcoder"
                target="_blank"
                rel="noreferrer"
                className="footer-link supporter-link"
                onClick={() => handleSponsorClick('buymeacoffee')}
              >
                <Coffee size={12} color="#38bdf8" />
                <span>Buy Me a Coffee</span>
              </a>
              <a
                href="https://github.com/sponsors/rajnishcoder"
                target="_blank"
                rel="noreferrer"
                className="footer-link supporter-link"
                onClick={() => handleSponsorClick('github_sponsors')}
              >
                <Heart size={12} color="#f43f5e" />
                <span>Sponsor on GitHub</span>
              </a>
              <a
                href="https://github.com/rajnishcoder/StorageUnleashed/releases"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
                onClick={() => trackFooterClick('releases_page')}
              >
                GitHub Releases
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Storage Unleashed. 100% Free & Open Desktop Software.
          </div>
          <div className="footer-privacy-note">
            <button
              type="button"
              className="footer-privacy-link-btn"
              onClick={() => {
                trackFooterClick('privacy_guarantee_badge');
                onOpenPrivacy?.();
              }}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', textDecoration: 'underline', font: 'inherit' }}
            >
              Privacy Guarantee: 100% Local, Zero network tracking or telemetry.
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
