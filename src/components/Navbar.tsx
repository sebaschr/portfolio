import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useContactModal } from "./ContactModalContext";

const SCROLL_THRESHOLD = 80;

export const Navbar: React.FC = () => {
    const [pinned, setPinned] = useState(false);
    const { open } = useContactModal();

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

                <button type="button" className="nav-contact" onClick={open}>
                    <MailIcon />
                    Contact
                </button>
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
