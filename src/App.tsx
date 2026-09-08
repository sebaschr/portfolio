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
  RestaurantLayout,
  RestaurantHome,
  RestaurantMenu,
  RestaurantOrder,
  RestaurantAbout,
  RestaurantReservations,
  PersonalPage,
} from './components';
import { LanguageProvider } from './i18n/LanguageContext';

// Temporary blocker: hides the whole site (every route) behind a single,
// unbranded personal resume page. Nothing below is deleted, so flip this
// back to false (and remove the catch-all Route below it) when Seb gives
// the signal to transition back to the full site.
const BLOCKER_MODE = true;

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ContactModalProvider>
        <Router>
          {!BLOCKER_MODE && <Navbar />}
          <Routes>
            {BLOCKER_MODE ? (
              <Route path="*" element={<PersonalPage />} />
            ) : (
              <>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/lab/restaurant" element={<RestaurantLayout />}>
                  <Route index element={<RestaurantHome />} />
                  <Route path="menu" element={<RestaurantMenu />} />
                  <Route path="order" element={<RestaurantOrder />} />
                  <Route path="about" element={<RestaurantAbout />} />
                  <Route path="reservations" element={<RestaurantReservations />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
              </>
            )}
          </Routes>
          <ContactModal />
          {!BLOCKER_MODE && <FloatingActions />}
        </Router>
      </ContactModalProvider>
    </LanguageProvider>
  );
};

export default App;
