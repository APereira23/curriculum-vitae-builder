import React, { Component } from "react";
import { skills, hobbies } from "./data-eng.js";

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
        <div className="skills-container container">
          <table>
            <thead>
              <tr className="skills-title section-title">Skills</tr>
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
        <div className="hobbies-container container">
          <table>
            <thead>
              <tr className="hobbies-title section-title">Interests / Hobbies</tr>
            </thead>
            <br></br>
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