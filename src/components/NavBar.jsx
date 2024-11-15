import React from "react";
import { Link, NavLink } from "react-router-dom";
import userLogo from "../assets/user.png";

const NavBar = () => {
  return (
    <div className="w-11/12 mx-auto py-8 flex items-center justify-between">
      <div></div>
      <div className="flex items-center justify-center gap-8 text-[#706F6F] font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="career">Career</NavLink>
      </div>
      <div className="flex items-center justify-center gap-2">
        <img src={userLogo} alt="userLogo" />
        <Link to="/auth/login" className="btn btn-neutral rounded-none">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
