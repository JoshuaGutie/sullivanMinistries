import React, { Component } from "react";
import Image from "next/dist/client/image";
import ministries from "../public/images/ministries.png"

class Nav extends Component {
  render() {
    return (
      <div className="navContainer">
        <div className="navLogo"><Image src={ministries} alt="logo" className="logo" /></div>
      </div>
    );
  }
}

export default Nav;
