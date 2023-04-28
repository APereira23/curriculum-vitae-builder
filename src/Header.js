import React, { Component } from "react";
import photo from "./photo.jpeg";
import { bio } from "./data.js"

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-container">
        <div className="photo-container">
          <img src={photo} className="header-photo" />
        </div>
        <h1 className="header-name section-title">{bio[0].contents.Nome}</h1>
      </div>
    );
  }
}

export default Header;