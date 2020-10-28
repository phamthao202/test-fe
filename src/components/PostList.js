import React, { useState, useEffect } from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postActions } from "../redux/actions/post.action";
const PostList = () => {
  const posts = useSelector((state) => state.post.posts);
  //   console.log("aaaa", experiences);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(postActions.getPost());
  }, []);
  return (
    <div className="cardlist">
      {posts && posts.length > 0 &&
        posts.map(
          (e) => <Post key={e.id} {...e} /> //tai sao lai ...e
        )}
    </div>
  );
};

export default PostList;
