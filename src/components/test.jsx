import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };
    const closeNav = () => {
        setNavOpen(false);
    };

    return (
        <div className={`navbar ${isNavOpen ? 'open' : ''}`}>
            <div className="hamburger" onClick={toggleNav}>
                {isNavOpen ? <span>&larr; Close</span> : <span>&#9776;</span>}
            </div>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                {/* Add more links as needed */}
                <button className="close-button" onClick={closeNav}>
                    &larr;
                </button>
            </div>
        </div>
    );
};