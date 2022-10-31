import React, { Component } from "react";
import banner from "./banner.jpg";

const Jumbotron = () => {
  return (
    <div
      className="p-5 text-center bg-image rounded-3"
      style={{
        backgroundImage: "url('banner.jpg')",
        backgroundSize: "cover",
        height: "800px",
        width: "100%",
      }}
    ></div>
  );
};
export { Jumbotron };
