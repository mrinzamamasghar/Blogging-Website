import React from "react";
import "./homeStyle.css";
import Card from "../../UI/Card/cardIndex";
import Sidebar from "../../components/Sidebar/sidebarIndex";
import blogData from "../../data/blog.json";
import RecentPosts from "../../container/Home/Recent Posts/recentPostIndex";
import Layout from "../../Layout/layoutIndex";
import { Redirect } from "react-router-dom";

const SidebarImage = (props) => {
  return (
    <div style={{ height: `${props.secondSec}px` }}>
      <img src={props.src} alt="sasd" />
    </div>
  );
};

const ImageGallary = (props) => (
  <div className="homeSec">
    <section className="firstSection" style={{ width: props.largeWidth }}>
      <div style={{ height: `${props.galheight}px` }}>
        <img
          src={require("../../Assets/BlogPostImages/" + props.imageArr[4])}
          alt="homeImage"
        />
      </div>
    </section>

    <section className="secondSection" style={{ width: props.smallWidth }}>
      <SidebarImage
        src={require("../../Assets/BlogPostImages/" + props.imageArr[2])}
        secondSec={props.secondSec}
      />
      <SidebarImage
        src={require("../../Assets/BlogPostImages/" + props.imageArr[1])}
        secondSec={props.secondSec}
      />
      <SidebarImage
        src={require("../../Assets/BlogPostImages/" + props.imageArr[3])}
        secondSec={props.secondSec}
      />
    </section>
  </div>
);

function Home(props) {
  const galheight = 450;
  const secondSec = galheight / 3;

  const imgarr = blogData.data.map((post) => post.blogImage);

  return (
    <div>
      <Card className="carrd">
        <ImageGallary
          secondSec={secondSec}
          galheight={galheight}
          largeWidth="70%"
          smallWidth="30%"
          imageArr={imgarr}
        />
      </Card>
      <Layout>
        <RecentPosts style={{ width: "70%" }} />
      </Layout>
    </div>
  );
}

export default Home;
