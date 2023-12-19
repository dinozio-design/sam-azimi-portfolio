import React from "react";
import Navbar from "../Navbar";
import { BsGithub, BsLinkedin, BsEnvelopeAt, BsTelephone } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

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
    iconStyle: {
        color: "white", 
        margin: "4px"
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
                <h5>JavaScript Developer</h5>
                <Navbar />
                <div className="socials">
                    <a href="https://github.com/dinozio-design" target="_blank" rel="noopener noreferrer" data-tooltip-id="my-tooltip" data-tooltip-content="Go to my GitHub Page" data-tooltip-place="bottom">
                        <BsGithub style={styles.iconStyle}/>
                    </a> <Tooltip id="my-tooltip" opacity={.5} style={{fontSize:"12px"}}/>
                    <a href="https://www.linkedin.com/in/sam-azimi-p-eng/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin style={styles.iconStyle}/>
                    </a>
                    <a href="mailto:sam@dinozio.design" target="_blank" rel="noopener noreferrer">
                        <BsEnvelopeAt style={styles.iconStyle}/>
                    </a>
                    <a href="tel:+16476789571" target="_blank" rel="noopener noreferrer">
                        <BsTelephone style={styles.iconStyle}/>
                    </a>
                </div>
                <div className="myImage">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img style={styles.myImage}  src="./images/developerPicture.png" alt="My Picture" />
                    </a>
                </div>
                
            </header>
        </>
    );
};