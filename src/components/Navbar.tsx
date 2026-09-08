import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import { useContactModal } from "./ContactModalContext";
import { useLanguage } from "../i18n/LanguageContext";
import { strings } from "../i18n/strings";

const SCROLL_THRESHOLD = 80;

export const Navbar: React.FC = () => {
    const [pinned, setPinned] = useState(false);
    const { open } = useContactModal();
    const { language, toggleLanguage } = useLanguage();
    const t = strings[language];

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

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        clsx('nav-link', { 'nav-link--active': isActive });

    return (
        <nav className={clsx('navbar', { 'navbar--pinned': pinned })}>
            <div className="nav-container">
                <Link to="/" className="nav-logo">rojomasrojo</Link>

                <div className="nav-links">
                    <NavLink to="/" end className={navLinkClass}>{t.nav.home}</NavLink>
                    <NavLink to="/projects" className={navLinkClass}>{t.nav.projects}</NavLink>
                    <NavLink to="/experience" className={navLinkClass}>{t.nav.experience}</NavLink>
                    <NavLink to="/about" className={navLinkClass}>{t.nav.about}</NavLink>
                </div>

                <div className="nav-actions">
                    <button
                        type="button"
                        className="nav-lang-toggle"
                        onClick={toggleLanguage}
                        aria-label="Toggle language"
                    >
                        <span className={clsx({ 'nav-lang-active': language === 'es' })}>ES</span>
                        <span className="nav-lang-divider">/</span>
                        <span className={clsx({ 'nav-lang-active': language === 'en' })}>EN</span>
                    </button>

                    <button type="button" className="nav-contact" onClick={open}>
                        <MailIcon />
                        {t.nav.contact}
                    </button>
                </div>
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
