import React from "react";
// import Card from "../../layout/Card";
import ProjectCard from "./ProjectCard";
import ProjectData from "../../data/ProjectData";

export default function Projects() {
    return (
        <>
            <div>
                <h2>
                    My Selected Projects
                </h2>
                <p>Below you can find a select list of the projects that I have created along with some details about them. All of these projects are open-source and if you follow the GitHub tab, you can find the repository that holds the source code for them. Some of these were class assignments and group projects, and some were just for fun.</p>
                
                <div>
                    {ProjectData.map ((project, index)=>(
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </>
    );
};