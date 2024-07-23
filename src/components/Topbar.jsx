import React from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "@/redux/sidebarSlice";
export default function Topbar() {
  const dispatch = useDispatch();
  const isSidebar = useSelector((state) => state.sidebar.isSidebar);
  return (
    <div className={`topbar ${isSidebar ? "topbar-set" : ""}`}>
      <div className="topbar__flex">
        <div className="topbar__menu" onClick={() => dispatch(toggleSidebar())}>
          {isSidebar ? <MenuRoundedIcon /> : <MenuOpenIcon />}
        </div>
        <div className="topbar__profile">Account Profile Here</div>
      </div>
    </div>
  );
}
