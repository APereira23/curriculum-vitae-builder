import React, { Component } from "react";
import { bio } from "./data.js";


class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: bio
    }

  }
  
  log = () => {console.log()};

  render() {
    return (
      <div className="bio-container">
        {console.clear()}
        {this.log()}
        <table>
          <thead>
            {bio.map((cat) => {
              return (
                <>
                  <tr>
                    <td>{cat.title}</td>
                  </tr>
                  <tr>
                  {Object.entries(cat.contents).map((field) => {
                    return (Number.isInteger(parseInt(field[0]))) ? (
                      <tr>
                        <td className="bio-prop">{field[1]}</td>  
                      </tr>
                    ) : (
                      <tr>
                        <td className="bio-key">{field[0]}:</td>
                        <td className="bio-prop" >{field[1]}</td>  
                      </tr>
                    );
                  })}
                  </tr>
                </>
              );
            })}
          </thead>
        </table>
      </div>
    );
  }
}

export default Bio;