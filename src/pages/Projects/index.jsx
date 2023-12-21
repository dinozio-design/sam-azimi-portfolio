import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import ProjectCard from "./ProjectCard";
import ProjectData from "../../data/ProjectData";


const styles = {
    bodyText: {
        textAlign: "justify"
    }
};

export default function Projects() {
    return (
        <div>
            <Slide triggerOnce direction="right" cascade damping={.5}>
                <h2>
                    My Selected Projects
                </h2>
            </Slide>
            <Fade cascade damping={.5}>
                <p style={styles.bodyText}>Below you can find a select list of the projects that I have created along with some details about them. All of these projects are open-source and if you follow the GitHub tab, you can find the repository that holds the source code for them. Some of these were class assignments and group projects, and some were just for fun.</p>

                <div>
                    {ProjectData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </Fade>
        </div>
    );
};