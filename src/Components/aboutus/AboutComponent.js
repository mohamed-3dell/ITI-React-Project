import React from "react";
import aboutstyle from "./about.module.css";
import { GiQueenCrown } from "react-icons/gi";
import { IoMedalSharp } from "react-icons/io5";
import { FaMasksTheater } from "react-icons/fa6";
import { PiShieldStarFill } from "react-icons/pi";
import { PiTeaBagFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { GiAmbulance } from "react-icons/gi";
import img from "../../imgs/courses/Abstract Design.png";
const AboutComponent = () => {
  return (
    <div className={aboutstyle.main}>
      <div className={aboutstyle.txt}>
        <h3>About Skillbridge</h3>
        <p>
          Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </p>
      </div>
      <div className={aboutstyle.bebox}>
        <div className={aboutstyle.tx}>
          <h3>Achievements</h3>
          <p>
            Our commitment to excellence has led us to achieve significant
            milestones along our journey. Here are some of our notable
            achievements
          </p>
        </div>
        <div className={aboutstyle.boxes}>
          <div className={aboutstyle.box}>
            <GiQueenCrown />
            <h4>Trusted by Thousands</h4>
            <p>
              We have successfully served thousands of students, helping them
              unlock their potential and achieve their career goals.
            </p>
          </div>
          <div className={aboutstyle.box}>
            <IoMedalSharp />
            <h4>Award-Winning Courses</h4>
            <p>
              Our courses have received recognition and accolades in the
              industry for their quality, depth of content, and effective
              teaching methodologies.
            </p>
          </div>
          <div className={aboutstyle.box}>
            <FaMasksTheater />
            <h4>Positive Student Feedback</h4>
            <p>
              We take pride in the positive feedback we receive from our
              students, who appreciate the practicality and relevance of our
              course materials.
            </p>
          </div>
          <div className={aboutstyle.box}>
            <PiShieldStarFill />
            <h4>Industry Partnerships</h4>
            <p>
              We have established strong partnerships with industry leaders,
              enabling us to provide our students with access to the latest
              tools and technologies
            </p>
          </div>
        </div>
      </div>
      <div className={aboutstyle.bebox}>
        <div className={aboutstyle.tx}>
          <h3>Our Goals</h3>
          <p>
            At SkillBridge, our goal is to empower individuals from all
            backgrounds to thrive in the world of design and development. We
            believe that education should be accessible and transformative,
            enabling learners to pursue their passions and make a meaningful
            impact. Through our carefully crafted courses, we aim to
          </p>
        </div>
        <div className={aboutstyle.boxes}>
          <div className={aboutstyle.box}>
            <PiTeaBagFill />
            <h4>Provide Practical Skills</h4>
            <p>
              We focus on delivering practical skills that are relevant to the
              current industry demands. Our courses are designed to equip
              learners with the knowledge and tools needed to excel in their
              chosen field.
            </p>
          </div>
          <div className={aboutstyle.box}>
            <FaBook />
            <h4>Foster Creative Problem-Solving</h4>
            <p>
              We encourage creative thinking and problem-solving abilities,
              allowing our students to tackle real-world challenges with
              confidence and innovation.
            </p>
          </div>
          <div className={aboutstyle.box}>
            <FaHashtag />
            <h4>Promote Collaboration and Community</h4>
            <p>
              We believe in the power of collaboration and peer learning. Our
              platform fosters a supportive and inclusive community where
              learners can connect, share insights, and grow together.
            </p>
          </div>
          <div className={aboutstyle.box}>
            <GiAmbulance />
            <h4>Stay Ahead of the Curve</h4>
            <p>
              The digital landscape is constantly evolving, and we strive to
              stay at the forefront of industry trends. We regularly update our
              course content to ensure our students receive the latest knowledge
              and skills.
            </p>
          </div>
        </div>
      </div>
      <div className={aboutstyle.mini}>
        <img alt=" " src={img} />
        <div className={aboutstyle.tex}>
          <h3>
            <span>Together</span> , let's shape the future of digital innovation
          </h3>
          <p>
            Join us on this exciting learning journey and unlock your potential
            in design and development.
          </p>
        </div>
        <button>Join Now</button>
      </div>
    </div>
  );
};

export default AboutComponent;
