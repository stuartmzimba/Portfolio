import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function ContactsPage({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied ${label} to clipboard!`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast('Message composed! Opening your email client...');

      // Open mailto with prepopulated message
      const subject = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Stuart,\n\n${formData.message}\n\nFrom:\n${formData.name} (${formData.email})`
      );
      window.location.href = `mailto:${personalInfo.emailPersonal}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <div className="container">
      {/* PAGE HERO */}
      <div className="contact-hero">
        <div className="status-badge">
          <span className="pulse-dot" />
          <span>Available for Junior Software Roles &bull; Graduate Opportunities</span>
        </div>
        <h1 className="contact-title">Let's Build Something Together</h1>
        <p>
          Whether you have an internship opportunity, full-stack software project, or technical question, I'm always open to connecting.
        </p>
      </div>

      {/* 2-COLUMN SPLIT GRID */}
      <div className="contact-grid">
        {/* LEFT COLUMN: DIRECT CHANNELS */}
        <div className="contact-card">
          <h2 className="card-heading">
            <i className="bx bx-paper-plane" /> Direct Communication
          </h2>
          <p className="card-sub">
            Click any row to open or use the copy button for instant access.
          </p>

          <div className="contact-info">
            {/* Personal Email */}
            <div className="contact-row">
              <a
                href={`mailto:${personalInfo.emailPersonal}`}
                className="contact-link"
              >
                <div className="icon-circle">
                  <i className="bx bx-envelope" />
                </div>
                <div>
                  <span className="contact-label-small">Personal Email</span>
                  <span>{personalInfo.emailPersonal}</span>
                </div>
              </a>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(personalInfo.emailPersonal, 'Personal Email')}
              >
                <i className="bx bx-copy" /> Copy
              </button>
            </div>

            {/* University Email */}
            <div className="contact-row">
              <a
                href={`mailto:${personalInfo.emailUniversity}`}
                className="contact-link"
              >
                <div className="icon-circle">
                  <i className="bx bx-buildings" />
                </div>
                <div>
                  <span className="contact-label-small">University Email (UMP)</span>
                  <span>{personalInfo.emailUniversity}</span>
                </div>
              </a>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(personalInfo.emailUniversity, 'University Email')}
              >
                <i className="bx bx-copy" /> Copy
              </button>
            </div>

            {/* Phone */}
            <div className="contact-row">
              <a href={`tel:${personalInfo.phoneRaw}`} className="contact-link">
                <div className="icon-circle">
                  <i className="bx bx-phone" />
                </div>
                <div>
                  <span className="contact-label-small">Direct Phone / WhatsApp</span>
                  <span>{personalInfo.phone}</span>
                </div>
              </a>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(personalInfo.phoneRaw, 'Phone Number')}
              >
                <i className="bx bx-copy" /> Copy
              </button>
            </div>

            {/* Location */}
            <div className="contact-row">
              <div className="contact-link">
                <div className="icon-circle">
                  <i className="bx bx-map-pin" />
                </div>
                <div>
                  <span className="contact-label-small">Current Location</span>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(personalInfo.location, 'Location')}
              >
                <i className="bx bx-copy" /> Copy
              </button>
            </div>

            {/* GitHub */}
            <div className="contact-row">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="icon-circle">
                  <i className="bx bxl-github" />
                </div>
                <div>
                  <span className="contact-label-small">GitHub Profile</span>
                  <span>github.com/{personalInfo.githubUsername}</span>
                </div>
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="copy-btn"
              >
                <i className="bx bx-link-external" /> Visit
              </a>
            </div>

            {/* LinkedIn */}
            <div className="contact-row">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="icon-circle">
                  <i className="bx bxl-linkedin" />
                </div>
                <div>
                  <span className="contact-label-small">LinkedIn Network</span>
                  <span>Stuart Mzimba</span>
                </div>
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="copy-btn"
              >
                <i className="bx bx-link-external" /> Connect
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE FORM */}
        <div className="form-card">
          <h2 className="card-heading">
            <i className="bx bx-message-square-detail" /> Send a Direct Message
          </h2>
          <p className="card-sub">
            Fill out the form below to reach Stuart directly in his inbox.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-row-2">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="e.g. s.jenkins@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                placeholder="e.g. Junior Software Engineer Opportunity"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                placeholder="Hi Stuart, I came across your portfolio and would love to discuss..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <i className="bx bx-loader-alt bx-spin" /> Sending...
                </>
              ) : submitted ? (
                <>
                  <i className="bx bx-check-circle" /> Message Sent!
                </>
              ) : (
                <>
                  <i className="bx bx-send" /> Send Message to Stuart
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
