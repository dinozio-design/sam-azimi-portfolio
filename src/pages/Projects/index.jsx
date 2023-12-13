import React, { useRef } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import ProjectCard from "./ProjectCard";
import ProjectData from "../../data/ProjectData";

export default function Projects() {
    const projectsRef = useRef(null);

    return (
        <div ref={projectsRef}>
            <Slide triggerOnce direction="right" cascade damping={3}>
                <h2>
                    My Selected Projects
                </h2>
            </Slide>
            <Fade cascade damping={2}>
                <p>Below you can find a select list of the projects that I have created along with some details about them. All of these projects are open-source and if you follow the GitHub tab, you can find the repository that holds the source code for them. Some of these were class assignments and group projects, and some were just for fun.</p>

                <div>
                    {ProjectData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </Fade>
        </div>
    );
};