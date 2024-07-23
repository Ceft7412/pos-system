import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "@/redux/sidebarSlice";
import activeMenuReducer from "@/redux/activeMenuSlice";

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    activeMenu: activeMenuReducer,
  },
});
