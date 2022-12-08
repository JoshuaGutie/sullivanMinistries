import React, { Component } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Fab from "@mui/material/Fab";
import {Link} from 'react-scroll'



class MobileNav extends Component {
    constructor() {
      super();
      this.state = {
        isShow: false,
      };
      this.createText = this.createText.bind(this);
    }
  
    createText() {
      console.log(this.state.isShow);
      if (this.state.isShow === false) {
        this.setState({ isShow: true });
      } else {
        this.setState({ isShow: false });
      }
    }
  
    render() {
      return (
        <div className="mobileNavContainer">
          <div class="mobileNav">
            <Fab style={{ margin: "auto 0 auto 0" }}>
              <MenuIcon
                fontSize="large"
                aria-label="save"
                onClick={this.createText}
              />
            </Fab>
          </div>
          {this.state.isShow && (
            <div className="mobileLinks">
              <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
              <li><Link activeClass="active" to="books" spy={true} smooth={true} onClick={this.createText}>Books</Link></li>
            <li><Link activeClass="active" to="about" spy={true} smooth={true} onClick={this.createText}>About</Link></li>

  
              </ul>
            </div>
          )}
        </div>
      );
    }
  }
  
  export default MobileNav;