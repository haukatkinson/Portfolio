import React, { Component } from "react";

const Skills = () => {
  return (
    <div className="skillsback" id="skills">
      <section class="skills container">
        <div class="projectTitle">
          <h1>skills</h1>
        </div>
        <p class="text">
          I have skills in everything listed here HTML, CSS, Javascript, React,
          SQL/SQLAlchemy/MySQL, Python, Flask, jQuery, Node.js, GIT/Github,
          API's, Flux, Data-Structures, Data-Modeling, REST, But below are my
          main skills i practice daily.
        </p>
        <div class="row">
          <div class="item">
            <div class="item-text">
              <span>HTML5</span>
              <span class="w-90">90%</span>
            </div>
            <div class="progress">
              <div class="progress-bar w-90"></div>
            </div>
          </div>

          <div class="item">
            <div class="item-text">
              <span>CSS</span>
              <span class="w-90">90%</span>
            </div>
            <div class="progress">
              <div class="progress-bar w-90"></div>
            </div>
          </div>

          <div class="item">
            <div class="item-text">
              <span>Javascript</span>
              <span class="w-85">85%</span>
            </div>
            <div class="progress">
              <div class="progress-bar w-85"></div>
            </div>
          </div>

          <div class="item">
            <div class="item-text">
              <span>React</span>
              <span class="w-80">80%</span>
            </div>
            <div class="progress">
              <div class="progress-bar w-80"></div>
            </div>
          </div>

          <div class="item">
            <div class="item-text">
              <span>Python</span>
              <span class="w-75">75%</span>
            </div>
            <div class="progress">
              <div class="progress-bar w-75"></div>
            </div>
          </div>

          <div class="item">
            <div class="item-text">
              <span>Flask</span>
              <span class="w-75">75%</span>
            </div>
            <div class="progress">
              <div class="progress-bar w-75"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Skills };
