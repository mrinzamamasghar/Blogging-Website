import React from "react";
import "./headerStyle.css";

function Header(props) {
  return (
    <header className="header">
      <nav className="headerMenu">
        <a href="#">Home</a>
        <a href="#">About-Us</a>
        <a href="#">Contact Us</a>
      </nav>
      <div>social links</div>
    </header>
  );
}

export default Header;
