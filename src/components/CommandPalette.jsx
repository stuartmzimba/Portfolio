import React, { useState, useEffect, useRef } from 'react';
import { personalInfo, curatedProjects } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose, onNavigate, onOpenCv, showToast }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const commands = [
    {
      group: 'Quick Actions',
      title: 'Preview / Download CV (Resume)',
      sub: 'Stuart_Mzimba_CV.pdf',
      icon: 'bx-file',
      badge: 'PDF',
      action: () => {
        onClose();
        onOpenCv();
      }
    },
    {
      group: 'Quick Actions',
      title: 'Download CV Directly',
      sub: 'Save official PDF to device',
      icon: 'bx-download',
      badge: 'Download',
      action: () => {
        onClose();
        const a = document.createElement('a');
        a.href = personalInfo.cvPdf;
        a.download = 'Stuart_Mzimba_CV.pdf';
        a.click();
        showToast('Downloading Stuart_Mzimba_CV.pdf...');
      }
    },
    {
      group: 'Quick Actions',
      title: 'Copy Personal Email',
      sub: personalInfo.emailPersonal,
      icon: 'bx-copy',
      badge: 'Copy',
      action: () => {
        onClose();
        navigator.clipboard.writeText(personalInfo.emailPersonal);
        showToast(`Copied ${personalInfo.emailPersonal}!`);
      }
    },
    {
      group: 'Quick Actions',
      title: 'Copy University Email',
      sub: personalInfo.emailUniversity,
      icon: 'bx-envelope',
      badge: 'Copy',
      action: () => {
        onClose();
        navigator.clipboard.writeText(personalInfo.emailUniversity);
        showToast(`Copied ${personalInfo.emailUniversity}!`);
      }
    },
    {
      group: 'Quick Actions',
      title: 'Copy Phone Number',
      sub: personalInfo.phone,
      icon: 'bx-phone',
      badge: 'Copy',
      action: () => {
        onClose();
        navigator.clipboard.writeText(personalInfo.phoneRaw);
        showToast(`Copied ${personalInfo.phone}!`);
      }
    },
    {
      group: 'Navigation',
      title: 'Go to Home',
      sub: 'Overview, hero & expertise',
      icon: 'bx-home-alt',
      badge: 'Page',
      action: () => {
        onClose();
        onNavigate('home');
      }
    },
    {
      group: 'Navigation',
      title: 'Go to Projects Showcase',
      sub: 'All GitHub & AI software repositories',
      icon: 'bx-layer',
      badge: 'Page',
      action: () => {
        onClose();
        onNavigate('projects');
      }
    },
    {
      group: 'Navigation',
      title: 'Go to Background & Education',
      sub: 'UMP BICT, IBM Certificates & Skills Matrix',
      icon: 'bx-graduation',
      badge: 'Page',
      action: () => {
        onClose();
        onNavigate('background');
      }
    },
    {
      group: 'Navigation',
      title: 'Go to Contact & Message Form',
      sub: 'Send a direct message or get in touch',
      icon: 'bx-paper-plane',
      badge: 'Page',
      action: () => {
        onClose();
        onNavigate('contacts');
      }
    },
    ...curatedProjects.map((proj) => ({
      group: 'Featured Projects',
      title: proj.title,
      sub: `${proj.language} • ${proj.repoName}`,
      icon: proj.icon,
      badge: proj.liveUrl ? 'Live App' : 'Project',
      action: () => {
        onClose();
        onNavigate('projects', proj.repoName);
      }
    })),
    {
      group: 'Social Profiles',
      title: 'Open GitHub Profile',
      sub: `github.com/${personalInfo.githubUsername}`,
      icon: 'bxl-github',
      badge: 'External',
      action: () => {
        onClose();
        window.open(personalInfo.githubUrl, '_blank', 'noopener,noreferrer');
      }
    },
    {
      group: 'Social Profiles',
      title: 'Open LinkedIn Profile',
      sub: 'Stuart Mzimba on LinkedIn',
      icon: 'bxl-linkedin',
      badge: 'External',
      action: () => {
        onClose();
        window.open(personalInfo.linkedinUrl, '_blank', 'noopener,noreferrer');
      }
    }
  ];

  const filtered = commands.filter((cmd) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.sub.toLowerCase().includes(q) ||
      cmd.group.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  let currentGroup = '';

  return (
    <div className="cmd-overlay" onClick={onClose}>
      <div className="cmd-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cmd-search-bar">
          <i className="bx bx-search" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search projects, skills, links..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <span className="cmd-kbd" onClick={onClose} style={{ cursor: 'pointer' }}>
            ESC
          </span>
        </div>

        <div className="cmd-list">
          {filtered.length === 0 ? (
            <div style={{ padding: '24px', textAlign: 'center', color: '#64748b' }}>
              No matching commands or projects found
            </div>
          ) : (
            filtered.map((cmd, idx) => {
              const showGroup = cmd.group !== currentGroup;
              if (showGroup) currentGroup = cmd.group;

              return (
                <React.Fragment key={`${cmd.group}-${cmd.title}-${idx}`}>
                  {showGroup && <div className="cmd-group-label">{cmd.group}</div>}
                  <div
                    className={`cmd-item ${idx === selectedIndex ? 'selected' : ''}`}
                    onClick={() => cmd.action()}
                    onMouseEnter={() => setSelectedIndex(idx)}
                  >
                    <div className="cmd-item-left">
                      <i className={`bx ${cmd.icon}`} />
                      <div>
                        <span className="cmd-item-title">{cmd.title}</span>
                        <span className="cmd-item-sub">{cmd.sub}</span>
                      </div>
                    </div>
                    <span className="cmd-item-badge">{cmd.badge}</span>
                  </div>
                </React.Fragment>
              );
            })
          )}
        </div>

        <div className="cmd-footer">
          <span>
            <strong style={{ color: '#94a3b8' }}>&uarr;&darr;</strong> to navigate &bull;{' '}
            <strong style={{ color: '#94a3b8' }}>Enter</strong> to select
          </span>
          <span>Stuart Mzimba Portfolio</span>
        </div>
      </div>
    </div>
  );
}
