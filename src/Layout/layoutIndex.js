import React from "react";
import "./layoutStyle.css";
import Sidebar from "../components/Sidebar/sidebarIndex";
function LayoutIndex(props) {
  return (
    <div>
      <div className="HomeContainer">
        {props.children}
        <Sidebar />
      </div>
      {/* <div>
        <h1>This is my Footer</h1>
      </div> */}
    </div>
  );
}
export default LayoutIndex;
