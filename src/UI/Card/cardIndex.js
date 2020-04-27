import React from "react";
import "./cardStyle.css";

function CardIndex(props) {
  return (
    <div className="card" {...props}>
      {props.children}
    </div>
  );
}

export default CardIndex;
