import React from 'react';
import { Fade } from "react-awesome-reveal";
import { BsRocketTakeoff, BsGithub } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

const styles = {
    iconStyle: {
        color: "#7848aa",
        margin: "4px"
    },
    bodyText: {
        marginTop: "10px",
        textAlign: "justify"
    }
};

export default function ProjectCard({ title, description, imageSource, liveLink, gitHubLink, keywords }) {
    return (
        <div className="card text-center">
            <Fade triggerOnce cascade damping={2}>
                <div className="card-header text-center">
                    <h4>{title}</h4>
                </div>
                <div className="card-body">
                    <img src={imageSource} alt={title} />
                    <p style={styles.bodyText}>{description}</p>
                    <div className="project-links">
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" data-tooltip-id="DEP-tooltip" data-tooltip-content="Visit Deployment" data-tooltip-place="bottom">
                            <BsRocketTakeoff style={styles.iconStyle} />
                        </a> <Tooltip id="DEP-tooltip" opacity={.5} style={{ fontSize: "12px" }} />
                        <a href={gitHubLink} target="_blank" rel="noopener noreferrer" data-tooltip-id="GHR-tooltip" data-tooltip-content="Visit GitHub Repository" data-tooltip-place="bottom">
                            <BsGithub style={styles.iconStyle} />
                        </a> <Tooltip id="GHR-tooltip" opacity={.5} style={{ fontSize: "12px" }} />
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
