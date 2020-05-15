import React from "react";
import "./headerStyle.css";

function Header(props) {
  return (
    <header className="header">
      <nav className="headerMenu">
        <a href="http://localhost:3000/">Home</a>
        <a href="http://localhost:3000/">About-Us</a>
        <a href="http://localhost:3000/">Contact Us</a>
      </nav>
      <div>social links</div>
    </header>
  );
}

export default Header;
