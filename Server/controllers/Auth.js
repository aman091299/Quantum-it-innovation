
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require('cookie');
require("dotenv").config();





//signUp
exports.signup = async (req, res) => {
    try {
        console.log("hey inside signup")
        //data fetch from request ki body
        const {
            name,
            email,
            password,
            dob
           
        } = req.body;

        //validate krlo
        if (!name || !email || !password || !dob) {
            return res.status(200).json({
                success: false,
                message: 'All fields are mandatory'
            })
        }

        //check user already exist or not
        const checkUserExist = await User.findOne({ email });
        console.log("checkUserExist", checkUserExist)

        if (checkUserExist) {
            return res.status(200).json({
                success: false,
                message: "user already exist ,login please"
            })
        }



        //hashPassword
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        // Create the user

        //created entry in dp
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            dob
        })
        console.log(user)
        //return response

        return res.status(200).json({
            success: true,
            message: "user is registered sucessfully",
            user
        })



    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: `user cannot be register,please try again ${error}`,
        })
    }
}

//Log in

exports.login = async (req, res) => {
    try {
        //get data from req body
        const { email, password } = req.body;
        //validation data
        if (!email || !password) {
            return res.status(403).json({
                success: false,
                message: 'please enter email and password '
            })
        }
        const user = await User.findOne({ email })

        //user not exist
        if (!user) {
            return res.status(200).json({
                success: false,
                message: 'please signup',
            })
        }

        //user exist
        //check password
        const compare = await bcrypt.compare(password, user.password);
        if (!compare) {
            return res.status(200).json({
                success: false,
                message: 'incorrect password '
            })
        }
        //generate token

        const payload = {
            email: user.email,
            id: user._id,
            
        }
        console.log("ye payload", payload)
        //1 day me expire
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '24h',
        });
        user.token = token;
        user.password = undefined;

        //cookie
        //3 DAY ME EXPIRE
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        }
        res.cookie('token', token, options).status(200).json({
            success: true,
            token,
            user,
            message: "user successfully login"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "login failed please try again",
        })
    }
}







