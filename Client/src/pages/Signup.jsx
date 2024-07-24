import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import './Signup.css';
import { Navigate } from "react-router-dom"
import { toast } from "react-hot-toast"

function Signup(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    try {
      const res=await axios.post("http://localhost:4000/api/v1/auth/signup",
        data
      )
      const success=res.data.success
      const message=res.data.message
      console.log("success",success);
      console.log("res",res);
      alert(message);
     
      if(success){
        <Navigate to="/" />
         toast.success("Signup Successful")
      }
      else {
        toast.failed("Signup UnSuccessful")
      }
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error("Signup Failed");
      <Navigate to="/signup" />
    }
     
     
    
  };
  
  return (
    <div className="signup">
      <div className="signup-form">
        <h2>SIGN UP</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <div className="logoInput">
              <svg width="22" height="22" viewBox="0 0 0.66 0.66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M0.44 0.165A0.11 0.11 0 0 1 0.33 0.275A0.11 0.11 0 0 1 0.22 0.165A0.11 0.11 0 0 1 0.44 0.165z"/>
                <path fill="white" d="M0.55 0.481c0 0.068 0 0.124 -0.22 0.124s-0.22 -0.055 -0.22 -0.124S0.209 0.357 0.33 0.357s0.22 0.055 0.22 0.124"/>
              </svg>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div className="input-container">
            <div className="logoInput">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 13.328 13.328">
                <path fill="#ffff" d="M10.801 1.08h-0.672V0.571A0.572 0.572 0 0 0 9.557 0h-0.208a0.572 0.572 0 0 0 -0.571 0.571v0.509H4.781V0.571A0.572 0.572 0 0 0 4.209 0h-0.208a0.572 0.572 0 0 0 -0.571 0.571v0.509H2.527c-0.851 0 -1.543 0.693 -1.543 1.543v9.163c0 0.851 0.693 1.543 1.543 1.543h8.274c0.851 0 1.543 -0.693 1.543 -1.543V2.622c0 -0.851 -0.693 -1.543 -1.543 -1.543m0.614 10.706a0.616 0.616 0 0 1 -0.614 0.614H2.527a0.616 0.616 0 0 1 -0.614 -0.614V2.622a0.616 0.616 0 0 1 0.614 -0.614h0.904v0.73a0.572 0.572 0 0 0 0.571 0.571h0.208a0.572 0.572 0 0 0 0.571 -0.571v-0.729h3.997v0.73a0.572 0.572 0 0 0 0.571 0.571h0.208a0.572 0.572 0 0 0 0.571 -0.571v-0.73h0.672a0.616 0.616 0 0 1 0.614 0.614z"/>
              </svg>
            </div>
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              {...register('dob', { required: 'Date of Birth is required' })}
            />
            {errors.dob && <p className="error">{errors.dob.message}</p>}
          </div>
          <div className="input-container">
            <div className="logoInput">
              <svg width="22" height="22" viewBox="0 -0.069 0.55 0.55" xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M0.275 0.343 0 0.1V0.412h0.55V0.1zm0 -0.073L0 0.027V0h0.55v0.027z" fill-rule="evenodd"/>
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
                <path fill="white" d="M0.578 0.055a0.247 0.247 0 0 0 -0.237 0.319L0.055 0.66v0.165h0.165l0.286 -0.286A0.247 0.247 0 1 0 0.578 0.055m0 0.44a0.193 0.193 0 0 1 -0.056 -0.008l-0.032 -0.01 -0.023 0.023 -0.087 0.087L0.341 0.55 0.302 0.589l0.038 0.038 -0.044 0.044L0.259 0.632 0.22 0.671l0.038 0.038L0.197 0.77H0.11v-0.087l0.27 -0.27 0.023 -0.023 -0.01 -0.032A0.193 0.193 0 1 1 0.578 0.495"/>
                <path fill="white" cx="22" cy="10" r="2" d="M0.66 0.275A0.055 0.055 0 0 1 0.605 0.33A0.055 0.055 0 0 1 0.55 0.275A0.055 0.055 0 0 1 0.66 0.275z"/>
                <path fill="none" data-name="&amp;lt;Transparent Rectangle&amp;gt;" d="M0 0h0.88v0.88H0z"/>
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
          <button type="submit">SIGN UP</button>
        </form>
      </div>

    </div>
  );
}

export default  Signup;