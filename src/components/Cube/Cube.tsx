import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Face from './Face';
import './Cube.css';

const ROUTE_TO_ROTATION: Record<string, { x: number; y: number }> = {
  '/': { x: 0, y: 0 },
  '/about': { x: 0, y: -90 },
  '/projects': { x: 0, y: 180 },
  '/contact': { x: 0, y: 90 },
  '/whats-next': { x: -90, y: 0 },
  '/extra': { x: 90, y: 0 },
};

function clampAngle(n: number) {
  return ((n % 360) + 360) % 360;
}

export default function Cube() {
  const { pathname } = useLocation();
  const [rot, setRot] = useState<{ x: number; y: number }>(
    ROUTE_TO_ROTATION[pathname] ?? { x: 0, y: 0 }
  );
  const cubeRef = useRef<HTMLDivElement | null>(null);

  // Sync rotation with current route (nav-driven)
  useEffect(() => {
    const target = ROUTE_TO_ROTATION[pathname] ?? { x: 0, y: 0 };
    // normalize angles to avoid weird large numbers
    setRot({ x: clampAngle(target.x), y: clampAngle(target.y) });
    // scroll cube into view (optional - helps when nav is clicked from far down the page)
    if (cubeRef.current)
      cubeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [pathname]);

  const rotationStyle = useMemo(
    () => ({ transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)` }),
    [rot]
  );

  return (
    <div className="page">
      <nav className="cube__nav" aria-label="Cube navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/whats-next">What’s Next</Link>
        <Link to="/extra">Extra</Link>
      </nav>

      <div className="stage">
        <div
          className="cube"
          ref={cubeRef}
          style={rotationStyle}
          aria-live="polite"
          aria-roledescription="3D cube navigation"
        >
          <Face id="home" className="face--front" ariaLabel="Home (front)">
            <Outlet />
          </Face>

          <Face id="about" className="face--right" ariaLabel="About (right)">
            <div className="face__content">
              <h2>About</h2>
            </div>
          </Face>

          <Face
            id="projects"
            className="face--back"
            ariaLabel="Projects (back)"
          >
            <h2>Projects</h2>
          </Face>

          <Face id="contact" className="face--left" ariaLabel="Contact (left)">
            <h2>Contact</h2>
          </Face>

          <Face
            id="whats-next"
            className="face--top"
            ariaLabel="What’s next (top)"
          >
            <h2>What’s next</h2>
          </Face>

          <Face id="extra" className="face--bottom" ariaLabel="Extra (bottom)">
            <h2>Extra</h2>
          </Face>
        </div>
      </div>
    </div>
  );
}
