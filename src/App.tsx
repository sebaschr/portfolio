import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, HomePage, About, Projects, JumpingMice, Footer, ErrorPage, Photos } from './components';


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/mgz" element={<JumpingMice />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
