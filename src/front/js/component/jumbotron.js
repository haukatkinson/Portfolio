import React, { Component } from "react";
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
        <img
          src="portlogo.png"
          alt="Girl in a jacket"
          width="600"
          height="500"
        ></img>
      </div>
    </div>
  );
};
export { Jumbotron };
