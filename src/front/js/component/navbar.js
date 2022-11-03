import React from "react";
import { Link } from "react-router-dom";
import logo from "./newlogo.png";

export const Navbar = () => {
  return (
    <nav>
      <img src={logo} className="logo w-25 p-3" />
      <div class="nav-items">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link text-light" href="#About">
              About Me <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#projects">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#skills">
              Skills
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
