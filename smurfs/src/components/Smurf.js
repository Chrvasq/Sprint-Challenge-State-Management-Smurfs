import React from "react";
// import { connect } from "react-redux";

const Smurf = props => {
  return (
    <div>
      <p>Name: {props.smurf.name}</p>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </div>
  );
};

export default Smurf;
