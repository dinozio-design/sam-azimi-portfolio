import React from 'react';

export default function ProjectCard({ title, description, image, liveLink, githubLink, keywords }) {
    return (
        <div className="project-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-links">
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                </a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub Repo
                </a>
            </div>
            <div className="project-keywords">
                {keywords.map((keyword, index) => (
                    <span key={index}>{keyword}</span>
                ))}
            </div>
        </div>
    );
}
