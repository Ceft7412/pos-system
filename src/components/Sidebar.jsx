import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveMenu } from "@/redux/activeMenuSlice";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import Link from "next/link";

export default function Sidebar() {
  const isSidebar = useSelector((state) => state.sidebar.isSidebar);
  const activeMenu = useSelector((state) => state.activeMenu);
  const dispatch = useDispatch();
  return (
    <div className={`sidebar ${isSidebar ? "sidebar-set" : ""}`}>
      <div className="sidebar__flex">
        <div className="sidebar__logo">Logo Here</div>
        <div className="sidebar__menu">
          <Link
            href="/admin/dashboard"
            className={`sidebar-menu__item ${activeMenu === "dashboard" ? "active" : ""}`}
            onClick={() => dispatch(setActiveMenu("dashboard"))}
          >
            <DashboardRoundedIcon />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/admin/category"
            className={`sidebar-menu__item ${activeMenu === "category" ? "active" : ""}`}
            onClick={() => dispatch(setActiveMenu("category"))}
          >
            <LayersRoundedIcon />
            <span>Product Category</span>
          </Link>
          <Link
            href="/admin/product"
            className={`sidebar-menu__item ${activeMenu === "product" ? "active" : ""}`}
            onClick={() => dispatch(setActiveMenu("product"))}
          >
            <LocalMallRoundedIcon />
            <span>Product</span>
          </Link>
          <Link
            href="/admin/users"
            className={`sidebar-menu__item ${activeMenu === "users" ? "active" : ""}`}
            onClick={() => dispatch(setActiveMenu("users"))}
          >
            <PeopleAltRoundedIcon />
            <span>Users</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
