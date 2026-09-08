import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Navbar,
  HomePage,
  ProjectsPage,
  ExperiencePage,
  AboutPage,
  ErrorPage,
  ContactModal,
  ContactModalProvider,
  FloatingActions,
} from './components';
import { LanguageProvider } from './i18n/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ContactModalProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <ContactModal />
          <FloatingActions />
        </Router>
      </ContactModalProvider>
    </LanguageProvider>
  );
};

export default App;
