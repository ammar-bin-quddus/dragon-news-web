import React from "react";
import Header from "./components/Header";
import NewsHeadline from "./components/NewsHeadline";
import NavBar from "./components/NavBar";
import LeftAside from "./components/LeftAside";
import { Outlet } from "react-router-dom";
import RightNav from "./components/RightNav";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <Header />
      <NewsHeadline />
      <NavBar />
      <main className="w-11/12 mx-auto mb-8 grid lg:grid-cols-12 gap-5">
        <aside className="left col-span-3"><LeftAside /></aside>
        <section className="col-span-6"><Outlet /></section>
        <aside className="col-span-3"><RightNav /></aside>
      </main>
    </div>
  );
};

export default MainLayout;
