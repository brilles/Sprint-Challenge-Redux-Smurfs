import React from "react";
import Smurf from "./Smurf";

class SmurfList extends React.Component {
  render() {
    return (
      <div className="smurf-list">
        <h3>Smurf List:</h3>
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.id + 1}>
              <div onClick={e => this.props.deleteSmurf(e, smurf.id)}>X</div>
              <Smurf key={smurf.name} smurf={smurf} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default SmurfList;
