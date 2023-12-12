import React, { useRef }  from "react";
import MoreAboutMeCard from "./MoreAboutMeCard";
import AboutMeData from "../../data/AboutMeData";

export default function About() {
    const aboutRef = useRef(null);

    return (
        <div ref={aboutRef}>
            <h2>
                About Me
            </h2>
            <div>
                {AboutMeData.map((data, index) => (
                    <MoreAboutMeCard key={index} {...data} />
                ))}
            </div>
        </div>
    );
};