import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import logo from "../../imgs/Logo.png";
import { Link } from "react-router-dom";
import "./nav.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
const Nav = () => {
  const [menu, setmenu] = useState(false);
  const [size, setsize] = useState(false);
  const [close, setclose] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      let size = window.innerWidth;
      size <= 850 ? setsize(true) : setsize(false);
    });
  });

  const change = () => {
    setmenu(!menu);
    setclose(!close);
  };
  
  return (
    <div className="main">
      <div className="top">
        <p>Free Courses 🌟 Sale Ends Soon, Get It Now </p>
        <FaArrowRight size={10} color="white" />
      </div>
      <div className="nav">
        <div className="container">
          <Link to={"/"}>
            <img alt="" src={logo} />
          </Link>
          <ul
            className={menu ? "bigMenu" : undefined}
            style={size ? { display: "none" } : undefined}
          >
            <li>
              <Link
                to={"/"}
                className={
                  window.location.pathname === "/" ? "active" : undefined
                }
              >
                Home
              </Link>{" "}
            </li>
            <li>
              <Link
                to={"/courses"}
                className={
                  window.location.pathname === "/courses" ? "active" : undefined
                }
              >
                Courses
              </Link>{" "}
            </li>
            <li>
              <Link
                to={"/about us"}
                className={
                  window.location.pathname === "/about%20us"
                    ? "active"
                    : undefined
                }
              >
                About Us
              </Link>{" "}
            </li>
            <li>
              <Link
                to={"/pricing"}
                className={
                  window.location.pathname === "/pricing" ? "active" : undefined
                }
              >
                Pricing
              </Link>{" "}
            </li>
            <li>
              <Link
                to={"/contact"}
                className={
                  window.location.pathname === "/contact" ? "active" : undefined
                }
              >
                Contact
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="Buttons-Container">
          <Link to={"/signup"}>Sign up</Link>

          <Link id="log" to={"/login"}>
            Login
          </Link>
        </div>
        {size ? (
          close ? (
            <IoCloseOutline onClick={() => change()} />
          ) : (
            <HiMenuAlt3
              onClick={() => change()}
              className="mn"
              size={20}
              color="#2b2d2e"
            />
          )
        ) : menu ? (
          <HiMenuAlt3
            onClick={() => change()}
            className="mn"
            size={20}
            color="#2b2d2e"
          />
        ) : undefined}
      </div>
    </div>
  );
};

export default Nav;
