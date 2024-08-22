import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userInfo: localStorage.getItem("socio-user")
    ? JSON.parse(localStorage.getItem("socio-user"))
    : null,
};
const authSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    loggedInUsers: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});
export const { loggedInUsers } = authSlice.actions;
export default authSlice.reducer;
