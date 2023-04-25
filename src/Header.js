import React, { Component } from "react";
import photo from "./photo.jpeg";

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
        <h1 className="header-name">António Flávio Marques Pereira</h1>
      </div>
    );
  }
}

export default Header;