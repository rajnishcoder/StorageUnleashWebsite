import React from 'react';
import { PieChart, Heart } from 'lucide-react';
import './Footer.css';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <PieChart size={20} color="#38bdf8" />
              <span>Storage Unleashed</span>
            </div>
            <p className="footer-tagline">
              Fast, visual, and privacy-first storage exploration for macOS.
            </p>
            <div className="footer-socials">
              <a
                href="https://github.com/rajnishcoder/StorageUnleash"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="GitHub Repository"
                title="GitHub (rajnishcoder/StorageUnleash)"
              >
                <GithubIcon size={16} />
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-links-col">
              <div className="footer-col-title">Download</div>
              <a href="https://github.com/rajnishcoder/StorageUnleash/releases/download/v1.0.0/StorageUnleash-1.0.0-arm64.dmg" className="footer-link">macOS (Apple Silicon .dmg)</a>
              <a href="https://github.com/rajnishcoder/StorageUnleash/releases/download/v1.0.0/StorageUnleash-1.0.0.dmg" className="footer-link">macOS (Intel .dmg)</a>
              <a href="https://github.com/rajnishcoder/StorageUnleash/releases/latest" target="_blank" rel="noreferrer" className="footer-link">All GitHub Releases</a>
            </div>

            <div className="footer-links-col">
              <div className="footer-col-title">Product</div>
              <a href="#features" className="footer-link">Features</a>
              <a href="#visualizer" className="footer-link">Treemap View</a>
              <a href="#visualizer" className="footer-link">Sunburst View</a>
              <a href="#feedback" className="footer-link">Feedback & Bugs</a>
              <a href="#faq" className="footer-link">FAQ</a>
            </div>

            <div className="footer-links-col">
              <div className="footer-col-title">Community</div>
              <a href="https://github.com/sponsors/rajnishcoder" target="_blank" rel="noreferrer" className="footer-link supporter-link">
                <Heart size={12} color="#f43f5e" />
                <span>Sponsor on GitHub</span>
              </a>
              <a href="https://github.com/rajnishcoder/StorageUnleash/releases" target="_blank" rel="noreferrer" className="footer-link">GitHub Releases</a>
              <a href="https://github.com/rajnishcoder/StorageUnleash/issues" target="_blank" rel="noreferrer" className="footer-link">Report a Bug / Feedback</a>
              <a href="https://github.com/rajnishcoder/StorageUnleash/blob/main/LICENSE" target="_blank" rel="noreferrer" className="footer-link">MIT License</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Storage Unleashed. 100% Free & Open Desktop Software.
          </div>
          <div className="footer-privacy-note">
            Privacy Guarantee: Zero network tracking, cookies, or telemetry.
          </div>
        </div>
      </div>
    </footer>
  );
};
