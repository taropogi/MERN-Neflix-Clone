import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  signupRequest,
  signupFailure,
  signupSuccess,
} from "./authSlice";

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
      dispatch(signupFailure(error.message));
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { dispatch }) => {
    dispatch(loginRequest());

    try {
      //   const response = await fakeAPILogin(credentials);
      const response = await axios.post("/api/v1/auth/login", credentials);
      dispatch(loginSuccess(response.data));
      setLocalStorageUser(response.data.user);

      return response.data;
    } catch (error) {
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
