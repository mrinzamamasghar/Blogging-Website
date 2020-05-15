import React from "react";
import "./postStyle.css";
import Blogpost from "../../components/Blogpost/blogpostIndex";
import SideBar from "../../components/Sidebar/sidebarIndex";
import LayoutIndex from "../../Layout/layoutIndex";
function PostIndex(props) {
  return (
    <section className="container">
      {console.log("in post index", props)}
      <LayoutIndex>
        <Blogpost {...props} />
      </LayoutIndex>
    </section>
  );
}

export default PostIndex;
