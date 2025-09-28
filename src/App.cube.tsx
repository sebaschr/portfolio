import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cube from './components/Cube/Cube';
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const WhatsNext = lazy(() => import('./pages/WhatsNext'));
const Extra = lazy(() => import('./pages/Extra'));

export default function AppCube() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cube />}>
          <Route
            index
            path="whats-next"
            element={
              <Suspense
                fallback={<div style={{ padding: 20 }}>Loading...</div>}
              >
                <WhatsNext />
              </Suspense>
            }
          />{' '}
          <Route
            path="about"
            element={
              <Suspense
                fallback={<div style={{ padding: 20 }}>Loading...</div>}
              >
                <About />
              </Suspense>
            }
          />
          <Route
            path="projects"
            element={
              <Suspense
                fallback={<div style={{ padding: 20 }}>Loading...</div>}
              >
                <Projects />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense
                fallback={<div style={{ padding: 20 }}>Loading...</div>}
              >
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="whats-next"
            element={
              <Suspense
                fallback={<div style={{ padding: 20 }}>Loading...</div>}
              >
                <WhatsNext />
              </Suspense>
            }
          />
          <Route
            path="extra"
            element={
              <Suspense
                fallback={<div style={{ padding: 20 }}>Loading...</div>}
              >
                <Extra />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
