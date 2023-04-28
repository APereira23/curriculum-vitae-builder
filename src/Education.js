import React, { Component } from "react";
import { education } from "./data-eng.js";


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
      <div className="education-container container">
        <table>
          <thead>
            <tr>
              <td>
                <h3 className="education-title section-title">Education</h3>
              </td>
            </tr>
          </thead>
          <tbody>
            {education.map((degree) => {
              return (!degree.link) ? (
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
                <br></br>
                </>
              ) : (
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
                    <td className="degree-link">
                      Dissertation link: <a href={degree.link}>{degree.link}</a>
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