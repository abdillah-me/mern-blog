import React from "react";
import "./posts.css";
import Post from "../post/Post";

const Posts = ({ posts }) => {
    return (
        <div className="posts">
            {posts.map((postItem, index) => (
                <Post key={index} post={postItem} />
            ))}
        </div>
    );
};

export default Posts;
