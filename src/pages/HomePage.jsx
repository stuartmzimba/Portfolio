import React, { useState, useEffect } from 'react';
import {
  personalInfo,
  typewriterRoles,
  technicalExpertise,
  curatedProjects
} from '../data/portfolioData';

export default function HomePage({ onNavigate, onOpenCv, onInspectProject }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = typewriterRoles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % typewriterRoles.length);
      timeout = setTimeout(() => {}, 300);
    } else {
      const delta = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const featuredProjects = curatedProjects.slice(0, 3);

  return (
    <div className="container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="home-content">
          <div className="status-pill">
            <span className="pulse-dot" />
            <span>{personalInfo.educationBadge}</span>
          </div>

          <h1>{personalInfo.subtitle}</h1>

          <div className="typing-wrapper">
            <span>{displayText}</span>
            <span className="cursor" />
          </div>

          <p>
            Hi, I'm <strong>{personalInfo.name}</strong> — a final-year BICT student at the University of Mpumalanga (Expected 2027). Proficient in <strong>Python, Java, JavaScript, Kotlin, and SQL</strong>, building clean web &amp; mobile applications and AI-powered systems.
          </p>

          <div className="hero-buttons">
            <button className="btn" onClick={() => onNavigate('projects')}>
              <i className="bx bx-layer" /> View Projects
            </button>
            <button className="btn btn-secondary" onClick={onOpenCv}>
              <i className="bx bx-file" /> View / Download CV
            </button>
            <button className="btn btn-secondary" onClick={() => onNavigate('contacts')}>
              <i className="bx bx-envelope" /> Get in Touch
            </button>
          </div>

          <div className="quick-socials">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub (@stuartmzimba)"
            >
              <i className="bx bxl-github" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn (Stuart Mzimba)"
            >
              <i className="bx bxl-linkedin" />
            </a>
            <a href={`mailto:${personalInfo.emailPersonal}`} title="Email Stuart">
              <i className="bx bx-envelope" />
            </a>
            <a href={`tel:${personalInfo.phoneRaw}`} title="Call Stuart">
              <i className="bx bx-phone" />
            </a>
          </div>
        </div>

        <div className="home-img-wrapper">
          <div className="home-img">
            <img src={personalInfo.avatarImg} alt="Stuart Mzimba - Developer Portrait" />
          </div>
        </div>
      </section>

      {/* TECHNICAL EXPERTISE */}
      <section style={{ marginBottom: '70px' }}>
        <div className="section-header">
          <div>
            <h2 className="section-title">
              <i className="bx bx-cube-alt" /> Technical Expertise
            </h2>
            <p className="section-subtitle">Core engineering capabilities across the stack</p>
          </div>
          <button className="view-all-link" onClick={() => onNavigate('background')}>
            Full Tech Stack <i className="bx bx-right-arrow-alt" />
          </button>
        </div>

        <div className="expertise-grid">
          {technicalExpertise.map((exp) => (
            <div key={exp.id} className="expertise-card">
              <div className="card-icon-box">
                <i className={`bx ${exp.icon}`} />
              </div>
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
              <div className="skill-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED GITHUB PROJECTS */}
      <section className="featured-projects">
        <div className="section-header">
          <div>
            <h2 className="section-title">
              <i className="bx bxl-github" /> Featured Projects
            </h2>
            <p className="section-subtitle">
              Synced directly with <strong>@{personalInfo.githubUsername}</strong> on GitHub
            </p>
          </div>
          <button className="view-all-link" onClick={() => onNavigate('projects')}>
            Explore All Projects <i className="bx bx-right-arrow-alt" />
          </button>
        </div>

        <div className="projects-preview-grid">
          {featuredProjects.map((proj) => (
            <div key={proj.repoName} className="preview-card">
              <div>
                <div className="preview-top">
                  <div className="preview-icon">
                    <i className={`bx ${proj.icon}`} />
                  </div>
                  <span className="preview-lang">{proj.language}</span>
                </div>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="skill-tags" style={{ marginBottom: '16px' }}>
                  {proj.tech.slice(0, 3).map((t) => (
                    <span key={t} className="skill-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="preview-footer">
                {proj.liveUrl ? (
                  <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer">
                    <i className="bx bx-globe" /> Live Demo
                  </a>
                ) : (
                  <button onClick={() => onInspectProject(proj)}>
                    <i className="bx bx-info-circle" /> Details
                  </button>
                )}
                <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-github" /> Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
