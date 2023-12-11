import React from 'react';

export default function MoreAboutMeCard({ title, summary }) {
    return (
        <div className="card">
            <div className="card-header text-center">
                <h4>{title}</h4>
            </div>
            <div className="card-body">
                <p>{summary}</p>
            </div>
        </div>
    );
}