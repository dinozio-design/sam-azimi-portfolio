import React, { useRef } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import MoreAboutMeCard from "./MoreAboutMeCard";
import AboutMeData from "../../data/AboutMeData";

export default function About() {
    const aboutRef = useRef(null);

    return (
        <div ref={aboutRef}>
           <Slide triggerOnce direction="right" damping={0.5}>
            <h2>
                About Me
            </h2>
            </Slide>
            <Fade cascade damping={0.5}>
                    {AboutMeData.map((data, index) => (
                        <MoreAboutMeCard key={index} {...data} />
                    ))}
            </Fade>
        </div>
    );
};