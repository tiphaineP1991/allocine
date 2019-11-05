import React from "react";

const Details = props => {
  return (
    <div className="details-item">
      <h2>{props.detTitle}</h2>
      <h3>{props.answer}</h3>
      <h4>{props.last}</h4>
    </div>
  );
};

export default Details;
