import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

const AuthLayouts = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <header>
        <NavBar />
      </header>
      <Outlet />
    </div>
  );
};

export default AuthLayouts;
