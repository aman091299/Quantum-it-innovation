import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';
import Logout from './Logout';

const Nav = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;

    return (
        <nav className="nav-container">
            <button onClick={() => navigate("/")}>Home</button>
            <div>
                {token ? (
                    <Logout />
                ) : (
                    <>
                        <button onClick={() => navigate("/login")}>Login</button>
                        <button onClick={() => navigate("/signup")}>Sign Up</button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Nav;
