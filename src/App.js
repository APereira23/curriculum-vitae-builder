import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Bio from "./Bio";
import Work from "./Work";
import Education from "./Education";
import Skills from "./Skills";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page">
        <Header />
        <div className="block-row-container">
          <div className="block-col-container">
            <Bio />
            <Skills />
          </div>
          <div className="block-col-container">
            <Work />
            <Education />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
