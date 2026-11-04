import React, { useState, useEffect } from 'react';
import AmbientBackground from './components/AmbientBackground';
import Header from './components/Header';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import CvModal from './components/CvModal';
import ProjectModal from './components/ProjectModal';
import Toast from './components/Toast';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import BackgroundPage from './pages/BackgroundPage';
import ContactsPage from './pages/ContactsPage';

import { curatedProjects } from './data/portfolioData';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [cmdOpen, setCmdOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [inspectedProject, setInspectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2800);
  };

  // Listen for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Parse URL on initial load for deep links e.g. ?page=projects&project=ai-code-tutor
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page');
    const projectParam = params.get('project');

    if (pageParam && ['home', 'projects', 'background', 'contacts'].includes(pageParam)) {
      setActivePage(pageParam);
    }

    if (projectParam) {
      const match = curatedProjects.find(
        (p) =>
          p.repoName.toLowerCase() === projectParam.toLowerCase() ||
          p.aliases.some((a) => a.toLowerCase() === projectParam.toLowerCase())
      );
      if (match) {
        setInspectedProject(match);
      }
    }
  }, []);

  const handleNavigate = (page, specificProject = null) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (specificProject) {
      const match = curatedProjects.find(
        (p) =>
          p.repoName.toLowerCase() === specificProject.toLowerCase() ||
          p.aliases.some((a) => a.toLowerCase() === specificProject.toLowerCase())
      );
      if (match) {
        setInspectedProject(match);
      }
    }
  };

  return (
    <div className="app-container">
      <AmbientBackground />

      <Header
        activePage={activePage}
        setActivePage={(p) => handleNavigate(p)}
        onOpenCmd={() => setCmdOpen(true)}
        onOpenCv={() => setCvOpen(true)}
      />

      <main className="page-wrapper">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenCv={() => setCvOpen(true)}
            onInspectProject={(proj) => setInspectedProject(proj)}
          />
        )}

        {activePage === 'projects' && (
          <ProjectsPage onInspectProject={(proj) => setInspectedProject(proj)} />
        )}

        {activePage === 'background' && (
          <BackgroundPage
            onOpenCv={() => setCvOpen(true)}
            onNavigate={handleNavigate}
            showToast={showToast}
          />
        )}

        {activePage === 'contacts' && <ContactsPage showToast={showToast} />}
      </main>

      <Footer />

      {/* Global Modals & Notifications */}
      <CommandPalette
        isOpen={cmdOpen}
        onClose={() => setCmdOpen(false)}
        onNavigate={handleNavigate}
        onOpenCv={() => setCvOpen(true)}
        showToast={showToast}
      />

      <CvModal
        isOpen={cvOpen}
        onClose={() => setCvOpen(false)}
        showToast={showToast}
      />

      <ProjectModal
        project={inspectedProject}
        onClose={() => setInspectedProject(null)}
      />

      <Toast message={toastMessage} visible={toastVisible} />
    </div>
  );
}
