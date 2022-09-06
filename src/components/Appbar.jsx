import React from "react";
import { NavLink } from "react-router-dom";
import {
  BiHomeCircle,
  BiHash,
  BiNotification,
  BiMessageSquare,
  BiBookmark,
} from "react-icons/bi";
import { FaFeatherAlt } from "react-icons/fa";
import { TbSocial } from "react-icons/tb";
import { MdOutlineAccountCircle } from "react-icons/md";

const Appbar = () => {
  return (
    <div className="app-bar">
      <div className="logo">
        <NavLink to="/home">
          <TbSocial />
        </NavLink>
      </div>
      <div className="menu">
        <ul>
          <li className="active">
            <NavLink to="/home">
              <BiHomeCircle />
            </NavLink>
          </li>
          <li>
            <NavLink to="/explore">
              <BiHash />
            </NavLink>
          </li>
          <li>
            <NavLink to="/notification">
              <BiNotification />
            </NavLink>
          </li>
          <li>
            <NavLink to="/message">
              <BiMessageSquare />
            </NavLink>
          </li>
          <li>
            <NavLink to="/bookmark">
              <BiBookmark />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="new-post">
        <FaFeatherAlt />
      </div>
      <div className="profil">
        <MdOutlineAccountCircle />

        <p>Samuel</p>
      </div>
    </div>
  );
};

export default Appbar;
