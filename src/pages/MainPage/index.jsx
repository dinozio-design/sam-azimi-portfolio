import React, { useRef, useEffect, lazy, Suspense } from "react";

const LazyAbout = lazy(() => import("../About"));
const LazyProjects = lazy(() => import("../Projects"));
const LazyResume = lazy(() => import("../Resume"));
const LazyFooter = lazy(() => import("../../components/Footer"));

const styles = {
  appMainPageContainer: {
    border: "thick solid",
    borderColor: "#9a8c98",
    backgroundColor: "#e6f3f3",
    padding: "2em",
  },
  fadeIn: {
    opacity: 0,
    transition: "opacity 0.5s ease-in-out",
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
      <div ref={aboutRef} style={styles.fadeIn}>
        <Suspense fallback={<div>Loading About...</div>}>
          <LazyAbout />
        </Suspense>
      </div>
      <div ref={projectsRef} style={styles.fadeIn}>
        <Suspense fallback={<div>Loading Projects...</div>}>
          <LazyProjects />
        </Suspense>
      </div>
      <div ref={resumeRef} style={styles.fadeIn}>
        <Suspense fallback={<div>Loading Resume...</div>}>
          <LazyResume />
        </Suspense>
      </div>
      <div ref={footerRef} style={styles.fadeIn}>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <LazyFooter />
        </Suspense>
      </div>
    </div>
  );
}
