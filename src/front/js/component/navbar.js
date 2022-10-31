import React from "react";
import { Link } from "react-router-dom";
import logo from "./navlogo2.png";

export const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>
        <img src={logo} className="logo w-25 p-3" />
      </Link>
    </nav>
  );
};
