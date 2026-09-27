import React, { useState } from 'react';
import { Apple, ShieldCheck, Zap, Lock, ChevronDown, Check, Cpu, Terminal, Copy } from 'lucide-react';
import { track } from '@vercel/analytics';
import './Hero.css';

export const Hero: React.FC = () => {
  const [showMacOptions, setShowMacOptions] = useState(false);
  const [brewCopied, setBrewCopied] = useState(false);
  const [dmgCopied, setDmgCopied] = useState(false);

  const handleTrackDownload = (arch: string) => {
    try {
      track('Download_DMG_Click', { architecture: arch });
    } catch {
      // ignore
    }
  };

  const handleCopyBrew = () => {
    navigator.clipboard.writeText('brew install rajnishcoder/tap/storageunleashed');
    setBrewCopied(true);
    setTimeout(() => setBrewCopied(false), 2000);
  };

  const handleCopyDmgCommand = () => {
    navigator.clipboard.writeText('xattr -cr /Applications/StorageUnleash.app');
    setDmgCopied(true);
    setTimeout(() => setDmgCopied(false), 2000);
  };

  return (
    <section className="hero-section" id="download">
      <div className="container hero-container">
        {/* Top Badge */}
        <div className="hero-badge-wrap">
          <div className="badge-pill">
            <Zap size={14} />
            <span>100% Free • Private • macOS Native</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title">
          Visualize your disk.<br />
          <span className="gradient-text-cyan">Reclaim your space.</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          A blazing-fast visual desktop storage analyzer crafted specifically for <strong>macOS</strong>.
          Explore what is hogging your drive with interactive treemaps, sunburst views, and 1-click developer cleanup.
        </p>

        {/* Download Buttons Bar */}
        <div className="hero-download-grid">
          {/* macOS Primary Download Card */}
          <div className="download-action-card">
            <a
              href="https://github.com/rajnishcoder/StorageUnleashed/releases/download/v1.1.0/StorageUnleash-1.1.0-arm64.dmg"
              className="btn-primary btn-hero-download"
              onClick={() => handleTrackDownload('primary_arm64')}
            >
              <Apple size={22} className="btn-apple-icon" />
              <div className="btn-download-text">
                <span className="btn-main-label">Download for Mac (.dmg)</span>
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
                <ChevronDown size={13} className={showMacOptions ? 'rotate' : ''} />
              </button>

              {showMacOptions && (
                <div className="arch-dropdown">
                  <a
                    href="https://github.com/rajnishcoder/StorageUnleashed/releases/download/v1.1.0/StorageUnleash-1.1.0-arm64.dmg"
                    className="arch-item"
                    onClick={() => handleTrackDownload('arm64')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Cpu size={14} color="#38bdf8" />
                      <span>Apple Silicon (M1 / M2 / M3 / M4)</span>
                    </div>
                    <span className="arch-ext">arm64 .dmg</span>
                  </a>
                  <a
                    href="https://github.com/rajnishcoder/StorageUnleashed/releases/download/v1.1.0/StorageUnleash-1.1.0.dmg"
                    className="arch-item"
                    onClick={() => handleTrackDownload('x64_intel')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Apple size={14} color="#94a3b8" />
                      <span>Intel Mac</span>
                    </div>
                    <span className="arch-ext">x64 .dmg</span>
                  </a>
                  <a
                    href="https://github.com/rajnishcoder/StorageUnleashed/releases/latest"
                    className="arch-item"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => handleTrackDownload('all_releases_github')}
                  >
                    <span>All GitHub Releases</span>
                    <span className="arch-ext">v1.1.0</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Homebrew Install Card */}
          <div className="download-brew-card">
            <button
              type="button"
              className="btn-brew-copy"
              onClick={handleCopyBrew}
              title="Click to copy Homebrew command"
            >
              <div className="brew-left">
                <Terminal size={18} color="#f59e0b" className="brew-terminal-icon" />
                <div className="brew-text">
                  <span className="brew-cmd-text">brew install rajnishcoder/tap/storageunleashed</span>
                  <span className="brew-sub-text">{brewCopied ? '✓ Copied to clipboard!' : 'Install with Homebrew'}</span>
                </div>
              </div>
              <div className="brew-copy-icon">
                {brewCopied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
              </div>
            </button>
            <div className="brew-sub-info">
              <span>Auto-updates & clean management</span>
            </div>
          </div>
        </div>

        {/* macOS DMG First Launch Command Notice */}
        <div className="hero-install-hint">
          <div className="hint-header">
            <span className="hint-badge">Important DMG Note</span>
            <span>If you download the <strong>.dmg</strong> file, run this command in Terminal before opening:</span>
          </div>
          <div className="hint-command-row">
            <code>xattr -cr /Applications/StorageUnleash.app</code>
            <button
              type="button"
              className="btn-copy-cmd"
              onClick={handleCopyDmgCommand}
              title="Click to copy command"
            >
              {dmgCopied ? <Check size={13} color="#10b981" /> : <Copy size={13} />}
              <span>{dmgCopied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <span className="hint-subtext">This clears Gatekeeper quarantine for the DMG app. (Not required if installed via Homebrew)</span>
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
          <div className="trust-divider">•</div>
          <div className="trust-item">
            <Apple size={15} color="#cbd5e1" />
            <span>Universal Mac Support</span>
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
            <div className="preview-window-title">StorageUnleash — Modern Visual Storage Analyzer for Mac</div>
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

