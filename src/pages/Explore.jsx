import React from "react";
import Appbar from "../components/Appbar";
import Third from "../components/Third";
import Posts from "../components/Posts";
import ExploreHead from "../components/ExploreHead";

const Explore = () => {
  return (
    <>
      <div className="explore">
        <Appbar />
        <div className="actual-explore">
          <ExploreHead />
          <Posts />
        </div>
        <Third />
      </div>
    </>
  );
};

export default Explore;
