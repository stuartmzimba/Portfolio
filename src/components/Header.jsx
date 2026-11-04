import React, { useState, useEffect } from 'react';

export default function Header({ activePage, setActivePage, onOpenCmd, onOpenCv }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: 'bx-home-alt' },
    { id: 'projects', label: 'Projects', icon: 'bx-code-alt' },
    { id: 'background', label: 'Background', icon: 'bx-user' },
    { id: 'contacts', label: 'Contacts', icon: 'bx-envelope' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close mobile drawer on resize to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo" onClick={() => handleNavClick('home')}>
          <div className="logo-mark">SM</div>
          <span className="logo-name">Stuart Mzimba</span>
          <span className="logo-badge">dev</span>
        </div>

        <nav className={`navbar ${menuOpen ? 'open' : ''}`} id="navbar">
          <div className="mobile-nav-header">
            <span className="mobile-nav-title">Menu Navigation</span>
            <span className="mobile-nav-hint">Quick Jump</span>
          </div>

          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <i className={`bx ${item.icon} nav-item-icon`} />
              <span>{item.label}</span>
              {activePage === item.id && <span className="nav-active-pill">Active</span>}
            </button>
          ))}

          <div className="mobile-nav-footer">
            <button
              className="mobile-cmd-btn"
              onClick={() => {
                setMenuOpen(false);
                onOpenCmd();
              }}
            >
              <i className="bx bx-search" /> Quick Command (Ctrl+K)
            </button>
            <button
              className="mobile-cv-btn"
              onClick={() => {
                setMenuOpen(false);
                onOpenCv();
              }}
            >
              <i className="bx bx-file" /> View CV / Resume
            </button>
          </div>
        </nav>

        <div className="header-actions">
          <button
            className="cmd-trigger-btn"
            onClick={onOpenCmd}
            title="Open Command Palette (Ctrl+K)"
            aria-label="Search and Command Palette"
          >
            <i className="bx bx-search" />
            <span className="cmd-label">Command</span>
            <span className="cmd-kbd">Ctrl K</span>
          </button>

          <button
            className="cv-header-btn"
            onClick={onOpenCv}
            title="View CV / Resume"
            aria-label="View CV / Resume"
          >
            <i className="bx bx-file" />
            <span className="cv-label-full">CV / Resume</span>
            <span className="cv-label-short">CV</span>
          </button>

          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`} />
          </button>
        </div>
      </header>

      {/* Backdrop overlay for mobile drawer */}
      {menuOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
