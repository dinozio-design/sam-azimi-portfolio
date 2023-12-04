import React from "react";
import About from "../About";
import Footer from "../../components/Footer";
import Projects from "../Projects";
import Resume from "../Resume";


export default function MainPage() {
    return (
        <>
            <About />
            <Projects />
            <Resume />
            <Footer />
        </>
    );
};