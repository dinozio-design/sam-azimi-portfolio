import React, { useRef, useEffect, lazy, Suspense } from "react";
import ScrollToTopButton from "../../components/ScrollToTopButton";
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
    padding: "2em",
  },
};

export default function MainPage() {

  return (
    <div className="App-mainPage" style={styles.appMainPageContainer}>
      <ScrollToTopButton/>
      <section style={styles.spacer}>
        <img style={styles.backGroundImage} src="./images/myWorkImage.png"/> 
      </section>
      <div style={styles.fadeIn}>
        <Suspense fallback={<div>Loading About...</div>}>
          <LazyAbout />
        </Suspense>
      </div>
      <section style={styles.spacer}>
        <img style={styles.backGroundImage} src="./images/backgroundImage.png"/> 
      </section>
      <div style={styles.fadeIn}>
        <Suspense fallback={<div>Loading Projects...</div>}>
          <LazyProjects />
        </Suspense>
      </div>
      <section style={styles.spacer}/>
      <div style={styles.fadeIn}>
        <Suspense fallback={<div>Loading Resume...</div>}>
          <LazyResume />
        </Suspense>
      </div>
      <section style={styles.spacer}/>
      <div style={styles.fadeIn}>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <LazyFooter />
        </Suspense>
      </div>
    </div>
  );
}
