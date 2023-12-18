import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import MoreAboutMeCard from "./MoreAboutMeCard";
import AboutMeData from "../../data/AboutMeData";

export default function About() {
   

    return (
        <div >
           <Slide triggerOnce direction="right" damping={0.5}>
            <h2>
                About Me
            </h2>
            </Slide>
            <Fade triggerOnce cascade damping={0.2}>
                    {AboutMeData.map((data, index) => (
                        <MoreAboutMeCard key={index} {...data} />
                    ))}
            </Fade>
        </div>
    );
};