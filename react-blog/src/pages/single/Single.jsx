import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SingePost from "../../components/singlePost/SingePost";
import "./single.css"

const Single = () => {
    return (
        <div className="single">
            <SingePost/>
            <Sidebar />
        </div>
    );
};

export default Single;
 