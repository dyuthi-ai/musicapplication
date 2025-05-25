import React from "react";
import NavBarContainer from "../components/navbarblock/NavBarContainer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
      <NavBarContainer />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default Layout;
