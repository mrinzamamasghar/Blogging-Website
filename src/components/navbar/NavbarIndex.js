import React, { useState } from "react";
import "./NavbarStyle.css";
import {Link} from 'react-router-dom' 
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
          <Link to="/">Home</Link>
          <Link to="/post">Post</Link>
          <Link to="/contact-us">Contact-Us</Link>
          <Link to="/about-us">About-Us</Link>
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
