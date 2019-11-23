import React, { useEffect } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { getData } from "../actions/action";

const SmurfList = props => {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <div className='smurf-container'>
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

export default connect(mapStateToProps, { getData })(SmurfList);
