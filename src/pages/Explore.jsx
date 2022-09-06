import React from "react";
import Appbar from "../components/Appbar";
import Third from "../components/Third";
import Posts from "../components/Posts";

const Explore = () => {
  return (
    <>
      <div className="home">
        <Appbar />
        <div className="actual-home">
          <Posts />
        </div>
        <Third />
      </div>
    </>
  );
};

export default Explore;
