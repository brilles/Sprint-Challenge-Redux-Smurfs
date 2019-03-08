import React from "react";

const Smurf = props => {
  return (
    <div className="smurf-wrapper">
      <h4>{props.smurf.name}</h4>
      <p> Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </div>
  );
};

export default Smurf;
