import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("api/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    };
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    className="registerInput"
                    type="text"
                    placeholder="Enter your username..."
                />
                <label>Email</label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="registerInput"
                    type="text"
                    placeholder="Enter your email..."
                />
                <label>Password</label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="registerInput"
                    type="password"
                    placeholder="Enter your password..."
                />
                <button
                    className="registerButton"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Register
                </button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">
                    Login
                </Link>
            </button>
            {error && (
                <span style={{ color: "red", marginTop: "10px" }}>
                    Something went wrong!
                </span>
            )}
        </div>
    );
};

export default Register;
