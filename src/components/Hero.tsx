import React, { useState } from 'react';
import { Apple, ShieldCheck, Zap, Lock, ChevronDown, Check, Cpu, Terminal, Copy, MonitorDown, Sparkles } from 'lucide-react';
import { track } from '@vercel/analytics';
import './Hero.css';

const WindowsIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.802" />
  </svg>
);

export const Hero: React.FC = () => {
  const [showMacOptions, setShowMacOptions] = useState(false);
  const [showWinOptions, setShowWinOptions] = useState(false);
  const [brewCopied, setBrewCopied] = useState(false);
  const [dmgCopied, setDmgCopied] = useState(false);

  const handleTrackDownload = (platform: string, variant: string) => {
    try {
      track('Download_Click', { platform, variant });
    } catch {
      // ignore
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      try {
        (window as any).gtag('event', 'download_click', {
          event_category: 'Downloads',
          event_label: `${platform}_${variant}`,
          platform,
          variant
        });
      } catch {
        // ignore
      }
    }
  };

  const handleCopyBrew = () => {
    navigator.clipboard.writeText('brew install rajnishcoder/tap/storageunleashed');
    setBrewCopied(true);
    setTimeout(() => setBrewCopied(false), 2000);

    try {
      track('Brew_Command_Copied');
    } catch {
      // ignore
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      try {
        (window as any).gtag('event', 'brew_install_copy', {
          event_category: 'Downloads',
          event_label: 'homebrew'
        });
      } catch {
        // ignore
      }
    }
  };

  const handleCopyDmgCommand = () => {
    navigator.clipboard.writeText('xattr -cr /Applications/StorageUnleashed.app');
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
            <span>100% Free • Private • Fast Visual Disk Analyzer</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title">
          Visualize your disk.<br />
          <span className="gradient-text-cyan">Reclaim your space.</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          A blazing-fast visual desktop storage analyzer for macOS and Windows. Explore what is consuming your drive with interactive treemaps, sunburst views, and 1-click developer cleanup.
        </p>

        {/* Download Buttons Bar */}
        <div className="hero-download-grid">
          {/* macOS Primary Download Card */}
          <div className="download-action-card">
            <a
              href="https://github.com/rajnishcoder/StorageUnleashed/releases/download/v1.1.0/StorageUnleashed-1.1.0-arm64.dmg"
              className="btn-primary btn-hero-download btn-hero-mac"
              onClick={() => handleTrackDownload('mac', 'arm64_dmg')}
            >
              <Apple size={22} className="btn-os-icon" />
              <div className="btn-download-text">
                <span className="btn-main-label">Download for Mac (.dmg)</span>
                <span className="btn-sub-label">macOS 12+ • Apple Silicon & Intel</span>
              </div>
            </a>

            <div className="dropdown-options-wrap">
              <button
                type="button"
                className="btn-arch-toggle"
                onClick={() => {
                  setShowMacOptions(!showMacOptions);
                  setShowWinOptions(false);
                }}
              >
                <span>Select Mac Architecture</span>
                <ChevronDown size={13} className={showMacOptions ? 'rotate' : ''} />
              </button>

              {showMacOptions && (
                <div className="arch-dropdown">
                  <a
                    href="https://github.com/rajnishcoder/StorageUnleashed/releases/download/v1.1.0/StorageUnleashed-1.1.0-arm64.dmg"
                    className="arch-item"
                    onClick={() => handleTrackDownload('mac', 'arm64_apple_silicon')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Cpu size={14} color="#38bdf8" />
                      <span>Apple Silicon (M1 / M2 / M3 / M4)</span>
                    </div>
                    <span className="arch-ext">arm64.dmg</span>
                  </a>
                  <a
                    href="https://github.com/rajnishcoder/StorageUnleashed/releases/download/v1.1.0/StorageUnleashed-1.1.0.dmg"
                    className="arch-item"
                    onClick={() => handleTrackDownload('mac', 'x64_intel')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Apple size={14} color="#94a3b8" />
                      <span>Intel Mac</span>
                    </div>
                    <span className="arch-ext">x64.dmg</span>
                  </a>
                  <a
                    href="https://github.com/rajnishcoder/StorageUnleashed/releases/latest"
                    className="arch-item"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => handleTrackDownload('mac', 'all_releases_github')}
                  >
                    <span>All GitHub Releases</span>
                    <span className="arch-ext">v1.1.0</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Windows Download Card */}
          <div className="download-action-card">
            <a
              href="https://github.com/rajnishcoder/StorageUnleashed/releases/download/v1.1.0/StorageUnleashed-Setup-1.1.0.exe"
              className="btn-primary btn-hero-download btn-hero-win"
              onClick={() => handleTrackDownload('windows', 'nsis_setup_exe')}
            >
              <WindowsIcon size={20} className="btn-os-icon win-icon-color" />
              <div className="btn-download-text">
                <span className="btn-main-label">Download for Windows (.exe)</span>
                <span className="btn-sub-label">Windows 10 & 11 • 64-bit Installer</span>
              </div>
            </a>

            <div className="dropdown-options-wrap">
              <button
                type="button"
                className="btn-arch-toggle"
                onClick={() => {
                  setShowWinOptions(!showWinOptions);
                  setShowMacOptions(false);
                }}
              >
                <span>Select Windows Edition</span>
                <ChevronDown size={13} className={showWinOptions ? 'rotate' : ''} />
              </button>

              {showWinOptions && (
                <div className="arch-dropdown">
                  <a
                    href="https://github.com/rajnishcoder/StorageUnleashed/releases/download/v1.1.0/StorageUnleashed-Setup-1.1.0.exe"
                    className="arch-item"
                    onClick={() => handleTrackDownload('windows', 'installer_exe')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MonitorDown size={14} color="#60a5fa" />
                      <span>Windows Installer (NSIS Setup)</span>
                    </div>
                    <span className="arch-ext">setup.exe</span>
                  </a>
                  <a
                    href="https://github.com/rajnishcoder/StorageUnleashed/releases/download/v1.1.0/StorageUnleashed-1.1.0-portable.exe"
                    className="arch-item"
                    onClick={() => handleTrackDownload('windows', 'portable_exe')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Sparkles size={14} color="#38bdf8" />
                      <span>Windows Portable (No Install)</span>
                    </div>
                    <span className="arch-ext">portable.exe</span>
                  </a>
                  <a
                    href="https://github.com/rajnishcoder/StorageUnleashed/releases/latest"
                    className="arch-item"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => handleTrackDownload('windows', 'all_releases_github')}
                  >
                    <span>All GitHub Releases</span>
                    <span className="arch-ext">v1.1.0</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Homebrew Card Row */}
        <div className="hero-brew-row">
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
                  <span className="brew-sub-text">{brewCopied ? '✓ Copied to clipboard!' : 'macOS Homebrew Quick Install'}</span>
                </div>
              </div>
              <div className="brew-copy-icon">
                {brewCopied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
              </div>
            </button>
            <div className="brew-sub-info">
              <span>Auto-updates & clean management for Mac</span>
            </div>
          </div>
        </div>

        {/* macOS DMG First Launch Command Notice */}
        <div className="hero-install-hint">
          <div className="hint-header">
            <span className="hint-badge">macOS DMG Tip</span>
            <span>If downloading the <strong>.dmg</strong> directly on Mac, run this command in Terminal before opening:</span>
          </div>
          <div className="hint-command-row">
            <code>xattr -cr /Applications/StorageUnleashed.app</code>
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
          <span className="hint-subtext">This clears macOS Gatekeeper quarantine. (Windows .exe and Homebrew installations don't require this)</span>
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
            <span>Open Source & Free</span>
          </div>
          <div className="trust-divider">•</div>
          <div className="trust-item">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Apple size={14} color="#cbd5e1" />
              <span style={{ opacity: 0.5 }}>+</span>
              <WindowsIcon size={12} className="win-trust-icon" />
            </div>
            <span>macOS & Windows Ready (Linux Soon)</span>
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
            <div className="preview-window-title">Storage Unleashed — Modern Visual Storage Analyzer for Mac & Windows</div>
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

