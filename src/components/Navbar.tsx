import React, { useEffect, useState } from "react";
import clsx from "clsx";
import MenuSvg from "../assets/icons/menu.svg";

const SCROLL_THRESHOLD = 80;

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [pinned, setPinned] = useState(false);

    useEffect(() => {
        const root = document.getElementById('root');
        if (root) {
            if (isOpen) root.classList.add('hide-overflow');
            else root.classList.remove('hide-overflow');
        }
    }, [isOpen])

    useEffect(() => {
        let lastY = window.scrollY;

        const handleScroll = () => {
            const currentY = window.scrollY;
            if (currentY <= SCROLL_THRESHOLD) {
                setPinned(false);
            } else if (currentY < lastY) {
                setPinned(true); // scrolling up
            } else if (currentY > lastY) {
                setPinned(false); // scrolling down
            }
            lastY = currentY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={clsx('navbar', { 'navbar--pinned': pinned })}>
            <div className="nav-container">
                <a href="/" className="nav-logo">rojomasrojo</a>

                <button
                    className="menu-toggle"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img
                        style={{ width: '35px', height: '35px' }}
                        src={MenuSvg}
                        alt=""
                    />
                </button>

                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/mgz">MGZ</a></li>
                </ul>

                <a href="mailto:hello@rojomasrojo.com" className="nav-email" aria-label="Email us">
                    <MailIcon />
                </a>
            </div>
        </nav>
    );
};

const MailIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
);
