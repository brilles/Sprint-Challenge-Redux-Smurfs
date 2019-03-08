import React from "react";
import Smurf from "./Smurf";

const SmurfList = props => {
  console.log(props.smurfs);
  return (
    <div className="smurf-list">
      {props.smurfs.map(smurf => {
        return <Smurf key={smurf.name} smurf={smurf} />;
      })}
    </div>
  );
};

export default SmurfList;
