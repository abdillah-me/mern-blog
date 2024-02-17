import React, { useEffect, useState } from "react";
import "./homepage.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import axios from "axios";
import { useLocation } from "react-router-dom";

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    const fetchPosts = async () => {
        const res = await axios.get("/api/posts");
        console.log(res, "fetchPosts");
        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, [search]);

    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    );
};

export default HomePage;
