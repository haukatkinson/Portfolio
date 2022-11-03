import React, { Component } from "react";

const About = () => {
  return (
    <div id="About">
      <div className="aboutBackground">
        <div className="aboutInfo">
          <h4 className="aboutme">About Me</h4>
          <h1 className="aboutMain">
            MY MISSION IS TO{" "}
            <span className="wordColor"> DEVELOP & LEARN </span> TO BE THE BEST
            I CAN!
          </h1>
          <p className="aboutBio">
            Innovative software developer with a demonstrated experience in
            designing, creating and maintaining websites using the latest
            industry software Javascript, React, Flux, Python, Flask to provide
            a superior user experience that delivers the customer/readership
            base that the website is seeking to attract. Able to build a Web
            presence from the ground up from concept, navigation, layout and
            programming with strong attention to detail and ability to finish
            projects on schedule. Fast learner, hard worker and team player who
            is proficient in an array of scripting languages and multimedia Web
            tools.
          </p>
          <div className="smallInfo">
            <p>
              <span className="wordColor">Name:</span> Hauk Atkinson
            </p>
            <p>
              <span className="wordColor">Age:</span> 30
            </p>
            <p>
              <span className="wordColor">From:</span> Missouri, US
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export { About };
