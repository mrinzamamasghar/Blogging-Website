import React from "react";
import "../Blogpost/blogpostStyle.css";
import Card from "../../UI/Card/cardIndex";

function BlogpostIndex(props) {
  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">Featured</span>
          <h1 className="postTitle">Beautiful is always beautiful</h1>
          <span className="postedBy">
            postedon July 21,2016 by Sora Blogging Tips
          </span>
        </div>
      </Card>
    </div>
  );
}

export default BlogpostIndex;
