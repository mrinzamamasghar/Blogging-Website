import React, { useState } from "react";
import "./NavbarStyle.css";
import { NavLink } from "react-router-dom";
function NavBarIndex(props) {
  const formSubmit = (e) => {
    e.preventDefault();
    alert("czjkcxz");
  };

  const [state, setState] = useState(true);

  const inputHandler = () => {
    setState(!state);
  };
  const searchclass = state ? "searchinput" : "searchinputout";

  return (
    <div className="navbar">
      <ul className="navBarMenu">
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/post">Post</NavLink>
          <NavLink to="/contact-us">Contact-Us</NavLink>
          <NavLink to="/about-us">About-Us</NavLink>
        </li>
      </ul>
      <div className="search">
        <form onSubmit={formSubmit}>
          <input type="text" className={searchclass} placeholder="Search" />
          <img
            onClick={inputHandler}
            className="searchicon"
            src={require("../../Assets/Icons/search.png")}
            alt="Search"
          />
        </form>
      </div>
    </div>
  );
}

export default NavBarIndex;
