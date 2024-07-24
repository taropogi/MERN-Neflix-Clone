import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export async function signup(req, res) {
  try {
    const { email, password, username } = req.body; // need parser: the app.use(express.json())  in the server.js

    if (!email || !password || !username)
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });

    // make sure emails are valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email))
      return res.status(400).json({
        success: false,
        message: "Invalid Email",
      });

    if (password.length < 6)
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });

    const existingUserByEmail = await User.findOne({
      email,
    });

    if (existingUserByEmail)
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });

    const existingUserByUsername = await User.findOne({
      username,
    });

    if (existingUserByUsername)
      return res.status(400).json({
        success: false,
        message: "Username already exists",
      });

    const salt = await bcryptjs.genSalt(10); // salt rounds. ensure that same password has difference hashed values
    const hashedPW = await bcryptjs.hash(password, salt);

    const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];
    const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];
    const newUser = new User({
      email,
      password: hashedPW,
      username,
      image,
    });

    await newUser.save();

    // 201 means resource created
    res.status(201).json({
      success: true,
      message: "User successfully created",
      user: {
        ...newUser._doc,
        password: "", // remove password from the response
      },
    });
  } catch (error) {
    console.log("Signup error: " + error.message);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}

export async function login(req, res) {
  res.send("login");
}

export async function logout(rea, res) {
  res.send("logout");
}
