import React from "react";
import Smurf from "./Smurf";

const SmurfList = props => {
  return (
    <div className="smurf-list">
      {props.smurfs.map(smurf => {
        return <Smurf key={smurf.name} smurf={smurf} />;
      })}
    </div>
  );
};

export default SmurfList;
