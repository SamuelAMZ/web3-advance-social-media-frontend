import React from "react";
import Appbar from "../components/Appbar";
import Third from "../components/Third";

const Explore = () => {
  return (
    <>
      <div className="home">
        <Appbar />
        <div className="actual-home">Notifications</div>
        <Third />
      </div>
    </>
  );
};

export default Explore;
