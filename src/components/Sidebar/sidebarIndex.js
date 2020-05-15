import React, { useState, useEffect } from "react";

import Card from "../../UI/Card/cardIndex";
import "./sidebarStyle.css";
import { NavLink } from "react-router-dom";
import blogData from "../../data/blog.json";

function SidebarIndex(props) {
  console.log("in sidebar index : ", props);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const dataPost = blogData.data;

    setPosts(dataPost);
  }, []);

  return (
    <div className="sidebarcontainer">
      <Card
        style={{
          marginBottom: "20px",
          padding: "15px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardheader">
          <span>About us</span>
        </div>
        <div className="imagecontainer">
          <img
            src={require("../../Assets/BlogPostImages/inzi.jpg")}
            alt="imageprofile"
          />
        </div>

        <div>
          <p className="personalinfo">
            My name is Inzamam Asghar.I am a Software Engineer with the Skills
            of Full-Stack Development...:)
          </p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "15px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardheader">
          <span>Featured</span>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "15px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardheader">
          <span>Recent Post</span>
        </div>

        {posts.map((post) => {
          return (
            <NavLink to={`/post/${post.slug}`} key={post.id}>
              <div className="recentPosts">
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </div>
            </NavLink>
          );
        })}
      </Card>
    </div>
  );
}

export default SidebarIndex;
