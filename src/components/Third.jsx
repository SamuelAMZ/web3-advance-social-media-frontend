import React from "react";
import WhoToFollow from "./WhoToFollow";
import { FaFeatherAlt } from "react-icons/fa";

const Third = () => {
  return (
    <div className="third">
      <div className="who-follow">
        <WhoToFollow />
      </div>
      <div
        className="featured"
        style={{ backgroundImage: "url(/img/featured.jpg)" }}
      >
        <div className="title">
          <h3>kylian mbappé</h3>
          <p>12,100 post about this</p>
        </div>
        <div className="post-input">
          <form>
            <input type="text" placeholder="Write Your Post" />
            <button>
              <FaFeatherAlt />
            </button>
          </form>
        </div>
      </div>
      <div
        className="ad"
        style={{ backgroundImage: "url(/img/login-img.jpg)" }}
      >
        <div>
          <h3>Check out my github repo lol</h3>
          <p>Fun projects</p>
        </div>
        <button>Go !!!</button>
      </div>
    </div>
  );
};

export default Third;
