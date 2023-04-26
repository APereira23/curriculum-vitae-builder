import React, { Component } from "react";
import { bio } from "./data.js";


class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: bio
    }
    this.isUrl = this.isUrl.bind(this);
  }

  isUrl(string) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(string);
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
                    if (Number.isInteger(parseInt(field[0]))) { //checks if element has a key-prop combo, or is a single prop
                      if (this.isUrl(field[1])) {
                        return (
                          <tr>
                            <td>
                              <a className="bio-prop" href={field[1]}>{field[1]}</a>
                            </td>  
                          </tr>
                        );
                      }
                      return (
                        <tr>
                          <td className="bio-prop">{field[1]}</td>  
                        </tr>
                        );
                    } else {
                      return (
                        <tr>
                          <td className="bio-key">{field[0]}:</td>
                          <td className="bio-prop">{field[1]}</td>  
                        </tr>
                      );
                    }
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