import React from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";

const SmurfList = props => {
  return (
    <div>
      {props.smurfs.map(smurf => {
        return <Smurf key={smurf.id} smurf={smurf} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};
export default connect(mapStateToProps, {})(SmurfList);
