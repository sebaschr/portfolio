import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, HomePage, Footer, ErrorPage, ContactModal, ContactModalProvider } from './components';

const App: React.FC = () => {
  return (
    <ContactModalProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
        <ContactModal />
      </Router>
    </ContactModalProvider>
  );
};

export default App;
