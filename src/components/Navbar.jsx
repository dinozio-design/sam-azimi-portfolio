import React, { useState, useEffect } from "react";
import { Link , useLocation} from "react-router-dom";


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