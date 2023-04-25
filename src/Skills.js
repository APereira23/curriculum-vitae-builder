import React, { Component } from "react";
import { skills } from "./data.js";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: skills
    }
  }

  render() {
    return (
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
                <p className="skills-item">{skill.text}</p>
              </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    );
  }
}

export default Skills;