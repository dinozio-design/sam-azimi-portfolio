import React, { useState } from "react";

export default function Navbar(){
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav>
      <ul className="navlinks">
        <li>
          <a href="#about" className={activeLink === 0 ? "active" : ""}
            onClick={() => handleLinkClick(0)}>About Me</a>
        </li>
        <li>
          <a href="#projects" className={activeLink === 1 ? "active" : ""}
            onClick={() => handleLinkClick(1)}>Projects</a>
        </li>
        <li>
          <a href="#resume" className={activeLink === 2 ? "active" : ""}
            onClick={() => handleLinkClick(2)}>Resume</a>
        </li>
      </ul>
    </nav>
  );
};
