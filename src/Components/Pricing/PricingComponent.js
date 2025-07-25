import pricingStyle from "./pricing.module.css";
import { IoMdCheckmark } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
const PricingComponent = () => {
  return (
    <div className={pricingStyle.main}>
      <div className={pricingStyle.txt}>
        <h3>Our Pricings</h3>
        <p>
          Welcome to SkillBridge's Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We believe
          in providing flexible and affordable pricing options for our services.
          Whether you're an individual looking to enhance your skills or a
          business seeking professional development solutions, we have a plan
          that suits you. Explore our pricing options below and choose the one
          that best fits your requirements.
        </p>
        <div className={pricingStyle.toggle}>
          <button className={pricingStyle.active}>Monthly</button>
          <button>Yearly</button>
        </div>
      </div>
      <div className={pricingStyle.plans}>
        <div className={pricingStyle.plan}>
          <div className={pricingStyle.planTitle}>Free Plan</div>
          <h1>
            $0<span>/month</span>
          </h1>
          <div className={pricingStyle.features}>
            <h4>Available Features</h4>
            <p>
              <span className={pricingStyle.correct}>
                {" "}
                <IoMdCheckmark />{" "}
              </span>{" "}
              Access to selected free courses.
            </p>
            <p>
              <span className={pricingStyle.correct}>
                {" "}
                <IoMdCheckmark />{" "}
              </span>{" "}
              Limited course materials and resources.
            </p>
            <p>
              <span className={pricingStyle.correct}>
                {" "}
                <IoMdCheckmark />{" "}
              </span>{" "}
              Basic community support.
            </p>
            <p>
              <span className={pricingStyle.correct}>
                {" "}
                <IoMdCheckmark />{" "}
              </span>{" "}
              No certification upon completion.
            </p>
            <p>
              <span className={pricingStyle.correct}>
                {" "}
                <IoMdCheckmark />{" "}
              </span>{" "}
              Ad-supported platform.
            </p>
            <p>
              <span className={pricingStyle.correct}>
                {" "}
                <IoCloseOutline />{" "}
              </span>{" "}
              Access to exclusive Pro Plan community forums.
            </p>
            <p>
              <span className={pricingStyle.correct}>
                {" "}
                <IoCloseOutline />{" "}
              </span>{" "}
              Early access to new courses and updates.
            </p>
          </div>
          <button className={pricingStyle.getStarted}>Get Started</button>
        </div>

        <div className={pricingStyle.plan}>
          <div className={pricingStyle.planTitle}>Pro Plan</div>
          <h1>
            $79<span>/month</span>
          </h1>
          <div className={pricingStyle.features}>
            <h4>Available Features</h4>
            <p>
              <span className={pricingStyle.correct}>
                {" "}
                <IoMdCheckmark />{" "}
              </span>{" "}
              Unlimited access to all courses.
            </p>
            <p>
              <span className={pricingStyle.correct}>
                {" "}
                <IoMdCheckmark />{" "}
              </span>{" "}
              Unlimited course materials and resources.
            </p>
            <p>
              <span className={pricingStyle.correct}>
                {" "}
                <IoMdCheckmark />{" "}
              </span>{" "}
              Priority support from instructors.
            </p>
            <p>
              <span className={pricingStyle.correct}>
                {" "}
                <IoMdCheckmark />{" "}
              </span>{" "}
              Course completion certificates.
            </p>
            <p>
              <span className={pricingStyle.correct}>
                {" "}
                <IoMdCheckmark />{" "}
              </span>{" "}
              Ad-free experience.
            </p>
            <p>
              <span className={pricingStyle.correct}>
                {" "}
                <IoMdCheckmark />{" "}
              </span>{" "}
              Access to exclusive Pro Plan community forums.
            </p>
            <p>
              <span className={pricingStyle.correct}>
                {" "}
                <IoMdCheckmark />{" "}
              </span>{" "}
              Early access to new courses and updates.
            </p>
          </div>
          <button className={pricingStyle.getStarted}>Get Started</button>
        </div>
      </div>
      <div className={pricingStyle.big}>
        <div className={pricingStyle.questions}>
          <div className={pricingStyle.left}>
            <h2>Frequently Asked Questions</h2>
            <p>
              Still you have any questions? Contact our Team via
              support@skillbridge.com
            </p>
            <button>See All FAQ’s</button>
          </div>
          <div className={pricingStyle.right}>
            <div className={pricingStyle.ex}>
              <p>
                Can I enroll in multiple courses at once?{" "}
                <IoCloseOutline size={30} />{" "}
              </p>
              <h6>
                Absolutely! You can enroll in multiple courses simultaneously
                and access them at your convenience.
              </h6>
              <h4 className="arrow">
                Enrollment Process for Different Courses{" "}
                <FaArrowRight size={30} />{" "}
              </h4>
            </div>
            <div className={pricingStyle.plus}>
              {" "}
              What kind of support can I expect from instructors?{" "}
              <FaPlus size={30} />
            </div>
            <div className={pricingStyle.plus}>
              Are the courses self-paced or do they have specific start and end
              dates? <FaPlus size={30} />
            </div>
            <div className={pricingStyle.plus}>
              Are there any prerequisites for the courses? <FaPlus size={30} />
            </div>
            <div className={pricingStyle.plus}>
              Can I download the course materials for offline access?{" "}
              <FaPlus size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
