import React, { useRef, useEffect } from "react";
import About from "../About";
import Footer from "../../components/Footer";
import Projects from "../Projects";
import Resume from "../Resume";


const styles = {
    appMainPageContainer: {
        border: " thick solid",
        borderColor: "#9a8c98",
        backgroundColor: "#e6f3f3",
        padding: "2em"
    }
}
export default function MainPage() {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const resumeRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const aboutObserver = new IntersectionObserver(handleIntersection, {
            threshold: 0.5,
        });

        const projectsObserver = new IntersectionObserver(handleIntersection, {
            threshold: 0.5,
        });

        const resumeObserver = new IntersectionObserver(handleIntersection, {
            threshold: 0.5,
        });

        const footerObserver = new IntersectionObserver(handleIntersection, {
            threshold: 0.5,
        });

        if (aboutRef.current) aboutObserver.observe(aboutRef.current);
        if (projectsRef.current) projectsObserver.observe(projectsRef.current);
        if (resumeRef.current) resumeObserver.observe(resumeRef.current);
        if (footerRef.current) footerObserver.observe(footerRef.current);

        return () => {
            aboutObserver.disconnect();
            projectsObserver.disconnect();
            resumeObserver.disconnect();
            footerObserver.disconnect();
        };
    }, []);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Load content or perform actions when components are in view
                console.log(`Component ${entry.target.tagName} is in view!`);
            }
        });
    };

    return (
        <div className="App-mainPage" style={styles.appMainPageContainer}>
            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={projectsRef}>
                <Projects />
            </div>
            <div ref={resumeRef}>
                <Resume />
            </div>
            <div ref={footerRef}>
                <Footer />
            </div>
        </div>
    );
};