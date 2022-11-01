import React, { Component } from "react";
import { Link } from "react-router-dom";
import banner from "./banner.jpg";
import portlogo from "./portlogo.png";

const Jumbotron = () => {
  return (
    <div>
      <div
        className="p-5 text-center bg-image rounded-3"
        style={{
          backgroundImage: "url('banner.jpg')",
          backgroundSize: "cover",
          height: "800px",
          width: "100%",
        }}
      >
        <div className="jumboInfo">
          <div className="header">Full Stack</div>
          <div className="header2">Developer</div>
        </div>
        <div className="socials">
          <div className="follow">Follow Me</div>
          <div>
            <span class="arrow-right"></span>
          </div>
          <a
            class="nav-link text-light"
            href="https://www.linkedin.com/in/haukatkinson/"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a class="nav-link text-light" href="https://github.com/haukatkinson">
            <i class="fab fa-github"></i>
          </a>
          <a class="nav-link text-light" href="https://twitter.com/timmy2rp">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export { Jumbotron };
