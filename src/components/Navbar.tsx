import React, { useEffect, useState } from "react";
import MenuSvg from "../assets/icons/menu.svg";

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const root = document.getElementById('root');
        if (root) {
            isOpen ? root.classList.add('hide-overflow') : root.classList.remove('hide-overflow')
        }
    }, [isOpen])

    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="/" className="nav-logo">Seb</a>

                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <img
                        style={{ width: '35px', height: '35px' }}
                        src={MenuSvg}
                        aria-label="Via People Logo"
                        alt="Via People Logo"
                    />
                </button>

                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/mgz">MGZ</a></li>
                </ul>
            </div>
        </nav>
    );
};