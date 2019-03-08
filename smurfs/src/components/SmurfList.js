import React from "react";
import Smurf from "./Smurf";

const SmurfList = props => {
  return (
    <div className="smurf-list">
      <h3>Smurf List:</h3>
      {props.smurfs.map(smurf => {
        return <Smurf key={smurf.name} smurf={smurf} />;
      })}
    </div>
  );
};

export default SmurfList;
