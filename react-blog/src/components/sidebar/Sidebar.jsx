import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import axios from "axios";

const Sidebar = () => {
    const [cats, setCats] = useState([]);
    console.log(cats, "cats");
    const getCats = async () => {
        const res = await axios.get("/api/categories");
        setCats(res.data);
    };

    useEffect(() => {
        getCats();
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <div className="sidebarTitle">ABOUT ME</div>
                <img
                    className="sidebarImg"
                    src="https://images.pexels.com/photos/5561310/pexels-photo-5561310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                />
                <p>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore
                    mollit amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats?.map((cat, index) => (
                        <Link
                            key={index}
                            className="link"
                            to={`?cat=${cat.name}`}
                        >
                            <li className="sidebarListItem">{cat.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
