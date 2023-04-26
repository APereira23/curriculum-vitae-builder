import React, { Component } from "react";
import { education } from "./data.js";


class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: education
    }
  }

  
  render() {
    {console.clear()}
    return (
      <div className="education-container">
        <table>
          <thead>
            <tr>
              <td>
                <h3 className="education-title">Formação Académica</h3>
              </td>
            </tr>
          </thead>
          <tbody>
            {education.map((degree) => {
              return (
                <>
                  <tr>
                    <td className="degree-title">{degree.title}</td>
                  </tr>
                  <tr>
                    <td className="degree-course">{degree.course}</td>
                  </tr>
                  <tr>
                    <td className="degree-when">{degree.when}</td>
                  </tr>
                  <tr>
                    <td className="degree-where">{degree.where}</td>
                  </tr>
                  <tr>
                    <td>
                      <a className="degree-link" href={degree.link}>{degree.link}</a>
                    </td>
                  </tr>
                <br></br>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Education;