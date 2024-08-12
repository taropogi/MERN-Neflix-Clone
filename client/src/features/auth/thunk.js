import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginFailure, loginRequest, loginSuccess } from "./authSlice";
import axios from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { dispatch }) => {
    dispatch(loginRequest());

    try {
      //   const response = await fakeAPILogin(credentials);
      const response = await axios.post("/api/v1/auth/login", credentials);
      dispatch(loginSuccess(response.data));
      localStorage.setItem("user", JSON.stringify(response.data.user));
      return response.data;
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  }
);

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
