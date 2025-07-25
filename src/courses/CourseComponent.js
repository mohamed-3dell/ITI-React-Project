import React, { useEffect, useState } from "react";
import coursestyle from "./course.module.css";
import img from "../imgs/courses/Image.png";
import img1 from "../imgs/courses/Image (1).png";
import img2 from "../imgs/courses/Image (2).png";
import img11 from "../imgs/courses/Image11.png";
import img22 from "../imgs/courses/Image22.png";
import img33 from "../imgs/courses/Image33.png";
import img21 from "../imgs/courses/Image21.png";
import img12 from "../imgs/courses/Image21 (3).png";
import img23 from "../imgs/courses/Image23.png";

import { Link } from "react-router-dom";
const CourseComponent = () => {

  // [1] useState to handle responsive design
  const [size, setsize] = useState(false);

  // [2] useEffect to handle window resize
  useEffect(() => {
    window.addEventListener("resize", () => {
      let size = window.innerWidth;
      size <= 850 ? setsize(true) : setsize(false);
    });
  }, []);


  return (
    <div
      className={coursestyle.main}
      style={size ? { padding: "20px !important" } : undefined}
    >
      <div
        className={coursestyle.txt}
        style={size ? { flexDirection: "column" } : undefined}
      >
        <h3>Online Courses on Design and Development</h3>
        <p>
          Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey.
        </p>
      </div>
      <div
        className={coursestyle.boxes}
        style={size ? { padding: "0px !important" } : undefined}
      >
        <div
          className={coursestyle.box}
          style={size ? { padding: "5px !important" } : undefined}
        >
          <div className={coursestyle.text}>
            <div className={coursestyle.tx}>
              <h4>Web Design Fundamentals</h4>
              <p>
                Learn the fundamentals of web design, including HTML, CSS, and
                responsive design principles. Develop the skills to create
                visually appealing and user-friendly websites.
              </p>
            </div>
            <button>View Course</button>
            <div className={size ? coursestyle.im : coursestyle.imgs}>
              <img alt="" src={img} />
              <img alt="" src={img1} />
              <img alt="" src={img2} />
            </div>
            <div className={coursestyle.spans}>
              <span>4 Weeks</span>
              <span>Beginner</span>
              <p>By John Smith</p>
            </div>
            <div className={coursestyle.plan}>
              <h4>Curriculum</h4>
              <div
                className={coursestyle.weeks}
                style={size ? { flexDirection: "column" } : undefined}
              >
                <div
                  className={coursestyle.one}
                  style={size ? { width: "100%" } : undefined}
                >
                  <h5>01</h5>
                  <p>Introduction to HTML</p>
                </div>
                <div
                  className={coursestyle.one}
                  style={size ? { width: "100%" } : undefined}
                >
                  <h5>02</h5>
                  <p>Styling with CSS</p>
                </div>
                <div
                  className={coursestyle.one}
                  style={size ? { width: "100%" } : undefined}
                >
                  <h5>03</h5>
                  <p>Introduction to Responsive Design</p>
                </div>
                <div
                  className={coursestyle.one}
                  style={size ? { width: "100%" } : undefined}
                >
                  <h5>04</h5>
                  <p>Design Principles for Web</p>
                </div>
                <div
                  className={coursestyle.one}
                  style={size ? { width: "100%" } : undefined}
                >
                  <h5>05</h5>
                  <p>Building a Basic Website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={coursestyle.box}
          style={size ? { padding: "5px !important" } : undefined}
        >
          <div className={coursestyle.text}>
            <div className={coursestyle.tx}>
              <h4>UI/UX Design</h4>
              <p>
                Master the art of creating intuitive user interfaces (UI) and
                enhancing user experiences (UX). Learn design principles,
                wireframing, prototyping, and usability testing techniques.
              </p>
            </div>
            <Link to={"/ui"}>View Course</Link>
            <div className={size ? coursestyle.im : coursestyle.imgs}>
              <img alt="" src={img11} />
              <img alt="" src={img22} />
              <img alt="" src={img33} />
            </div>
            <div className={coursestyle.spans}>
              <span>6 Weeks</span>
              <span>Intermediate</span>
              <p>By Emily Johnson</p>
            </div>
            <div className={coursestyle.plan}>
              <h4>Curriculum</h4>
              <div
                className={coursestyle.weeks}
                style={size ? { flexDirection: "column" } : undefined}
              >
                <div
                  className={coursestyle.one}
                  style={size ? { width: "100%" } : undefined}
                >
                  <h5>01</h5>
                  <p>Introduction to UI/UX Design</p>
                </div>
                <div
                  className={coursestyle.one}
                  style={size ? { width: "100%" } : undefined}
                >
                  <h5>02</h5>
                  <p>User Research and Personas</p>
                </div>
                <div
                  className={coursestyle.one}
                  style={size ? { width: "100%" } : undefined}
                >
                  <h5>03</h5>
                  <p>Wireframing and Prototyping</p>
                </div>
                <div
                  className={coursestyle.one}
                  style={size ? { width: "100%" } : undefined}
                >
                  <h5>04</h5>
                  <p>Visual Design and Branding</p>
                </div>
                <div
                  className={coursestyle.one}
                  style={size ? { width: "100%" } : undefined}
                >
                  <h5>05</h5>
                  <p>Usability Testing and Iteration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={coursestyle.box}
          style={size ? { padding: "5px !important" } : undefined}
        >
          <div className={coursestyle.text}>
            <div className={coursestyle.tx}>
              <h4>Mobile App Development</h4>
              <p>
                Dive into the world of mobile app development. Learn to build
                native iOS and Android applications using industry-leading
                frameworks like Swift and Kotlin.
              </p>
            </div>
            <button>View Course</button>
            <div className={size ? coursestyle.im : coursestyle.imgs}>
              <img alt="" src={img21} />
              <img alt="" src={img12} />
              <img alt="" src={img23} />
            </div>
            <div className={coursestyle.spans}>
              <span>8 Weeks</span>
              <span>Intermediate</span>
              <p>By David Brown</p>
            </div>
            <div className={coursestyle.plan}>
              <h4>Curriculum</h4>
              <div
                className={coursestyle.weeks}
                style={size ? { flexDirection: "column" } : undefined}
              >
                <div
                  className={coursestyle.one}
                  style={size ? { width: "100%" } : undefined}
                >
                  <h5>01</h5>
                  <p>Introduction to Mobile App DevelopmentL</p>
                </div>
                <div
                  className={coursestyle.one}
                  style={size ? { width: "100%" } : undefined}
                >
                  <h5>02</h5>
                  <p>Fundamentals of Swift Programming (iOS)</p>
                </div>
                <div
                  className={coursestyle.one}
                  style={size ? { width: "100%" } : undefined}
                >
                  <h5>03</h5>
                  <p>Fundamentals of Kotlin Programming (Android)</p>
                </div>
                <div
                  className={coursestyle.one}
                  style={size ? { width: "100%" } : undefined}
                >
                  <h5>04</h5>
                  <p>Building User Interfaces</p>
                </div>
                <div
                  className={coursestyle.one}
                  style={size ? { width: "100%" } : undefined}
                >
                  <h5>05</h5>
                  <p>App Deployment and Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseComponent;
