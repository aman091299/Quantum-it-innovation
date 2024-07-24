import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("http://localhost:4000/api/v1/auth/signup", data);
      const { success, message } = res.data;
      if (success) {
        toast.success("Signup Successful");
        navigate("/login");
      } else {
        toast.error("User Already Registered, Please Login");
      }
    } catch (error) {
      console.error("SIGNUP API ERROR............", error);
      toast.error("Signup Failed");
    }
  };

  return (
    <div className="signup">
      <div className="signup-form">
        <h2>SIGN UP</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <div className="logoInput">
              {/* SVG icon */}
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
              {/* SVG icon */}
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
              {/* SVG icon */}
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
              {/* SVG icon */}
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
         <div className="orText">OR</div>
        <button className="login-button" onClick={() => navigate("/login")}>LOGIN</button>
      </div>
    </div>
  );
}

export default Signup;
