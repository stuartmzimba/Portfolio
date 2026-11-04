import React, { useState } from 'react';

export default function Header({ activePage, setActivePage, onOpenCmd, onOpenCv }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'background', label: 'Background' },
    { id: 'contacts', label: 'Contacts' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => handleNavClick('home')}>
        <div className="logo-mark">SM</div>
        Stuart Mzimba <span>dev</span>
      </div>

      <nav className={`navbar ${menuOpen ? 'open' : ''}`} id="navbar">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-link ${activePage === item.id ? 'active' : ''}`}
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className="cmd-trigger-btn"
          onClick={onOpenCmd}
          title="Open Command Palette (Ctrl+K)"
        >
          <i className="bx bx-search" />
          <span>Command</span>
          <span className="cmd-kbd">Ctrl K</span>
        </button>

        <button className="cv-header-btn" onClick={onOpenCv}>
          <i className="bx bx-file" /> CV / Resume
        </button>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`} />
        </button>
      </div>
    </header>
  );
}
