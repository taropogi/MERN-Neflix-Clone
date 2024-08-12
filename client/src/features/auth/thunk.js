import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginFailure, loginRequest, loginSuccess } from "./authSlice";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { dispatch }) => {
    dispatch(loginRequest());

    try {
      const response = await fakeAPILogin(credentials);
      dispatch(loginSuccess(response.data));
      return response;
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
