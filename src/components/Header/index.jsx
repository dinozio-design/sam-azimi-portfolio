import React from "react";
import Navbar from "../Navbar";

// styling the header
const styles = {
    appHeaderContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "calc(10px + 2vmin)",
        border: "thick solid",
        borderColor: "#663399",
        backgroundColor: "#7848aa",
        color: "#f2e9e4",
        paddingTop: "1.5em"
    },
    icon: {
        width: 30,
        height: 30,
        margin: "15px"
    },
    myImage: {
        width: 150,
    }
};
export default function Header() {
    return (
        <>
            <header style={styles.appHeaderContainer} className="App-header">
                <h1>SAM AZIMI</h1>
                <h5>JavaScrip Developer</h5>
                <Navbar />
                <div>
                    <a href="https://github.com/dinozio-design" target="_blank" rel="noopener noreferrer">
                        <img style={styles.icon} src="./githubIcon.png" alt="GitHub Logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/sam-azimi-p-eng/" target="_blank" rel="noopener noreferrer">
                        <img style={styles.icon} src="./linkedInIcon.png" alt="LinkedIn Logo" />
                    </a>
                </div>
                <div className="myImage">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img style={styles.myImage}  src="./developerPicture.png" alt="GitHub Logo" />
                    </a>
                </div>
                
            </header>
        </>
    );
};