import React, { Component, useState } from "react";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const register = {
      name: name,
      email: email,
      subject: subject,
      details: details,
    };
    console.log(register);
    setName("");
    setEmail("");
    setSubject("");
    setDetails("");
  };
  return (
    <div id="contact">
      <div className="BackgroundContacts">
        <section id="contact">
          <div class="container contactContent">
            <h1 class="projectTitle">Contact Me</h1>

            <div class="row mt-4">
              <div class="col-lg-6">
                <div
                  style={{
                    maxWidth: "100%",
                    overflow: "hidden",
                    color: "red",
                    width: "500px",
                    height: "500px",
                  }}
                >
                  <div
                    id="embedmap-canvas"
                    style={{ height: "100%", width: "100%", maxWidth: "100%;" }}
                  >
                    <iframe
                      style={{ height: "100%", width: "100%", border: "0" }}
                      frameBorder="0"
                      src="https://www.google.com/maps/embed/v1/place?q=Independence,+MO,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    ></iframe>
                  </div>
                  <a
                    class="googlemaps-html"
                    href="https://www.embed-map.com"
                    id="get-data-forembedmap"
                    ddd
                  >
                    https://www.embed-map.com{" "}
                  </a>
                </div>
              </div>
              <div class="col-lg-6">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Name"
                    className="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    class="form-control mt-3"
                    placeholder="Email"
                    className="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    class="form-control mt-3"
                    placeholder="Subject"
                    className="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <div class="mb-3 mt-3">
                    <textarea
                      class="form-control"
                      rows="5"
                      id="comment"
                      name="text"
                      placeholder="Details"
                      className="details"
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                    ></textarea>
                  </div>
                </form>
                <button
                  type="button"
                  class="submit btn btn-success mt-3"
                  onClick={handleSubmit}
                >
                  Contact Me
                </button>
                <h2>Email: haukatkinson1@gmail.com</h2>
                <h2>Phone: 772-647-0460</h2>
                <div id="myModal" class="modal">
                  <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Some text in the Modal..</p>
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

export { Contacts };
