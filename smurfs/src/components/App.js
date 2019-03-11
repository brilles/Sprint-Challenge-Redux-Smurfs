import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs, addSmurf, deleteSmurf } from "../actions";
import SmurfList from "./SmurfList";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }
  componentDidMount() {
    this.props.getSmurfs();
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
  };

  deleteSmurf = (e, id) => {
    e.preventDefault();
    console.log(id);
    this.props.deleteSmurf(id);
  };

  render() {
    if (this.props.fetchingSmurfs) {
      return <h2>Loading ....... !</h2>;
    }

    return (
      <div className="App">
        <div className="title">
          <h1>Smurfs</h1>
        </div>
        <div className="main-container">
          <div className="add-smurf-form">
            <h2>Add Smurf:</h2>
            <form onSubmit={this.postSmurf}>
              <input
                type="text"
                onChange={this.handleChanges}
                placeholder="name"
                value={this.state.name}
                name="name"
                required
              />
              <input
                type="number"
                onChange={this.handleChanges}
                placeholder="age"
                value={this.state.age}
                name="age"
                required
              />
              <input
                type="text"
                onChange={this.handleChanges}
                placeholder="height"
                value={this.state.height}
                name="height"
                required
              />
              <button>Add Smurf</button>
            </form>
          </div>

          <SmurfList
            smurfs={this.props.smurfs}
            deleteSmurf={this.deleteSmurf}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs,
    addingSmurf: state.addingSmurf
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf }
)(App);
