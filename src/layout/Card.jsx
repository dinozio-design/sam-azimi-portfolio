import React from "react";

function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h4>{props.heading}</h4>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
