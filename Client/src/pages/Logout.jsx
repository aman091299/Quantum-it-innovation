import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";

const Logout = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log("logout");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.success("Logged Out");
        navigate("/login");
    };

    return (
        <button onClick={handleSubmit}>Logout</button>
    );
};

export default Logout;
