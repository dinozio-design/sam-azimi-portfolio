import React from 'react';

export default function MoreAboutMeCard({ title, description }) {
    return (
        <div className="card">
            <div className="card-header text-center">
                <h4>{title}</h4>
            </div>
            <div className="card-body">
                <p>{description}</p>
            </div>
        </div>
    );
}