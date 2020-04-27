import React from "react";
import "./postStyle.css";
import Blogpost from "../../components/Blogpost/blogpostIndex";
import SideBar from "../../components/Sidebar/sidebarIndex";
function PostIndex(props) {
  return (
    <section className="container">
      <Blogpost />
      <SideBar />
    </section>
  );
}

export default PostIndex;
