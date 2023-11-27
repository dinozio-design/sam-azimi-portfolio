import React, { useState } from "react";

export default function Navbar() {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = ()=>{
        setNavOpen(!isNavOpen);
    };
    const closeNav = ()=>{
        setNavOpen(false);
    };

    return (
        <div className={"navbar"}>
            
        </div>
    );
};