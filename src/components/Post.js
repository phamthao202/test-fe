import React from "react";
import "App.css";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
// import {Badge} from "react-bootstrap"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Post = ({ author, location, caption, imageUrl }) => {
  if (!author || !location || !caption || !imageUrl) {
    return <div>loading</div>;
  }
  return (
    <div className="cardItem m-5" style={{ width: "400px" }}>
      <div className="card-top d-flex " style={{ width: "400px" }}>
        <div className="card-top-left">
          <img className="img-avatar" src={author.avatarUrl} />

          <div>
            <div
              className="author"
              style={({ fontFamily: "sans-serif" }, { fontSize: "14px" })}
            >
              {author.username}
            </div>
            <div
              style={
                ({ fontFamily: "sans-serif" },
                { fontWeight: 100 },
                { fontSize: "14px" })
              }
            >
              {location}
            </div>
          </div>
        </div>
        <div className="card-top-right">
          <i class="fas fa-ellipsis-h icon-top-right"></i>
        </div>
      </div>
      <div className="card-img-parent">
        <img
          className="card-img-child"
          src={imageUrl}
          style={{ width: "400px" }}
        />
      </div>

      <div className="comment-like-area">
        <div className="heart-online">
          <div className="icon-area">
            <h4>
              <i className="far fa-heart"></i>
            </h4>
            <h4>
              <i class="far fa-bookmark"></i>
            </h4>
          </div>
          <div className="like">
            <img
              className="imgLike"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRtEDhPtbt0L8Jz72k0osPfDp7Oxd9w2kh2g&usqp=CAU"
            />
            <div style={({ fontFamily: "sans-serif" }, { fontSize: "14px" })}>
              Liked by{" "}
              <span
                className="author pr-1"
                style={({ fontFamily: "sans-serif" }, { fontSize: "14px" })}
              >
                Linhle
              </span>
              <span
                style={({ fontFamily: "sans-serif" }, { fontSize: "14px" })}
              >
                and
              </span>
              <span
                style={({ fontFamily: "sans-serif" }, { fontSize: "14px" })}
                className="author"
              >
                12 others
              </span>
            </div>
          </div>
          <div className="comment d-flex">
            <div
              className="author pr-2 pl-2"
              style={({ fontFamily: "sans-serif" }, { fontSize: "14px" })}
            >
              {author.username}
            </div>
            <div style={({ fontFamily: "sans-serif" }, { fontSize: "14px" })}>
              {caption}
            </div>
          </div>
          <div
            className="hour"
            style={({ fontFamily: "sans-serif" }, { fontSize: "12px" })}
          >
            16 HOURS AGO
          </div>
        </div>
      </div>
      <div className="input-area">
        <input className="input" placeholder="Add a comment..."></input>
        <div className="post">Post</div>
      </div>
    </div>
  );
};

export default Post;
