import React from "react";
import uistyle from "./ui.module.css";
import cont from "../../imgs/courses/Container.png";
import { WiTime3 } from "react-icons/wi";
const Ui = () => {
  return (
    <div className={uistyle.main}>
      <div className={uistyle.txt}>
        <h3>UI/UX Design Course</h3>
        <p>
          Welcome to our UI/UX Design course! This comprehensive program will
          equip you with the knowledge and skills to create exceptional user
          interfaces (UI) and enhance user experiences (UX). Dive into the world
          of design thinking, wireframing, prototyping, and usability testing.
          Below is an overview of the curriculum
        </p>
      </div>
      <div className={uistyle.img}>
        <img alt="" src={cont} />
      </div>
      <div className={uistyle.boxes}>
        <div className={uistyle.box}>
          <h3>01</h3>
          <h5>Introduction to UI/UX Design</h5>
          <div className={uistyle.stxt}>
            <div className={uistyle.mdiv}>
              <h6>Understanding UI/UX Design Principles</h6>
              <p>Lesson 01</p>
            </div>
            <span>
              <WiTime3 /> 45 Minutes
            </span>
          </div>
          <div className={uistyle.stxt}>
            <div className={uistyle.mdiv}>
              <h6>Importance of User-Centered Design</h6>
              <p>Lesson 02</p>
            </div>
            <span>
              <WiTime3 /> 1 hour
            </span>
          </div>
          <div className={uistyle.stxt}>
            <div className={uistyle.mdiv}>
              <h6>The Role of UI/UX Design in Product Development</h6>
              <p>Lesson 03</p>
            </div>
            <span>
              <WiTime3 /> 45 Minutes
            </span>
          </div>
        </div>
        <div className={uistyle.box}>
          <h3>02</h3>
          <h5>User Research and Analysis</h5>
          <div className={uistyle.stxt}>
            <div className={uistyle.mdiv}>
              <h6>Conducting User Research and Interviews</h6>
              <p>Lesson 01</p>
            </div>
            <span>
              <WiTime3 /> 1 hour
            </span>
          </div>
          <div className={uistyle.stxt}>
            <div className={uistyle.mdiv}>
              <h6>Analyzing User Needs and Behavior</h6>
              <p>Lesson 02</p>
            </div>
            <span>
              <WiTime3 /> 1 hour
            </span>
          </div>
          <div className={uistyle.stxt}>
            <div className={uistyle.mdiv}>
              <h6>Creating User Personas and Scenarios</h6>
              <p>Lesson 03</p>
            </div>
            <span>
              <WiTime3 /> 45 Minutes
            </span>
          </div>
        </div>
        <div className={uistyle.box}>
          <h3>03</h3>
          <h5>Wireframing and Prototyping</h5>
          <div className={uistyle.stxt}>
            <div className={uistyle.mdiv}>
              <h6>Introduction to Wireframing Tools and Techniques</h6>
              <p>Lesson 01</p>
            </div>
            <span>
              <WiTime3 /> 1 hour
            </span>
          </div>
          <div className={uistyle.stxt}>
            <div className={uistyle.mdiv}>
              <h6>Creating Low-Fidelity Wireframes</h6>
              <p>Lesson 02</p>
            </div>
            <span>
              <WiTime3 /> 1 hour
            </span>
          </div>
          <div className={uistyle.stxt}>
            <div className={uistyle.mdiv}>
              <h6>Prototyping and Interactive Mockups</h6>
              <p>Lesson 03</p>
            </div>
            <span>
              <WiTime3 /> 1 hour
            </span>
          </div>
        </div>
        <div className={uistyle.box}>
          <h3>04</h3>
          <h5>Visual Design and Branding</h5>
          <div className={uistyle.stxt}>
            <div className={uistyle.mdiv}>
              <h6>Color Theory and Typography in UI Design</h6>
              <p>Lesson 01</p>
            </div>
            <span>
              <WiTime3 /> 1 hour
            </span>
          </div>
          <div className={uistyle.stxt}>
            <div className={uistyle.mdiv}>
              <h6>Visual Hierarchy and Layout Design</h6>
              <p>Lesson 02</p>
            </div>
            <span>
              <WiTime3 /> 1 hour
            </span>
          </div>
          <div className={uistyle.stxt}>
            <div className={uistyle.mdiv}>
              <h6>Creating a Strong Brand Identity</h6>
              <p>Lesson 03</p>
            </div>
            <span>
              <WiTime3 /> 45 Minutes
            </span>
          </div>
        </div>
        <div className={uistyle.box}>
          <h3>05</h3>
          <h5>Usability Testing and Iteration</h5>
          <div className={uistyle.stxt}>
            <div className={uistyle.mdiv}>
              <h6>Usability Testing Methods and Techniques</h6>
              <p>Lesson 01</p>
            </div>
            <span>
              <WiTime3 /> 45 Minutes
            </span>
          </div>
          <div className={uistyle.stxt}>
            <div className={uistyle.mdiv}>
              <h6>Analyzing Usability Test Results</h6>
              <p>Lesson 02</p>
            </div>
            <span>
              <WiTime3 /> 45 Minutes
            </span>
          </div>
          <div className={uistyle.stxt}>
            <div className={uistyle.mdiv}>
              <h6>Iterating and Improving UX Designs</h6>
              <p>Lesson 03</p>
            </div>
            <span>
              <WiTime3 /> 45 Minutes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ui;
