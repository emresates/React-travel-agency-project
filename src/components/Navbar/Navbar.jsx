import { Component } from "react";
import "./NavbarCss/style.css";
import { MenuItems } from "./MenuItems";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    let activeStyle = {
      color: "rgb(232, 232, 232)",
      backgroundColor:"rgb(59, 202, 186)",
      borderRadius:"5px"
    }
    return (
      <nav className="navbar-items">
        <h1 className="navbar-logo">Trippy</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
