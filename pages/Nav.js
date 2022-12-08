import React, { Component } from "react";
import Image from "next/dist/client/image";
import ministries from "../public/images/ministries.png"
import { useSpring, animated as a } from "react-spring";
import { Link } from "react-scroll";

function Links() {
  const props = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: -40 },
    config: { friction: 10 },
    delay: 1000,
  });

  return (
    <a.div style={props} className="links">
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
        }}
      >

        <li className="underlined" >
          <Link  to="books" spy={true} smooth={true}>
            Books
          </Link>
        </li>
        <li className="underlined">
          <Link activeClass="active" to="about" spy={true} smooth={true}>
            About
          </Link>
        </li>
      </ul>
    </a.div>
  );
}

class Nav extends Component {
  render() {
    return (
      <div className="navContainer">
        <div className="navLogo"><Image src={ministries} alt="logo" className="logo" /></div>
        <Links />
      </div>
    );
  }
}

export default Nav;
