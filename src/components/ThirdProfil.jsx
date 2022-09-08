import React from "react";
import WhoToFollow from "./WhoToFollow";
import { FaFeatherAlt } from "react-icons/fa";

const ThirdProfil = () => {
  return (
    <div className="third-profil">
      <div className="images">
        <div style={{ backgroundImage: "url(/img/featured.jpg)" }}></div>
        <div style={{ backgroundImage: "url(/img/random.jpg)" }}></div>
        <div style={{ backgroundImage: "url(/img/random1.jpg)" }}></div>
        <div style={{ backgroundImage: "url(/img/random.jpg)" }}></div>
        <div style={{ backgroundImage: "url(/img/login-img.jpg)" }}></div>
        <div style={{ backgroundImage: "url(/img/featured.jpg)" }}></div>
      </div>
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
    </div>
  );
};

export default ThirdProfil;
