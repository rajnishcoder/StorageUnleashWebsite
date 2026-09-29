import React, { useState } from 'react';
import { Disc, LayoutGrid, Layers, MousePointerClick, ZoomIn, X } from 'lucide-react';
import './InteractiveVisualizer.css';

interface ScreenshotTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  tagline: string;
  desc: string;
  imageSrc: string;
  highlights: string[];
}

const TABS: ScreenshotTab[] = [
  {
    id: 'sunburst',
    label: 'Sunburst Radial View',
    icon: Disc,
    title: 'Concentric Radial Explorer',
    tagline: 'Multi-layer hierarchical visualization with drill-down',
    desc: 'Explore your files as intuitive concentric rings. The center represents the current folder, while each outer layer fans out into subfolders and files sized proportionally to their disk footprint.',
    imageSrc: '/screenshots/sunburst-view.png',
    highlights: ['Multi-level ring drill down', 'Dual-column folder inspector', 'Smart Category filters on left', 'Disk storage usage gauge']
  },
  {
    id: 'treemap',
    label: 'Treemap Storage Map',
    icon: LayoutGrid,
    title: 'Dense Squarified Treemap',
    tagline: 'Visual space-filling map with category color coding',
    desc: 'Instantly spot massive space hogs. Every block size corresponds to exact byte volume, color-coded by media types (videos, dev caches, images, archives) for immediate clarity.',
    imageSrc: '/screenshots/treemap-view.png',
    highlights: ['Squarified treemap layout', 'Category-based file colors', 'Direct folder drill-down', 'Instant search & filter bar']
  },
  {
    id: 'cleanup',
    label: 'Batch Cleanup Queue',
    icon: Layers,
    title: 'Safe Cleanup Queue & Batch Trash',
    tagline: 'Review and safely reclaim gigabytes in one click',
    desc: 'Queue large unneeded caches, old downloads, and bulky folders into an interactive review list before moving them safely to macOS Trash.',
    imageSrc: '/screenshots/cleanup-queue.png',
    highlights: ['5.71 GB reclaimable in 1-click', 'Trash protection with undo', 'Itemized size breakdown', 'Zero permanent data loss']
  },
  {
    id: 'context',
    label: 'Item Inspector & Context Menu',
    icon: MousePointerClick,
    title: 'Instant Native Context Actions',
    tagline: 'Reveal in Finder, Trash, and inspect metadata',
    desc: 'Right-click any tile or folder to instantly reveal it in Finder, inspect file counts and directory depths, or add it to the cleanup queue.',
    imageSrc: '/screenshots/context-menu.png',
    highlights: ['Reveal in Finder', 'Detailed size & folder count stats', 'Fast right-click context menu', 'Instant selection pane']
  }
];

export const InteractiveVisualizer: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState('sunburst');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const currentTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  return (
    <section className="visualizer-section" id="visualizer">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Interactive Interface Tour</div>
          <h2 className="section-title">See Storage Unleashed in Action</h2>
          <p className="section-desc">
            A fast, dark-mode native experience designed for developers, creators, and power users on macOS.
          </p>
        </div>

        {/* Tab Switcher Pills */}
        <div className="gallery-tabs-wrap">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                className={`gallery-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTabId(tab.id)}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Screenshot Showcase Frame */}
        <div className="screenshot-showcase-card glass-card">
          {/* Window Header */}
          <div className="showcase-window-header">
            <div className="window-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="window-caption">{currentTab.title} • {currentTab.tagline}</div>
            <button
              type="button"
              className="btn-zoom-lightbox"
              onClick={() => setLightboxImg(currentTab.imageSrc)}
              title="View full resolution screenshot"
            >
              <ZoomIn size={14} />
              <span>Full Screen</span>
            </button>
          </div>

          {/* Screenshot Image Viewport */}
          <div
            className="showcase-img-viewport"
            onClick={() => setLightboxImg(currentTab.imageSrc)}
            title="Click to zoom screenshot"
          >
            <img
              src={currentTab.imageSrc}
              alt={`${currentTab.title} — Storage Unleashed Visual Disk Space Analyzer`}
              className="showcase-screenshot-img"
              key={currentTab.id}
            />
            <div className="zoom-overlay-hint">
              <ZoomIn size={20} />
              <span>Click to view full resolution</span>
            </div>
          </div>

          {/* Bottom Info Bar & Highlights */}
          <div className="showcase-bottom-info">
            <div className="info-text-group">
              <h3 className="info-title">{currentTab.title}</h3>
              <p className="info-desc">{currentTab.desc}</p>
            </div>

            <div className="highlights-pills-list">
              {currentTab.highlights.map((h, idx) => (
                <div key={idx} className="highlight-tag">
                  <span className="tag-dot" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fullscreen Lightbox Modal */}
        {lightboxImg && (
          <div className="lightbox-overlay" onClick={() => setLightboxImg(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setLightboxImg(null)}
                aria-label="Close full view"
              >
                <X size={20} />
              </button>
              <img
                src={lightboxImg}
                alt="Storage Unleashed Full Screenshot"
                className="lightbox-img"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
