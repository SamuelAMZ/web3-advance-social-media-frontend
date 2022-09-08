import React, { useState } from "react";
import Post from "./Post";

const ProfilBody = () => {
  const activeTabPosts = (e, active, tab) => {
    e.target.parentElement.children[0].classList.remove(active);
    e.target.parentElement.children[1].classList.remove(active);
    e.target.parentElement.children[2].classList.remove(active);
    e.target.parentElement.children[3].classList.remove(active);
    e.target.classList.add(active);
    setTab(tab);
  };

  const [tab, setTab] = useState("posts");
  const posts = () => {
    return (
      <div className="profil-posts">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    );
  };
  const likes = () => {
    return (
      <div className="profil-posts">
        <Post />
      </div>
    );
  };
  const replies = () => {
    return (
      <div className="profil-posts">
        <Post />
      </div>
    );
  };

  return (
    <div className="profil-body">
      <div className="tab">
        <p
          onClick={(e) => activeTabPosts(e, "active", "posts")}
          className="active"
        >
          Posts
        </p>
        <p onClick={(e) => activeTabPosts(e, "active", "replies")}>
          Post & Replies
        </p>
        <p onClick={(e) => activeTabPosts(e, "active", "media")}>Media</p>
        <p onClick={(e) => activeTabPosts(e, "active", "likes")}>Likes</p>
      </div>
      {tab === "posts" && posts()}
      {tab === "replies" && replies()}
      {tab === "media" && posts()}
      {tab === "likes" && likes()}
    </div>
  );
};

export default ProfilBody;
