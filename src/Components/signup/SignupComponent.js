import React, { useEffect, useState } from "react";
import regStyles from "./reg.module.css";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignupComponent = () => {
  const [size, setSize] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      let size = window.innerWidth;
      size < 850 ? setSize(true) : setSize(false);
    });
  });
  return (
    <div className={regStyles.main}>
      <div className={regStyles.box}>
        <h2>Students Testimonials</h2>
        <p className={regStyles.p}>
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
        <div
          className={regStyles.testimonialBox}
          style={size ? { width: "300px" } : undefined}
        >
          <div className={regStyles.quote}>
            <p>
              The web design course provided a solid foundation for me. The
              instructors were knowledgeable and supportive, and the interactive
              learning environment was engaging. I highly recommend it!
            </p>
          </div>
          <div className={regStyles.author}>
            <div
              className={regStyles.authorImg}
              style={size ? { display: "none" } : undefined}
            ></div>
            <div className={regStyles.authorDetails}>
              <strong>Sarah L</strong>
              <span>Read Full Story</span>
            </div>
          </div>
        </div>
      </div>
      <form
        action={"/"}
        method="post"
        style={
          size ? { maxWidth: "300px", padding: "0px !important" } : undefined
        }
      >
        <h2>Sign Up</h2>
        <p>Create an account to unlock exclusive features.</p>
        <label>
          Full Name
          <input type="text" placeholder="Enter your Name" name="name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="Enter your Email" name="name" />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter your Password"
            name="name"
          />
        </label>
        <label className={regStyles.chk}>
          <input type="checkbox" />
          <p>I agree with Terms of Use and Privacy Policy</p>
        </label>
        <label>
          <input className={regStyles.btt} type="submit" value={"Sign Up"} />
        </label>
        <div className={regStyles.ggl}>
          <span></span>
          <h3>OR</h3>
        </div>
        <button>
          {" "}
          <FcGoogle size={25} /> Sign Up with Google
        </button>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default SignupComponent;
