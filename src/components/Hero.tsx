import React, { useState } from 'react';
import { Apple, ShieldCheck, Zap, Lock, ChevronDown, Check } from 'lucide-react';
import './Hero.css';

// SVG Windows Icon
const WindowsIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.8" />
  </svg>
);

export const Hero: React.FC = () => {
  const [showMacOptions, setShowMacOptions] = useState(false);
  const [showWinOptions, setShowWinOptions] = useState(false);

  return (
    <section className="hero-section" id="download">
      <div className="container hero-container">
        {/* Top Badge */}
        <div className="hero-badge-wrap">
          <div className="badge-pill">
            <Zap size={14} />
            <span>100% Free • Private • Fast</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title">
          Visualize your disk.<br />
          <span className="gradient-text-cyan">Reclaim your space.</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          A blazing-fast visual desktop storage analyzer for <strong>macOS</strong> and <strong>Windows</strong>.
          Explore what is hogging your drive with treemaps, sunburst views, and 1-click developer cleanup.
        </p>

        {/* Download Buttons Bar */}
        <div className="hero-download-grid">
          {/* macOS Download Card */}
          <div className="download-action-card">
            <a
              href="https://github.com/rajnishcoder/StorageUnleash/releases/latest"
              className="btn-primary btn-hero-download"
            >
              <Apple size={22} />
              <div className="btn-download-text">
                <span className="btn-main-label">Download for Mac</span>
                <span className="btn-sub-label">macOS 12+ • Apple Silicon & Intel</span>
              </div>
            </a>

            <div className="dropdown-options-wrap">
              <button
                type="button"
                className="btn-arch-toggle"
                onClick={() => setShowMacOptions(!showMacOptions)}
              >
                <span>Select Architecture</span>
                <ChevronDown size={14} className={showMacOptions ? 'rotate' : ''} />
              </button>

              {showMacOptions && (
                <div className="arch-dropdown">
                  <a
                    href="https://github.com/rajnishcoder/StorageUnleash/releases/latest/download/StorageUnleashed-arm64.dmg"
                    className="arch-item"
                  >
                    <span>Apple Silicon (M1/M2/M3/M4)</span>
                    <span className="arch-ext">.dmg</span>
                  </a>
                  <a
                    href="https://github.com/rajnishcoder/StorageUnleash/releases/latest/download/StorageUnleashed-x64.dmg"
                    className="arch-item"
                  >
                    <span>Intel Mac</span>
                    <span className="arch-ext">.dmg</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Windows Download Card */}
          <div className="download-action-card">
            <a
              href="https://github.com/rajnishcoder/StorageUnleash/releases/latest"
              className="btn-secondary btn-hero-download"
            >
              <WindowsIcon size={20} />
              <div className="btn-download-text">
                <span className="btn-main-label">Download for Windows</span>
                <span className="btn-sub-label">Windows 10 / 11 (64-bit)</span>
              </div>
            </a>

            <div className="dropdown-options-wrap">
              <button
                type="button"
                className="btn-arch-toggle"
                onClick={() => setShowWinOptions(!showWinOptions)}
              >
                <span>Select Package</span>
                <ChevronDown size={14} className={showWinOptions ? 'rotate' : ''} />
              </button>

              {showWinOptions && (
                <div className="arch-dropdown">
                  <a
                    href="https://github.com/rajnishcoder/StorageUnleash/releases/latest/download/StorageUnleashed-Setup.exe"
                    className="arch-item"
                  >
                    <span>Installer (.exe)</span>
                    <span className="arch-ext">Setup</span>
                  </a>
                  <a
                    href="https://github.com/rajnishcoder/StorageUnleash/releases/latest/download/StorageUnleashed-win.zip"
                    className="arch-item"
                  >
                    <span>Portable (.zip)</span>
                    <span className="arch-ext">Standalone</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="hero-trust-bar">
          <div className="trust-item">
            <Lock size={15} color="#38bdf8" />
            <span>100% Local & Private</span>
          </div>
          <div className="trust-divider">•</div>
          <div className="trust-item">
            <ShieldCheck size={15} color="#10b981" />
            <span>Zero Telemetry / No Ads</span>
          </div>
          <div className="trust-divider">•</div>
          <div className="trust-item">
            <Check size={15} color="#a855f7" />
            <span>No Account Required</span>
          </div>
        </div>

        {/* Hero Screenshot Frame Preview */}
        <div className="hero-preview-frame glass-card">
          <div className="preview-frame-top">
            <div className="preview-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="preview-window-title">StorageUnleash — Modern Visual Storage Analyzer</div>
            <span className="preview-status-pill">Live Desktop App</span>
          </div>
          <div className="preview-img-wrapper">
            <img
              src="/screenshots/sunburst-view.png"
              alt="Storage Unleashed Sunburst Interface Preview"
              className="hero-main-img"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
