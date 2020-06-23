import React from "react";
import Card from "../../../UI/Card/cardIndex";
import "../Recent Posts/recentPostIndex.css";

function RecentPostIndex(props) {
  return (
    <div style={props.style}>
      <Card style={{ marginBottom: "20px" }}>
        <div className="postImageWrapper">
          <img
            src={require("../../../Assets/BlogPostImages/girlreading.jpg")}
            alt="homeImage"
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <span>Fashion</span>
          <h2>Memories From Last Summer</h2>
          <span> posted on Feb 21, 2018 by Buland Khan</span>
          <p>
            Blessed you're lights. There. Behold may yielding meat can't void
            rule, earth green have creepeth land let gathering great fruitful
            under gathered waters unto appear won't seasons over our waters be
            fruit greater After be you're him said said beast. Dominion him that
            let grass. Creeping own. Forth, fruitful day first don't dominion,
            behold, every.....
          </p>
          {/* <button>Read More</button> */}
        </div>
      </Card>
      {/* <Card style={{ marginBottom: "20px" }}> card1</Card> */}
    </div>
  );
}

export default RecentPostIndex;
