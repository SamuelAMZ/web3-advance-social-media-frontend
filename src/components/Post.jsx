import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiCommentDetail, BiRepost, BiLike } from "react-icons/bi";

const Post = () => {
  return (
    <div className="post" style={{ backgroundImage: "url(/img/random.jpg)" }}>
      {/* user */}
      <div className="user">
        <MdOutlineAccountCircle />
        <div className="user-detail">
          <p className="user-first">Github</p>
          <p className="user-name">@github</p>
        </div>
        <p className="date">19/09</p>
      </div>

      <div className="second">
        {/* desc */}
        <div className="desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            deleniti quidem officia ...
          </p>
        </div>

        {/* actions */}
        <div className="actions">
          <div className="comment">
            <BiCommentDetail />
            <p>122</p>
          </div>
          <div className="repost">
            <BiRepost />
            <p>12k</p>
          </div>
          <div className="like">
            <BiLike />
            <p>4k</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
