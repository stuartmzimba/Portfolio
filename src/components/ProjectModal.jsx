import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && project) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const archSteps = project.architecture || ['Input Layer', 'Core Logic', 'Data Store', 'Output UI'];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <i className="bx bx-x" />
        </button>

        <div className="modal-header">
          <div className="project-icon">
            <i className={`bx ${project.icon}`} />
          </div>
          <div>
            <span className="lang-badge">
              <span className="lang-dot" /> {project.language}
            </span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
        </div>

        <div className="modal-body">
          <p>{project.description}</p>

          <h4 className="modal-section-title">System Architecture &amp; Pipeline</h4>
          <div className="arch-flow">
            {archSteps.map((step, i) => (
              <React.Fragment key={step}>
                <span className="arch-step">{step}</span>
                {i < archSteps.length - 1 && (
                  <i className="bx bx-right-arrow-alt arch-arrow" />
                )}
              </React.Fragment>
            ))}
          </div>

          <h4 className="modal-section-title">Key Capabilities</h4>
          <ul className="project-highlights">
            {project.highlights.map((h, i) => (
              <li key={i}>
                <i className="bx bx-check-circle" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <h4 className="modal-section-title">Technologies Used</h4>
          <div className="tech-stack">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>

          <div className="card-footer" style={{ marginTop: '25px' }}>
            <div className="repo-meta">
              <span>
                <i className="bx bxl-git" /> {project.repoName}
              </span>
              <span>
                <i className="bx bx-calendar" /> Updated {project.updated}
              </span>
              <span>
                <i className="bx bx-shield-quarter" /> {project.license || 'Public Repo'}
              </span>
            </div>

            <div className="card-actions">
              {project.liveUrl && project.liveUrl.startsWith('http') && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-card btn-outline"
                  style={{ borderColor: 'rgba(6, 182, 212, 0.5)', color: '#67e8f9' }}
                >
                  <i className="bx bx-globe" /> Launch Live App
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-card btn-primary"
              >
                <i className="bx bxl-github" /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
