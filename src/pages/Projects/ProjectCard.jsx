import React from 'react';

export default function ProjectCard({ title, description, image, liveLink, gitHubLink, keywords }) {
    return (
        <div className="card">
            <div className="card-header text-center">
                <h4>{title}</h4>
            </div>
            <img src={image} alt={title} />
            <p>{description}</p>
            <div className="project-links">
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                </a>
                <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
                    GitHub Repo
                </a>
            </div>
            <div className="project-keywords">
                {keywords.map((keyword, index) => (
                    <button key={index}>{keyword}</button>
                ))}
            </div>
        </div>
    );
}
