import React from "react";

import FollowElm from "./FollowElm";

const WhoToFollow = () => {
  return (
    <>
      <div className="title">
        <p>Who to follow</p>
      </div>
      <div className="elm-parent">
        <FollowElm />
        <FollowElm />
        <FollowElm />
      </div>
      <button>Show More</button>
    </>
  );
};

export default WhoToFollow;
