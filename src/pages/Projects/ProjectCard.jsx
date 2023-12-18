import React from 'react';
import { Fade } from "react-awesome-reveal";
import { BsRocketTakeoff, BsGithub } from "react-icons/bs";

const styles = {
    icon: {
        width: 30,
        height: 30,
    }
};

export default function ProjectCard({ title, description, imageSource, liveLink, gitHubLink, keywords }) {
    return (
        <div className="card">
            <Fade triggerOnce cascade damping={2}>
                <div className="card-header text-center">
                    <h4>{title}</h4>
                </div>
                <div className="card-body">
                    <img src={imageSource} alt={title} />
                    <p>{description}</p>
                    <div className="project-links">
                        <a href={liveLink} target="_blank" rel="noopener noreferrer">
                            {/* <img style={styles.icon} src="./githubIcon.png" alt="GitHub Logo" /> */}
                            <BsRocketTakeoff />
                        </a>
                        <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
                            {/* <img style={styles.icon} src="./deployIcon.png" alt="Deployed Logo" /> */}
                            <BsGithub />
                        </a>
                        <p></p>
                    </div>
                    <div className="project-keywords">
                        {keywords.map((keyword, index) => (
                            <button className="btn btn-round rounded-pill project-button" key={index}>{keyword}</button>
                        ))}
                    </div>
                </div>
            </Fade>
        </div>
    );
}
