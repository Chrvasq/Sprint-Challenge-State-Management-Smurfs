import React from "react";
// import { connect } from "react-redux";

const Smurf = props => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Height: {props.height}</p>
    </div>
  );
};

export default Smurf;
