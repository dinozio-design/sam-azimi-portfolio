import React from 'react';

const styles = {
    bodyText:{
      textAlign: "justify"
    }
  }

  
export default function MoreAboutMeCard({ title, summary }) {
    return (
        <div className="card">
            <div className="card-header text-center">
                <h4>{title}</h4>
            </div>
            <div className="card-body">
                <p style={styles.bodyText}>{summary}</p>
            </div>
        </div>
    );
}