import React, { Component } from "react";
import logo2 from "./slide.jpg";

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
                    src="images/portfolioImage1.jpg"
                    alt="Card image"
                    style={{ width: "100%" }}
                  />
                  <div class="card-body">
                    <h4 class="card-title">YouTube Clone</h4>
                    <p class="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <div class="text-center">
                      <a href="#" class="btn btn-success">
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
                    <h4 class="card-title">Twitter Clone</h4>
                    <p class="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <div class="text-center">
                      <a href="#" class="btn btn-success">
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
                    <h4 class="card-title">Twitter Clone</h4>
                    <p class="card-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <div class="text-center">
                      <a href="#" class="btn btn-success">
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
