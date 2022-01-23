import React from "react";

import "./aboutMe.css";

const AboutMe = () => {
  return (
    <div style={{ height: "50vh" }}>
      <div
        className="raised_card aboutMe"
        style={{ backgroundColor: "#1D3A41" }}
      >
        <h1>About me</h1>
        <ul>
          <li style={{ marginTop: "9px" }}>
            <h3>
              Front-end Developer with a bachelore degree in Computer Science
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
