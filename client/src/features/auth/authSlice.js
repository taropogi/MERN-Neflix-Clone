import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state) {
      state.status = "loading";
    },
    loginSuccess(state, action) {
      state.status = "success";
      state.user = action.payload;
      state.error = null;
    },
    loginFailure(state, action) {
      state.status = "failed";

      state.error = action.payload;
    },
    signupRequest(state) {
      state.status = "loading";
    },
    signupSuccess(state, action) {
      state.status = "success";
      state.user = action.payload;
      state.error = null;
    },
    signupFailure(state, action) {
      state.status = "failed";

      state.error = action.payload;
    },
    logoutRequest(state) {
      state.status = "loading";
    },
    logoutSuccess(state) {
      state.status = "success";
      state.user = null;
      state.error = null;
    },
    logoutFailed(state, action) {
      state.status = "Failed";
      state.error = action.payload;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  signupRequest,
  signupFailure,
  signupSuccess,
  logoutRequest,
  logoutSuccess,
  logoutFailed,
} = authSlice.actions;
export default authSlice.reducer;
