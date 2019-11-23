import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/action";

const AddSmurfForm = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: 0,
    height: ""
  });

  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      newSmurf.name !== "" &&
      newSmurf.age > 0 &&
      newSmurf.age !== "" &&
      newSmurf.height !== ""
    ) {
      props.addSmurf(newSmurf);
      setNewSmurf({
        name: "",
        age: 0,
        height: ""
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={newSmurf.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <label>Age</label>
        <input
          type="text"
          name="age"
          value={newSmurf.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <label>Height</label>
        <input
          type="text"
          name="height"
          value={newSmurf.height}
          onChange={handleChange}
          placeholder="Height"
        />
        <button>Add Smurf</button>
      </form>
    </div>
  );
};

export default connect(null, { addSmurf })(AddSmurfForm);
