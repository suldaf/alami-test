import React from "react";
import { useSelector } from "react-redux";
import "./aboutStyle.css";

function AboutComponent(props) {
  const data = useSelector((state) => state.data.aboutText);
  return (
    <>
      <div className="root-about-container">
        <div className="first-about-container">
          <h1>About 1</h1>
          <p>{data}</p>
        </div>
        <div className="second-about-container">
          <h1>About 2</h1>
          <div className="second-about-container-items">
            <div className="first-second-about-container-item">
              <p>{data}</p>
              <p>{data}</p>
            </div>
            <div className="second-second-about-container-item">
              <p>{data}</p>
              <p>{data}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutComponent;
