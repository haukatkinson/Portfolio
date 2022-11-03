import React, { Component } from "react";
import logo2 from "./slide.jpg";
import relocate from "./relocate.png";
import rodeo0 from "./rodeoo.png";

const Projects = () => {
  return (
    <div className="project" id="projects">
      <div
        className="p-5 text-center bg-image rounded-3"
        style={{
          backgroundImage: "url('slide.jpg')",
          backgroundSize: "cover",
          height: "800px",
          width: "100%",
        }}
      >
        <section id="portfolio">
          <div class="container mt-3">
            <h1 className="projectTitle"> Projects</h1>
            <div class="row">
              <div class="col-lg-4 mt-4">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="relocate.png"
                    alt="Card image"
                    style={{ width: "100%" }}
                  />
                  <div class="card-body">
                    <h4 class="card-title">Relocation Station</h4>
                    <p class="card-text">
                      Website that compiles state and city data to assist users
                      with finding the ideal location to move to based on the
                      user's preferences.{" "}
                      <strong className="cardStrong">
                        HTML,CSS,Javascript,React,Python,Flask
                      </strong>
                    </p>
                    <div class="text-center">
                      <a href="#" class="button-85">
                        Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mt-4">
                <div class="card portfolioContent">
                  <img
                    class="card-img-top"
                    src="rodeoo.png"
                    alt="Card image"
                    style={{ width: "100%" }}
                  />
                  <div class="card-body">
                    <h4 class="card-title">38 Arena</h4>
                    <p class="card-text">
                      Self generates spread sheets that users/riders register to
                      and compiles data on there runs and provides results.{" "}
                      <strong className="cardStrong">
                        HTML,CSS,Javascript,React,Python,Flask
                      </strong>
                    </p>
                    <div class="text-center">
                      <a href="#" class="button-85">
                        Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mt-4">
                <div class="card portfolioContent">
                  <img
                    class="card-img-top"
                    src="images/portfolioImage1.jpg"
                    alt="Card image"
                    style={{ width: "100%" }}
                  />
                  <div class="card-body">
                    <h4 class="card-title">Crypto Tracker</h4>
                    <p class="card-text">
                      Track top daily and over all crypto data
                    </p>
                    <div class="text-center">
                      <a
                        href="https://3000-haukatkinson-crypto-jlyv26ljsh0.ws-us74.gitpod.io/"
                        class="button-85"
                      >
                        Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export { Projects };
