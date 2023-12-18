import React, { useRef, useEffect, lazy, Suspense } from "react";

const LazyAbout = lazy(() => import("../About"));
const LazyProjects = lazy(() => import("../Projects"));
const LazyResume = lazy(() => import("../Resume"));
const LazyFooter = lazy(() => import("../../components/Footer"));

const styles = {
  appMainPageContainer: {
    backgroundColor: "#e6f3f3",
    
  },
  spacer: {
    borderTop: "solid thick",
    borderColor: "#663399",
    width: "inherit",
    height: "auto",
  },
  backGroundImage:{
    width: "100%",
    height: "auto",
  },

  fadeIn: {
    opacity: 0,
    transition: "opacity 0.5s ease-in-out",
    padding: "2em",

  },
};

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

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        observer.unobserve(entry.target);
      }
    });
  };

  return (
    <div className="App-mainPage" style={styles.appMainPageContainer}>
      <section style={styles.spacer}>
        <img style={styles.backGroundImage} src="./images/myWorkImage.png"/> 
      </section>
      <div ref={aboutRef} style={styles.fadeIn}>
        <Suspense fallback={<div>Loading About...</div>}>
          <LazyAbout />
        </Suspense>
      </div>
      <section style={styles.spacer}>
        <img style={styles.backGroundImage} src="./images/backgroundImage.png"/> 
      </section>
      <div ref={projectsRef} style={styles.fadeIn}>
        <Suspense fallback={<div>Loading Projects...</div>}>
          <LazyProjects />
        </Suspense>
      </div>
      <section style={styles.spacer}/>
      <div ref={resumeRef} style={styles.fadeIn}>
        <Suspense fallback={<div>Loading Resume...</div>}>
          <LazyResume />
        </Suspense>
      </div>
      <section style={styles.spacer}/>
      <div ref={footerRef} style={styles.fadeIn}>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <LazyFooter />
        </Suspense>
      </div>
    </div>
  );
}
