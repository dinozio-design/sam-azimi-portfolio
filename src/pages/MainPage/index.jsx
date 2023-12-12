import React from "react";
import About from "../About";
import Footer from "../../components/Footer";
import Projects from "../Projects";
import Resume from "../Resume";

const styles ={
    appMainPageContainer:{

    },

    "@media only screen and (min-width:993px)": {
        appMainPageContainer: {
            flex: "3",
            height: "100vh"
        }
    }
}
export default function MainPage() {
    return (
        <div style={styles.appMainPageContainer}>
            <About />
            <Projects />
            <Resume />
            <Footer />
        </div>
    );
};