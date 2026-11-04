import React, { useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function CvModal({ isOpen, onClose, showToast }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = personalInfo.cvPdf;
    a.download = 'Stuart_Mzimba_CV.pdf';
    a.click();
    showToast('Downloading Stuart_Mzimba_CV.pdf...');
  };

  return (
    <div className="cv-modal-overlay" onClick={onClose}>
      <div className="cv-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="cv-modal-header">
          <h3>
            <i className="bx bx-file" /> Curriculum Vitae — Stuart Mzimba
          </h3>
          <div className="cv-modal-actions">
            <button className="cv-download-btn" onClick={handleDownload}>
              <i className="bx bx-download" /> Download Official PDF
            </button>
            <button className="cv-close-btn" onClick={onClose} aria-label="Close CV Modal">
              <i className="bx bx-x" />
            </button>
          </div>
        </div>

        <div className="cv-modal-body">
          <div className="cv-summary-sheet">
            <div className="cv-sheet-top">
              <div>
                <h2>{personalInfo.name.toUpperCase()}</h2>
                <p>Final-Year BICT Student &bull; Full-Stack &amp; Software Developer</p>
              </div>
              <div className="cv-contact-Chips">
                <span>
                  <i className="bx bx-map" /> Mbombela West Acres, SA
                </span>
                <span>
                  <i className="bx bx-phone" /> {personalInfo.phone}
                </span>
                <span>
                  <i className="bx bx-envelope" /> {personalInfo.emailUniversity}
                </span>
              </div>
            </div>

            <div className="cv-block">
              <h4>Executive Profile</h4>
              <p>{personalInfo.bio}</p>
            </div>

            <div className="cv-grid-2">
              <div className="cv-block">
                <h4>Education</h4>
                <p>
                  <strong>BICT (Bachelor of Information &amp; Communication Technology)</strong>
                  <br />
                  University of Mpumalanga &bull; Expected 2027
                </p>
                <p style={{ marginTop: '8px' }}>
                  <strong>National Senior Certificate</strong>
                  <br />
                  Mjokwane Secondary School &bull; 2023
                </p>
              </div>

              <div className="cv-block">
                <h4>Certifications &amp; Courses</h4>
                <p>
                  <strong>IBM Developer Skills Network (CognitiveClass.ai)</strong>
                  <br />
                  &bull; Data Science 101
                  <br />
                  &bull; Data Science Tools
                </p>
              </div>

              <div className="cv-block">
                <h4>Core Technical Skills</h4>
                <p>
                  Python &bull; Java &bull; JavaScript &bull; Kotlin &bull; SQL &bull; React &bull; Node.js &bull; Web &amp; Mobile Development &bull; Database Management
                </p>
              </div>

              <div className="cv-block">
                <h4>Languages &amp; Reference</h4>
                <p>
                  <strong>Languages:</strong> {personalInfo.languagesSpoken.join(', ')}
                  <br />
                  <strong>Reference:</strong> {personalInfo.reference.name} ({personalInfo.reference.relation}) — {personalInfo.reference.phone}
                </p>
              </div>
            </div>
          </div>

          <iframe
            src={personalInfo.cvPdf}
            className="cv-pdf-frame"
            title="Stuart Mzimba CV PDF"
          />
        </div>
      </div>
    </div>
  );
}
