import React, { useEffect, useState } from "react";
import contactStyle from "./contact.module.css";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactComponent = () => {
  const [size, setSize] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      let size = window.innerWidth;
      size < 850 ? setSize(true) : setSize(false);
    });
  });
  return (
    <div className={contactStyle.main}>
      <div className={contactStyle.txt}>
        <h3>Contact Us</h3>
        <p>
          Welcome to SkillBridge's Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We believe
          in providing flexible and affordable pricing options for our services.
          Whether you're an individual looking to enhance your skills or a
          business seeking professional development solutions, we have a plan
          that suits you. Explore our pricing options below and choose the one
          that best fits your requirements.
        </p>
      </div>
      <div className={contactStyle.msg}>
        <form method="post" style={size ? { width: "300px" } : undefined}>
          <label className={contactStyle.two}>
            <label>
              First Name
              <input type="text" placeholder="Enter First Name" />
            </label>
            <label>
              Last Name
              <input type="text" placeholder="Enter Last Name" />
            </label>
          </label>
          <label className={contactStyle.two}>
            <label>
              Email
              <input type="email" placeholder="Enter your Email" />
            </label>
            <label>
              Phone
              <input type="name" placeholder="Enter Phone Number" />
            </label>
          </label>
          <label className={contactStyle.one}>
            Subject
            <input type="text" placeholder="Enter your Subject" />
          </label>
          <label className={contactStyle.one}>
            Message
            <input type="text" placeholder="Enter your Message here..." />
          </label>
          <input
            className={contactStyle.btt}
            type="submit"
            value={"Send Your Message"}
          />
        </form>
        <div className={contactStyle.info}>
          <div className={contactStyle.box}>
            <FaMailBulk size={20} />
            <p>support@skillbridge.com</p>
          </div>
          <div className={contactStyle.box}>
            <FaPhoneAlt size={20} />
            <p>+91 00000 00000</p>
          </div>
          <div className={contactStyle.box}>
            <FaMapMarkerAlt size={20} />
            <p>Some Where in the World</p>
          </div>
          <div className={contactStyle.box}>
            <div className={contactStyle.soc}>
              <FaFacebookSquare size={20} />
              <FaTwitterSquare size={20} />
              <FaLinkedin size={20} />
            </div>
            <p>Social Profiles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
