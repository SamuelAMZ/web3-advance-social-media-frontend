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
import { IoSettingsOutline } from "react-icons/io5";

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
            <span>Home</span>
          </li>
          <li>
            <NavLink to="/explore">
              <BiHash />
            </NavLink>
            <span>Explore</span>
          </li>
          <li>
            <NavLink to="/notification">
              <BiNotification />
            </NavLink>
            <span>Notification</span>
          </li>
          <li>
            <NavLink to="/bookmark">
              <BiBookmark />
            </NavLink>
            <span>Bookmark</span>
          </li>
          <li>
            <NavLink to="/profil">
              <MdOutlineAccountCircle />
            </NavLink>
            <span>Profil</span>
          </li>
          <li>
            <NavLink to="/settings">
              <IoSettingsOutline />
            </NavLink>
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="new-post">
        <FaFeatherAlt />
      </div>
      <NavLink to="/profil">
        <div className="profil">
          <MdOutlineAccountCircle />
          <p>Samuel</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Appbar;
