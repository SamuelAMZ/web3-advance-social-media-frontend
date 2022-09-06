import React from "react";
import Appbar from "../components/Appbar";
import Third from "../components/Third";
import TopPost from "../components/TopPost";
import Posts from "../components/Posts";

const Home = () => {
  return (
    <>
      <div className="home">
        <Appbar />
        <div className="actual-home">
          <TopPost />
          <Posts />
        </div>
        <Third />
      </div>
    </>
  );
};

export default Home;
