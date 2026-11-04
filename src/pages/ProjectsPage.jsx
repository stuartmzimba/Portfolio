import React, { useState } from 'react';
import { personalInfo, curatedProjects } from '../data/portfolioData';

export default function ProjectsPage({ onInspectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'All Projects', icon: 'bx-grid-alt' },
    { id: 'ai', label: 'AI & Data', icon: 'bx-brain' },
    { id: 'java', label: 'Java & OOP', icon: 'bxl-java' },
    { id: 'python', label: 'Python', icon: 'bxl-python' },
    { id: 'web', label: 'Web & UI', icon: 'bx-code-block' }
  ];

  const filteredProjects = curatedProjects.filter((project) => {
    const matchesFilter = activeFilter === 'all' || project.category.includes(activeFilter);
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      project.title.toLowerCase().includes(q) ||
      project.repoName.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.tech.some((t) => t.toLowerCase().includes(q));

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container">
      {/* PAGE HERO */}
      <div className="projects-hero">
        <div className="terminal-badge">
          <span className="pulse-dot" />
          <span>LIVE SYNC: github.com/{personalInfo.githubUsername}</span>
        </div>
        <h1>Engineering &amp; Projects</h1>
        <p>
          Explore my software engineering, machine learning, and full-stack repositories synced directly with my GitHub profile.
        </p>
      </div>

      {/* GITHUB PROFILE BANNER */}
      <div className="github-banner">
        <div className="gh-profile-info">
          <img
            src="https://avatars.githubusercontent.com/u/263473780?v=4"
            alt="Stuart Mzimba GitHub Avatar"
            className="gh-avatar"
            onError={(e) => {
              e.currentTarget.src = personalInfo.avatarImg;
            }}
          />
          <div className="gh-details">
            <h3>
              <i className="bx bxl-github" /> Stuart Mzimba
            </h3>
            <p>@{personalInfo.githubUsername} &bull; University of Mpumalanga (BICT)</p>
          </div>
        </div>

        <div className="gh-stats">
          <div className="gh-stat-item">
            <span className="stat-num">{curatedProjects.length}</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="gh-stat-item">
            <span className="stat-num">5+</span>
            <span className="stat-label">Languages</span>
          </div>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gh-btn"
          >
            <i className="bx bxl-github" /> Follow on GitHub
          </a>
        </div>
      </div>

      {/* FILTER & SEARCH CONTROLS */}
      <div className="controls-bar">
        <div className="filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              className={`filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              <i className={`bx ${tab.icon}`} /> {tab.label}
            </button>
          ))}
        </div>

        <div className="search-box">
          <i className="bx bx-search" />
          <input
            type="text"
            placeholder="Search by name, tech, or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* PROJECTS GRID */}
      {filteredProjects.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '50px 20px',
            background: 'var(--bg-surface)',
            border: '1px dashed var(--border-subtle)',
            borderRadius: '18px',
            marginBottom: '40px'
          }}
        >
          <i className="bx bx-search-alt" style={{ fontSize: '44px', color: 'var(--accent-indigo)', marginBottom: '12px' }} />
          <h3>No matching projects found</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
            Try clearing your search query or selecting a different category tab.
          </p>
        </div>
      ) : (
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.repoName}
              className="project-card"
              style={{ animationDelay: `${idx * 0.06}s` }}
            >
              <div>
                <div className="card-top">
                  <div className="project-icon">
                    <i className={`bx ${project.icon}`} />
                  </div>
                  <span className="lang-badge">
                    <span className="lang-dot" /> {project.language}
                  </span>
                </div>

                <div className="project-preview-banner">
                  <div className="preview-window-bar">
                    <div className="win-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="win-title">{project.previewTitle || project.repoName}</span>
                  </div>
                  {project.previewLines.map((line, i) => (
                    <div
                      key={i}
                      className="preview-code-line"
                      dangerouslySetInnerHTML={{ __html: line }}
                    />
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <li key={i}>
                      <i className="bx bx-check-circle" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="tech-stack">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-footer">
                <div className="repo-meta">
                  <div className="repo-meta-left">
                    <span title="Last Updated">
                      <i className="bx bx-calendar" /> {project.updated}
                    </span>
                    <span title="Stars">
                      <i className="bx bx-star" /> {project.stars}
                    </span>
                  </div>
                  {project.liveUrl && project.liveUrl.startsWith('http') ? (
                    <span style={{ color: '#67e8f9', fontSize: '11.5px' }}>
                      <i className="bx bxs-circle" style={{ color: '#10b981', fontSize: '8px' }} />{' '}
                      Live Deployed
                    </span>
                  ) : (
                    <span>
                      <i className="bx bx-git-branch" /> {project.license || 'Public Repo'}
                    </span>
                  )}
                </div>

                <div className="card-actions">
                  <button
                    className="btn-card btn-outline"
                    onClick={() => onInspectProject(project)}
                  >
                    <i className="bx bx-info-circle" /> Details
                  </button>
                  {project.liveUrl && project.liveUrl.startsWith('http') && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-card btn-outline"
                      style={{ borderColor: 'rgba(6,182,212,0.45)', color: '#67e8f9' }}
                    >
                      <i className="bx bx-link-external" /> Live
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-card btn-primary"
                  >
                    <i className="bx bxl-github" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
