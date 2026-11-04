import React from 'react';
import {
  personalInfo,
  educationList,
  certificationsList,
  skillCategories
} from '../data/portfolioData';

export default function BackgroundPage({ onOpenCv, onNavigate, showToast }) {
  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = personalInfo.cvPdf;
    a.download = 'Stuart_Mzimba_CV.pdf';
    a.click();
    showToast('Downloading Stuart_Mzimba_CV.pdf...');
  };

  return (
    <div className="container">
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="page-badge">
          <i className="bx bx-certification" />
          <span>ACADEMIC &bull; PROFESSIONAL BACKGROUND</span>
        </div>
        <h1>Background &amp; Credentials</h1>
        <p>
          Final-year BICT candidate at the University of Mpumalanga with verified IBM credentials in Data Science and hands-on full-stack development experience.
        </p>

        <div className="cv-banner-actions">
          <button className="btn" onClick={onOpenCv}>
            <i className="bx bx-show" /> Preview CV in Modal
          </button>
          <button className="btn btn-secondary" onClick={handleDownload}>
            <i className="bx bx-download" /> Download Official PDF
          </button>
          <button className="btn btn-secondary" onClick={() => onNavigate('contacts')}>
            <i className="bx bx-envelope" /> Contact Stuart
          </button>
        </div>
      </div>

      {/* EXECUTIVE PROFILE */}
      <section className="section-block">
        <h2 className="section-heading">
          <i className="bx bx-user" /> Executive Profile
        </h2>
        <div className="card">
          <p>
            Final-year Bachelor of Information and Communication Technology student at the <strong>University of Mpumalanga</strong> (Expected 2027). Strong foundation in software development, web and mobile application development, database management, and problem-solving through academic and personal projects.
          </p>
          <p>
            Proficient in <strong>Python, Java, JavaScript, Kotlin, and SQL</strong>, with demonstrated ability to quickly learn modern frameworks and implement scalable software architectures. Passionate about software engineering, AI tooling, and creating secure, production-grade systems that solve real African and global challenges.
          </p>

          <div className="profile-meta-row">
            <div className="meta-chip">
              <i className="bx bx-map" /> {personalInfo.location}
            </div>
            <div className="meta-chip">
              <i className="bx bx-graduation" /> Final-Year BICT (UMP)
            </div>
            <div className="meta-chip">
              <i className="bx bx-code-alt" /> Full-Stack &amp; AI
            </div>
            <div className="meta-chip">
              <i className="bx bx-check-shield" /> Available for Roles
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section className="section-block">
        <h2 className="section-heading">
          <i className="bx bx-book-open" /> Education &amp; Certifications
        </h2>

        <div className="edu-grid">
          {educationList.map((edu, i) => (
            <div key={i} className="edu-card">
              <div className="edu-badge">
                <i className="bx bx-time" /> {edu.period} &bull; {edu.status}
              </div>
              <h3>{edu.qualification}</h3>
              <p>
                <strong>{edu.institution}</strong>
              </p>
              <p>{edu.description}</p>
            </div>
          ))}

          {certificationsList.map((cert, i) => (
            <div key={`cert-${i}`} className="edu-card">
              <div className="edu-badge" style={{ color: '#a5b4fc', borderColor: 'rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.1)' }}>
                <i className="bx bx-badge-check" /> {cert.badge}
              </div>
              <h3>{cert.title}</h3>
              <p>
                <strong>{cert.issuer}</strong>
              </p>
              <p>{cert.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL PROFICIENCY MATRIX */}
      <section className="section-block" id="skills">
        <h2 className="section-heading">
          <i className="bx bx-bar-chart-alt-2" /> Technical Proficiency Matrix
        </h2>

        <div className="skills-categories">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-group">
              <div className="group-title">
                <i className={`bx ${cat.icon}`} />
                <span>{cat.title}</span>
              </div>
              <div className="skill-bars">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LANGUAGES & REFERENCE */}
      <section className="section-block">
        <h2 className="section-heading">
          <i className="bx bx-globe" /> Languages &amp; Professional Reference
        </h2>
        <div className="edu-grid">
          <div className="card">
            <h3 style={{ fontSize: '18px', color: '#fff', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="bx bx-conversation" style={{ color: 'var(--accent-cyan)' }} /> Spoken Languages
            </h3>
            <p>
              Fluent in <strong>English</strong> (professional working proficiency), <strong>SiSwati</strong> (native), and <strong>isiZulu</strong> (native). Able to collaborate seamlessly across multicultural software teams and technical stakeholders.
            </p>
          </div>

          <div className="card">
            <h3 style={{ fontSize: '18px', color: '#fff', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="bx bx-id-card" style={{ color: 'var(--accent-cyan)' }} /> Professional Reference
            </h3>
            <p>
              <strong>{personalInfo.reference.name}</strong> ({personalInfo.reference.relation})
              <br />
              Contact: <a href={`tel:${personalInfo.reference.phone.replace(/\s+/g, '')}`} style={{ color: 'var(--accent-cyan)' }}>{personalInfo.reference.phone}</a>
            </p>
            <p style={{ marginTop: '10px', fontSize: '13.5px', color: '#94a3b8' }}>
              Additional academic references from the University of Mpumalanga ICT faculty available upon request.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
