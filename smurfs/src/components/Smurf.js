import React from "react";

const Smurf = props => {
  return (
    <div className="smurf">
      <p>Name: {props.smurf.name}</p>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </div>
  );
};

export default Smurf;
