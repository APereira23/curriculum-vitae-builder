import React, { Component } from "react";
import { work } from "./data.js";


class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: work
    }

  }
  
  render() {
    return (
      <div className="work-container">
        <table>
          <thead>
            <tr>
              <td>
                <h3 className="work-title">Experiência Profissional</h3>
              </td>
            </tr>
          </thead>
          <tbody>
            {work.map((job) => {
              return (
                <>
                  <tr>
                    <td className="job-title">{job.title}</td>
                  </tr>
                  <tr>
                    <td className="job-when">{job.when}</td>
                  </tr>
                  <tr>
                    <td className="job-where">{job.where}</td>
                  </tr>
                  {job.tasks.map((task) => {
                    return (
                    <>
                      <tr>
                        <td className="job-task">&#x2022; {task}</td>
                      </tr>
                    </>
                    );
                  })}
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

export default Work;