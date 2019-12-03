import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import AddSmurfForm from "./AddSmurfForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to SmurfVille!</div>
        <AddSmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
