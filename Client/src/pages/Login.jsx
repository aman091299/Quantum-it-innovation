import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './login.css';
import { toast } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("http://localhost:4000/api/v1/auth/login", data);
      const { success, message, user, token } = res.data;

      if (success) {
        toast.success("Login Successful");
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(token));
        navigate("/");
      } else {
        toast.error("Login Unsuccessful: " + message);
      }
    } catch (error) {
      console.error("LOGIN API ERROR:", error);
      toast.error("Login Failed");
    }
  };

  return (
    <div className="Signin">
      <div className="signup-form">
        <h2>SIGN IN</h2>
        <div className="circle">
          <p className="circle-inner">
            <svg width="100" height="100" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="#8C92AD" cx="12" cy="6" r="4" d="M2 0.75a0.5 0.5 0 0 1 -0.5 0.5 0.5 0.5 0 0 1 -0.5 -0.5 0.5 0.5 0 0 1 1 0" />
              <path fill="#8C92AD" d="M2.5 2.186c0 0.309 0 0.564 -1 0.564S0.5 2.5 0.5 2.186 0.95 1.623 1.5 1.623s1 0.25 1 0.564" />
            </svg>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <div className="logoInput">
              <svg width="22" height="22" viewBox="0 -0.069 0.55 0.55" xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M0.275 0.343 0 0.1V0.412h0.55V0.1zm0 -0.073L0 0.027V0h0.55v0.027z" fillRule="evenodd" />
              </svg>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="input-container">
            <div className="logoInput">
              <svg width="22" height="22" viewBox="0 0 0.88 0.88" xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M0.578 0.055a0.247 0.247 0 0 0 -0.237 0.319L0.055 0.66v0.165h0.165l0.286 -0.286A0.247 0.247 0 1 0 0.578 0.055m0 0.44a0.193 0.193 0 0 1 -0.056 -0.008l-0.032 -0.01 -0.023 0.023 -0.087 0.087L0.341 0.55 0.302 0.589l0.038 0.038 -0.044 0.044L0.259 0.632 0.22 0.671l0.038 0.038L0.197 0.77H0.11v-0.087l0.27 -0.27 0.023 -0.023 -0.01 -0.032A0.193 0.193 0 1 1 0.578 0.495" />
                <path fill="white" cx="22" cy="10" r="2" d="M0.66 0.275A0.055 0.055 0 0 1 0.605 0.33A0.055 0.055 0 0 1 0.55 0.275A0.055 0.055 0 0 1 0.66 0.275z" />
              </svg>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
                },
              })}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>
          <button type="submit">LOGIN</button>
          <div className="orText">OR</div>
          <button type="button" className="signup-button" onClick={() => navigate("/signup")}>SIGN UP</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
