import React from "react";
import Navbar from "../Navbar";

// styling the header
const styles = {
    appHeaderContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        border:" thick solid",
        borderColor: "#22223b",
        backgroundColor: "#22223b",
        color:" #f2e9e4",
        paddingTop:"1.5em"
    },
    headerHeading:{

    },
    headerText:{

    }
};
export default function Header() {
    return (
        <>
            <header style = {styles.appHeaderContainer} className="App-header">
                <h1>SAM AZIMI</h1>
                <p>JavaScrip Developer</p>
            </header>
            <Navbar/>
        </>
    );
};