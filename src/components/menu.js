import React, { Component } from 'react';
import {
  Nav, 
  NavItem,
  Navbar,
  NavLink, 
  UncontrolledDropdown, 
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import {Link, withPrefix} from "gatsby"

class Menu extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  

  render() {
    var menuitems = 
    [
      <NavLink>
        <Link to={"/"} >Character Design</Link>
      </NavLink>,
      <NavLink>
        <Link to={"/story/"}>Story</Link>
      </NavLink>,
      <NavLink>
        <Link to={"/shortfilms/"}>Short Films</Link>
      </NavLink>,
      <NavLink>
        <Link to={"/about/"}>About</Link>
      </NavLink>,
    ]

    return (
      <div>
      <div className = "mobile-only topnav">
        <a>
            <Link to={"/mobilemenu"}><img src = "../../images/dropdown.png" width = "50px"/></Link>
        </a>
      </div>
      <div className="desktop-only menu">
                    <Navbar>
                        <Nav className="m-auto">
                        {menuitems}
                        </Nav>
                    </Navbar>
      </div>
      </div>
    );
  }
}

export default Menu;