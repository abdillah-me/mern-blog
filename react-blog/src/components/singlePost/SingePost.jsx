import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singePost.css";
import axios from "axios";
import { Context } from "../../context/Context";

const SingePost = () => {
    const PF = "http://localhost:5000/images/";
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});

    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    const getPost = async () => {
        const res = await axios.get("/api/posts/" + path);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
    };

    useEffect(() => {
        getPost();
    }, [path]);

    const handelDelete = async () => {
        try {
            await axios.delete("/api/posts/" + post._id, {
                data: { username: user.username },
            });
            window.location.replace("/");
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put("/api/posts/" + path, {
                username: user.username,
                title,
                desc,
            });
            setUpdateMode(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img
                        className="singlePostImg"
                        src={PF + post.photo}
                        alt=""
                    />
                )}
                {updateMode ? (
                    <input
                        type="text"
                        value={title}
                        className="singlePostTitleInput"
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ) : (
                    <h1 className="singlePostTitle">
                        {title}
                        <div className="singlePostEdit">
                            <i
                                className="singlePostIcon far fa-edit"
                                onClick={() => setUpdateMode(true)}
                            ></i>
                            <i
                                className="singlePostIcon far fa-trash-alt"
                                onClick={handelDelete}
                            ></i>
                        </div>
                    </h1>
                )}
                <div className="singlePostInfo">
                    <span>
                        Author:
                        <b className="singlePostAuthor">
                            <Link
                                className="link"
                                to={`/?username={post.username}`}
                            >
                                {post.username}
                            </Link>
                        </b>
                    </span>
                    <span>{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (
                    <textarea
                        className="singlePostDescInput"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                ) : (
                    <p className="singlePostDesc">{desc}</p>
                )}
                {updateMode && (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <button
                            className="singlePostButtonCancel"
                            onClick={() => setUpdateMode(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="singlePostButton"
                            onClick={handleUpdate}
                        >
                            Update
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SingePost;
