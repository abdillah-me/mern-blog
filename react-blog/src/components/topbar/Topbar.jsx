import React, { useContext } from "react";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaPinterestSquare,
    FaSearch,
    FaTwitterSquare,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import "./topbar.css";
import { Context } from "../../context/Context";

const Topbar = () => {
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }
    return (
        <div className="top">
            <div className="topleft">
                <FaFacebookSquare className="topIcon" />
                <FaInstagramSquare className="topIcon" />
                <FaPinterestSquare className="topIcon" />
                <FaTwitterSquare className="topIcon" />
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to={"/"}>
                            HOME
                        </Link>
                    </li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">
                        <Link className="link" to={"/write"}>
                            WRITE
                        </Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="link" to={"/settings"}>
                        <img className="topImg" src={user.profilePic} alt="" />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to={"/login"}>
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to={"/register"}>
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <FaSearch className="topSearchIcon" />
            </div>
        </div>
    );
};

export default Topbar;
