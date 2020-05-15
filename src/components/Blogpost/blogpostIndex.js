/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import "../Blogpost/blogpostStyle.css";
import Card from "../../UI/Card/cardIndex";
import blogData from "../../data/blog.json";

function BlogpostIndex(props) {
  console.log("Blog-POst", props);
  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
  });
  const [slug, setSlug] = useState([]);

  useEffect(() => {
    const postObjId = props.match.params.slug;

    const postObj = blogData.data.find((post) => post.slug == postObjId);

    setPost(postObj);
    setSlug(slug);
  }, [post, props.match.params.slug, slug]);

  if (post.blogImage == "") return null;

  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">{post.blogCategory}</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postedBy">
            posted on {post.postedOn} by {post.author}
          </span>
        </div>
        <div className="imageheader">
          <img
            src={require("../../Assets/BlogPostImages/" + post.blogImage)}
            alt="Post Image"
          />

          <div className="postContent">
            <h3>{post.blogTitle}</h3>
            <p>{post.blogText}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default BlogpostIndex;
