import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userLogo from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
  const { user, handleLogOut } = useContext(AuthContext);
  return (
    <div className="w-11/12 mx-auto py-8 flex items-center justify-between">
      <div>{user?.email}</div>
      <div className="flex items-center justify-center gap-8 text-[#706F6F] font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="career">Career</NavLink>
      </div>
      <div className="flex items-center justify-center gap-2">
        <img src={userLogo} alt="userLogo" />
        {user && user?.email ? (
          <button onClick={handleLogOut} className="btn btn-neutral rounded-none">Log Out</button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
