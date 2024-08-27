import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "movie",
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setContentType(state, action) {
      //   console.log(action);
      state.type = action.payload;
    },
  },
});

export const { setContentType } = contentSlice.actions;
export default contentSlice.reducer;
