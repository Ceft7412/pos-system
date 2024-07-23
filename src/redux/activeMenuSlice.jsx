import { createSlice } from "@reduxjs/toolkit";

export const activeMenuSlice = createSlice({
  name: "activeMenu",
  initialState: "dashboard",
  reducers: {
    setActiveMenu: (state, action) => action.payload,
    clearActiveMenu: () => "",
  },
});

export const { setActiveMenu, clearActiveMenu } = activeMenuSlice.actions;

export default activeMenuSlice.reducer;
