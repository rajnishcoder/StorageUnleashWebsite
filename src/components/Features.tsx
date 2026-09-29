import React from 'react';
import {
  Zap,
  ShieldCheck,
  Package,
  Layers,
  Trash2,
  PieChart,
  HardDrive,
  Cpu
} from 'lucide-react';
import './Features.css';

const FEATURES = [
  {
    icon: Zap,
    title: 'Parallel Filesystem Crawler',
    desc: 'Traverses millions of files and nested directories in seconds using asynchronous parallel worker threads without freezing your computer.',
    color: '#38bdf8'
  },
  {
    icon: ShieldCheck,
    title: '100% Local & Zero Telemetry',
    desc: 'Your storage data never touches the cloud. No tracking, no user accounts, no analytics, and zero network calls.',
    color: '#10b981'
  },
  {
    icon: Package,
    title: 'Developer Cache Destroyer',
    desc: 'Easily detect and reclaim tens of gigabytes hidden inside node_modules, Xcode DerivedData, Docker overlays, and Python virtualenvs.',
    color: '#a855f7'
  },
  {
    icon: PieChart,
    title: 'Treemap & Sunburst Views',
    desc: 'Two intuitive visual models: squarified treemaps for area comparison and radial sunburst rings for deep hierarchy exploration.',
    color: '#f43f5e'
  },
  {
    icon: Layers,
    title: 'Smart Categories & Filters',
    desc: 'Instant one-click filtering for RAW photos, 4K videos, disk images, installers (.dmg, .exe, .iso), zip archives, and VM disks.',
    color: '#f59e0b'
  },
  {
    icon: Trash2,
    title: 'Safe Native Trash Integration',
    desc: 'Review items in an interactive cleanup queue before safely sending them to macOS Trash or Windows Recycle Bin with full undo support.',
    color: '#06b6d4'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Engineered for Performance</div>
          <h2 className="section-title">Everything You Need to Keep Drives Lean</h2>
          <p className="section-desc">
            Built from scratch to be the fastest, cleanest, and most transparent visual storage analyzer across modern desktop operating systems.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="feature-card glass-card">
                <div
                  className="feature-icon-wrapper"
                  style={{
                    background: `${feature.color}15`,
                    borderColor: `${feature.color}35`,
                    color: feature.color
                  }}
                >
                  <Icon size={22} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="performance-banner glass-card">
          <div className="perf-item">
            <Cpu size={24} color="#38bdf8" />
            <div className="perf-text">
              <span className="perf-num">500,000+</span>
              <span className="perf-lbl">Files Analyzed / sec</span>
            </div>
          </div>
          <div className="perf-divider" />
          <div className="perf-item">
            <HardDrive size={24} color="#10b981" />
            <div className="perf-text">
              <span className="perf-num">0 KB</span>
              <span className="perf-lbl">Network Telemetry Sent</span>
            </div>
          </div>
          <div className="perf-divider" />
          <div className="perf-item">
            <Zap size={24} color="#f59e0b" />
            <div className="perf-text">
              <span className="perf-num">&lt; 50 MB</span>
              <span className="perf-lbl">Idle Memory Footprint</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
