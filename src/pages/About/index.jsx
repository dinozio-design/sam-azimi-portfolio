import React, { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import MoreAboutMeCard from "./MoreAboutMeCard";
import AboutMeData from "../../data/AboutMeData";

export default function About() {
    const aboutRef = useRef(null);

    return (
        <div ref={aboutRef}>
            <h2>
                About Me
            </h2>
            <Fade bottom cascade damping={0.5}>
                    {AboutMeData.map((data, index) => (
                        <MoreAboutMeCard key={index} {...data} />
                    ))}
            </Fade>
        </div>
    );
};