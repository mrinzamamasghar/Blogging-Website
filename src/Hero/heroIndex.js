import React from "react";
import "./heroStyle";
import Card from "../UI/Card/cardIndex";
import Logo from "../components/Logo/logoIndex";
import Navbar from "../components/navbar/NavbarIndex";
function HeroIndex(props) {
  return (
    <div>
      <Card>
        <div style={{ padding: "50px 0" }}>
          <Logo />
        </div>
        <Navbar />
      </Card>
    </div>
  );
}

export default HeroIndex;
