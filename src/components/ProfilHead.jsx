import React from "react";
import { BiLinkAlt, BiCalendarEvent } from "react-icons/bi";

const ProfilHead = () => {
  return (
    <div className="profil-head">
      <div
        className="profil-head-img"
        style={{ backgroundImage: "url(/img/random.jpg)" }}
      ></div>

      <div className="profil-button">
        <div
          className="profil-main-img"
          style={{ backgroundImage: "url(/img/featured.jpg)" }}
        ></div>
        <button>Edit profile</button>
      </div>

      <div className="profil-details">
        <div className="profil-detail">
          <h4>Lorem</h4>
          <p className="profil-username">@Ipsumdolor</p>
          <p className="profil-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            repellat...
          </p>
          <div className="profil-others">
            <div>
              <BiLinkAlt />
              <p className="link">google.com</p>
            </div>
            <div>
              <BiCalendarEvent />
              <p>joined 20-09-2022</p>
            </div>
          </div>
          <div className="profil-follow">
            <div className="following">
              <span>12</span>following
            </div>
            <div className="followers">
              <span>22</span> followers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilHead;
