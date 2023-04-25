import React, { Component } from "react";
import { bio } from "./data.js";


class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: bio
    }

  }
  
  render() {
    return (
      <div className="bio-container">
        <table>
          <tbody>
            {bio.map((cat) => {
              return (
                <>
                  <tr>
                    <td className="bio-category">{cat.title}</td>
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
                  <br></br>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Bio;