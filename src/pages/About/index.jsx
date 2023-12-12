import React from "react";
import MoreAboutMeCard from "./MoreAboutMeCard";
import AboutMeData from "../../data/AboutMeData";

export default function About() {
    return (
        <>
            <h2>
                About Me
            </h2>
            <div>
                {AboutMeData.map((data, index) => (
                    <MoreAboutMeCard key={index} {...data} />
                ))}
            </div>
        </>
    );
};