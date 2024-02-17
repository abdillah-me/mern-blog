import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
    const PF = "http://localhost:5000/images/";
    return (
        <div className="post">
            {post.photo !== "" && (
                <img className="postImg" src={PF + post.photo} alt="" />
            )}
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        {post.categories.map((category, index) => {
                            return (
                                <Link
                                    className="link"
                                    to={"/posts?cat=" + category}
                                    key={index}
                                >
                                    {category.name ?? "Unknown"}
                                </Link>
                            );
                        })}
                    </span>
                </div>
                <span className="postTitle">
                    <Link to={"/post/" + post._id} className="link">
                        <span>{post.title}</span>
                    </Link>
                </span>
                <hr />
                <span className="postDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    );
};

export default Post;
