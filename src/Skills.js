import React, { Component } from "react";
import { skills, hobbies } from "./data.js";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: skills
    }
  }

  render() {
    return (
      <>
        <div className="skills-container">
          <table>
            <thead>
              <tr className="skills-title">Competências</tr>
              <br></br>
            </thead>
            <tbody>
              {skills.map((skill) => {
                return (
                  <tr>
                    <p className="skills-item">&#x2022; {skill.text}</p>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="hobbies-container">
          <table>
            <thead>
              <tr className="hobbies-title">Interesses</tr>
            </thead>
            <tbody>
              {hobbies.map((hobby) => {
                return (
                  <tr>
                    <p className="hobbies-item">&#x2022; {hobby.text}</p>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>

    );
  }
}

export default Skills;