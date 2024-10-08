import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  signupRequest,
  signupFailure,
  signupSuccess,
  logoutRequest,
  logoutSuccess,
  logoutFailed,
} from "./authSlice";
import toast from "react-hot-toast";

export const logout = createAsyncThunk(
  "auth/logout",
  async (data, { dispatch }) => {
    dispatch(logoutRequest());

    try {
      await axios.post("/api/v1/auth/logout");

      toast.success("Logged Out Successfully");
    } catch (error) {
      dispatch(logoutFailed(error.message));
    } finally {
      dispatch(logoutSuccess());
      localStorage.removeItem("user");
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (data, { dispatch }) => {
    dispatch(signupRequest());
    try {
      const response = await axios.post("/api/v1/auth/signup", data);

      dispatch(signupSuccess(response.data.user));

      setLocalStorageUser(response.data.user);

      return response.data;
    } catch (error) {
      const errorMessage = error.response.data.message || "Signup Failed";
      toast.error(errorMessage);
      dispatch(signupFailure(errorMessage));
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { dispatch }) => {
    dispatch(loginRequest());

    try {
      console.log(credentials);
      //   const response = await fakeAPILogin(credentials);
      const response = await axios.post("/api/v1/auth/login", credentials);

      dispatch(loginSuccess(response.data.user));
      setLocalStorageUser(response.data.user);
      toast.success("Loggedin successful.");
      return response.data;
    } catch (error) {
      const errorMessage = error.response.data.message || "Login failed";
      toast.error(errorMessage);
      dispatch(loginFailure(error.message));
    }
  }
);

function setLocalStorageUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

//Simulate an API login function
const fakeAPILogin = (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.email === "test@test.com" &&
        credentials.password === "password"
      ) {
        resolve({
          data: {
            name: "User",
          },
        });
      } else {
        const error = new Error("Invalid credentials");
        reject(error);
        // throw new Error(error);
      }
    }, 1000);
  });
};
