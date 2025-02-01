import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navbar, HomePage, About, Projects, JumpingMice, Footer, ErrorPage, Photos } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/projects',
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/mgz',
    element: <JumpingMice />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/photos',
    element: <Photos />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
