import React, { Component } from 'react';
import {Nav, NavItem, NavLink, Navbar} from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";

class Menu extends Component {
  
  render() {
    var items=[
      <NavItem>
          <Link class= "navlink" activeClass="active" to="welcome" href= "" spy={true} smooth={true} duration= {800}>Top</Link>
      </NavItem>,
      <NavItem>
          <Link class= "navlink" activeClass="active" to="about" href= "" spy={true} smooth={true} duration= {800}>About</Link>
      </NavItem>,
      <NavItem>
          <Link class= "navlink" activeClass="active" to="gallery" href= "" spy={true} smooth={true} duration= {800}> Gallery</Link>
      </NavItem>,
      <NavItem>
            <Link class= "navlink" activeClass="active" to="activities" href= "" spy={true} smooth={true} duration= {800}> Activities</Link>
      </NavItem>,
    ]
    return (
      <div class = "menu">
      <Navbar light expand="md" style = {{backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
        <Nav style = {{width: "100%"}}>
          {items}
        </Nav>
      </Navbar>
      </div>
    );

  }
}

export default Menu;
