import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { ENV_VARS } from "../config/envVars.js";
import {
  resGeneralError,
  throw400,
  throw401,
  throw404,
} from "../utils/throwErrors.js";

async function protectRoute(req, res, next) {
  try {
    // check if the token is existing
    const { "jwt-netflix-clone": token } = req.cookies;
    if (!token) return throw401("Unauthorized: No Token provided.");

    // check if token is valid
    const decodedToken = jwt.verify(token, ENV_VARS.JWT_SECRET);
    if (!decodedToken) return throw401("Unauthorized: Invalid Token.");

    // if token is valid, check if user still exists. exclude password from select
    const user = await User.findById(decodedToken.userId).select("-password");
    if (!user) return throw404("User not found");

    req.user = user;

    next();
  } catch (error) {
    resGeneralError(error, res);
  }
}

export default protectRoute;
