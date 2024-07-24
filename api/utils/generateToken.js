import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "30d" });

  res.cookie("jwt-netflix-clone", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
    httpOnly: true, // prevent access via javascript in client. Prevent XSS attacks
    sameSite: "strict", // prevent csrf attacks
    secure: ENV_VARS.NODE_ENV !== "development",
  });

  //   return token;
};
