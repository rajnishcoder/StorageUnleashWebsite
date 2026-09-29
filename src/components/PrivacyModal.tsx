import React, { useEffect } from 'react';
import { ShieldCheck, Lock, EyeOff, Server, HardDrive, CheckCircle2, X } from 'lucide-react';
import './PrivacyModal.css';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="privacy-modal-overlay" onClick={onClose}>
      <div className="privacy-modal-dialog glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="privacy-modal-header">
          <div className="privacy-modal-title-group">
            <div className="privacy-header-icon-wrap">
              <ShieldCheck size={24} className="privacy-header-icon" />
            </div>
            <div>
              <h2 className="privacy-modal-title">Privacy Policy & Data Safety</h2>
              <p className="privacy-modal-subtitle">Last updated: September 2026 • 100% Local & Private</p>
            </div>
          </div>
          <button type="button" className="privacy-modal-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="privacy-modal-body">
          {/* Key Guarantees Banner */}
          <div className="privacy-guarantees-grid">
            <div className="guarantee-card">
              <Lock size={20} className="guarantee-icon lock" />
              <div className="guarantee-title">100% On-Device</div>
              <div className="guarantee-desc">All file scans, size calculations, and charts run completely locally in memory.</div>
            </div>
            <div className="guarantee-card">
              <EyeOff size={20} className="guarantee-icon eye" />
              <div className="guarantee-title">Zero Telemetry</div>
              <div className="guarantee-desc">No tracking SDKs, no user analytics, no identifiers, and no background reporting.</div>
            </div>
            <div className="guarantee-card">
              <Server size={20} className="guarantee-icon server" />
              <div className="guarantee-title">Zero Cloud Uploads</div>
              <div className="guarantee-desc">Your file names, paths, and disk contents never touch external servers or the cloud.</div>
            </div>
            <div className="guarantee-card">
              <HardDrive size={20} className="guarantee-icon drive" />
              <div className="guarantee-title">Native Trash & Bin Safety</div>
              <div className="guarantee-desc">Cleanups safely move files to Trash or Recycle Bin, giving you complete recovery control.</div>
            </div>
          </div>

          <div className="privacy-section">
            <h3>1. Complete Local Execution (Offline-First)</h3>
            <p>
              Storage Unleashed is architected as an offline-first desktop application. When you scan your Mac or Windows PC, the software reads directory metadata (file size, type, and modified dates) exclusively on your local machine using standard OS filesystem APIs. At no point are your filenames, folder structures, or disk contents transmitted across the internet.
            </p>
          </div>

          <div className="privacy-section">
            <h3>2. OS Security & Permissions (Full Disk Access / UAC)</h3>
            <p>
              To inspect system caches, developer build artifacts, and container folders, macOS may require granting <strong>Full Disk Access</strong>, and Windows may request Administrator elevation for protected root drive paths. Storage Unleashed requests these permissions strictly for read operations to calculate space allocation. Storage Unleashed never reads, modifies, or accesses sensitive personal data (such as Keychain, browser passwords, or credentials).
            </p>
          </div>

          <div className="privacy-section">
            <h3>3. Safe File Cleanup & Deletion</h3>
            <p>
              Any file deletion action in Storage Unleashed is strictly manual and requires explicit confirmation. Storage Unleashed moves selected items to the native <strong>Trash</strong> on macOS (<code>~/.Trash</code>) or <strong>Recycle Bin</strong> on Windows using official system APIs. Files are never permanently deleted behind your back, allowing you to restore any file at any time.
            </p>
          </div>

          <div className="privacy-section">
            <h3>4. Open Source Transparency</h3>
            <p>
              We believe privacy requires full verification. Storage Unleashed is 100% open source under the MIT License. Anyone can inspect, audit, and build the source code directly from our public GitHub repository at{' '}
              <a href="https://github.com/rajnishcoder/StorageUnleashed" target="_blank" rel="noreferrer" className="privacy-inline-link">
                github.com/rajnishcoder/StorageUnleashed
              </a>.
            </p>
          </div>

          <div className="privacy-section">
            <h3>5. Website Analytics & External Services</h3>
            <p>
              Our landing page (<code>storageunleashed.com</code>) uses privacy-respecting Vercel Web Analytics solely to measure overall visitor counts without collecting personal information, IP addresses, or tracking cookies across the web. External supporter links (such as GitHub Sponsors and Buy Me a Coffee) operate independently under their respective privacy policies.
            </p>
          </div>

          <div className="privacy-section">
            <h3>6. Contact & Inquiries</h3>
            <p>
              If you have any questions or security concerns regarding Storage Unleashed, feel free to open an issue or contact the maintainer at{' '}
              <a href="https://github.com/rajnishcoder/StorageUnleashed/issues" target="_blank" rel="noreferrer" className="privacy-inline-link">
                GitHub Issues
              </a>.
            </p>
          </div>
        </div>

        <div className="privacy-modal-footer">
          <div className="privacy-badge">
            <CheckCircle2 size={16} color="#10b981" />
            <span>Verified 100% Private & Open Source</span>
          </div>
          <button type="button" className="btn-primary privacy-ok-btn" onClick={onClose}>
            Understood & Close
          </button>
        </div>
      </div>
    </div>
  );
};
