import React, { useEffect, useState } from 'react'
import homeStyles from './home.module.css'
import icon from '../../imgs/Icon Container.png'
import logo from '../../imgs/Logoo.png'
import logo1 from '../../imgs/Logo (1).png'
import logo2 from '../../imgs/Logo (2).png'
import logo3 from '../../imgs/Logo (3).png'
import logo4 from '../../imgs/Logo (4).png'
import logo5 from '../../imgs/Logo (5).png'
import logo6 from '../../imgs/Logo (6).png'
import photo from '../../imgs/Container.png'
import image from '../../imgs/Image.png'
import image1 from '../../imgs/Image (1).png'
import image2 from '../../imgs/Image (2).png'
import image3 from '../../imgs/Image (3).png'
import image4 from '../../imgs/Image (4).png'
import image5 from '../../imgs/Image (5).png'
import { LuArrowUpRight } from "react-icons/lu";
import { IoMdCheckmark } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const HomeComponent = () => {
  const [size ,setsize]=useState(false)
  useEffect(()=>{
    window.addEventListener("resize",()=>{
      let size =window.innerWidth
      size<=850?setsize(true):setsize(false)
    })
  })
  return (
    <>
        <div className={homeStyles.hero}>
              <div className={homeStyles.contanier}>
                <div className={homeStyles.sub}>
                    <img alt='' src={icon}/>
                    <h3> <span>Unlock</span>Your Creative Potential</h3>
                    
                </div>
                <div className={homeStyles.txt}>
                                      <h4>with Online Design and Development Courses.</h4>
                                      <p>Learn from Industry Experts and Enhance Your Skills.</p>
                </div>
              </div>
              <div className={homeStyles.btt}>
                    <button id={homeStyles.one}>Explore Courses</button>
                    <button id={homeStyles.two}>View Pricing</button>
                    
              </div>
        </div>
        <div className={homeStyles.boxes}>
              <div className={homeStyles.mini}>
                <img className={size?"small":undefined} alt='' src={logo}/>
                <img className={size?"small":undefined} alt='' src={logo1}/>
                <img className={size?"small":undefined} alt='' src={logo2}/>
                <img alt='' src={logo3} style={size?{display:"none"}:undefined}/>
                <img alt='' src={logo4} style={size?{display:"none"}:undefined}/>
                <img alt='' src={logo5} style={size?{display:"none"}:undefined}/>
                <img alt='' src={logo6} style={size?{display:"none"}:undefined}/>
              </div>
        </div>
        <div className={homeStyles.photo}>
              <img alt=' ' src={photo}/>
        </div>
        <div className={homeStyles.benefits}>
          <div className={homeStyles.txt}>
              <div className={homeStyles.tx}>
                              <h2>Benefits</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget 
              habitasse in velit fringilla feugiat senectus in.</p>
              </div>
              <button>View All</button>
          </div>
          <div className={homeStyles.boxes}>
            <div className={homeStyles.box}>
                <h2>01</h2>
                <h5>Flexible Learning Schedule</h5>
                <p>Fit your coursework around your existing commitments and obligations.</p>
                <LuArrowUpRight size={25}/>
            </div>
            <div className={homeStyles.box}>
                <h2>02</h2>
                <h5>Expert Instruction</h5>
                <p>Learn from industry experts who have hands-on experience in design and development.</p>
                <LuArrowUpRight size={25}/>
            </div>
            <div className={homeStyles.box}>
                <h2>03</h2>
                <h5>Diverse Course Offerings</h5>
                <p>Explore a wide range of design and development courses covering various topics.</p>
                <LuArrowUpRight size={25}/>
            </div>
            
            <div className={homeStyles.box}>
                <h2>04</h2>
                <h5>Updated Curriculum</h5>
                <p>Access courses with up-to-date content reflecting the latest trends and industry practices.</p>
                <LuArrowUpRight size={25}/>
            </div>
            <div className={homeStyles.box}>
                <h2>05</h2>
                <h5>Practical Projects and Assignments</h5>
                <p>Develop a portfolio showcasing your skills and abilities to potential employers.</p>
                <LuArrowUpRight size={25}/>
            </div>
            <div className={homeStyles.box}>
                <h2>06</h2>
                <h5>Interactive Learning Environment</h5>
                <p>Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.</p>
                <LuArrowUpRight size={25}/>
            </div>
          </div>
        </div>
<div className={homeStyles.sectionWrapper}>
  <div className={homeStyles.headerSection}>
    <div className={homeStyles.headerText}>
      <h2>Our Courses</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
    </div>
    <button>View All</button>
  </div>
  <div className={homeStyles.cardsContainer}>
    
    <div className={homeStyles.cardItem}>
      <img src={image} className={homeStyles.cardImage} alt='' />
      <div className={homeStyles.metaInfo}>
        <span>4 Weeks</span>
        <span>Beginner</span>
      </div>
      <h5>Web Design Fundamentals</h5>
      <p>Learn HTML, CSS, and responsive design principles.</p>
      <div>By John Smith</div>
      <button className={homeStyles.bt}> Git It Now</button>
    </div>


    <div className={homeStyles.cardItem}>
      <img src={image1} className={homeStyles.cardImage} />

      <h5>UI/UX Design</h5>
      <p>Master intuitive interfaces and user experiences.</p>
      <div className={homeStyles.metaInfo}>
        <span>6 Weeks</span>
        <span>Intermediate</span>
      </div>
      <div>By Emily Johnson</div>
      <button className={homeStyles.bt}>Git It Now</button>
    </div>

    <div className={homeStyles.cardItem}>
      <img src={image2} className={homeStyles.cardImage} />

      <h5>Frontend Development</h5>
      <p>Build web apps with JavaScript frameworks.</p>
      <div className={homeStyles.metaInfo}>
        <span>8 Weeks</span>
        <span>Advanced</span>
      </div>
      <div>By Michael Brown</div>
      <button className={homeStyles.bt}>Git It Now</button>
    </div>


    <div className={homeStyles.cardItem}>
      <img src={image3} className={homeStyles.cardImage} />

      <h5>Graphic Design</h5>
      <p>Learn color theory, typography and design tools.</p>
      <div className={homeStyles.metaInfo}>
        <span>5 Weeks</span>
        <span>Beginner</span>
      </div>
      <div>By Sarah Wilson</div>
      <button className={homeStyles.bt}>Git It Now</button>
    </div>


    <div className={homeStyles.cardItem}>
      <img src={image4} className={homeStyles.cardImage} />

      <h5>Mobile App Design</h5>
      <p>Design iOS and Android applications.</p>
      <div className={homeStyles.metaInfo}>
        <span>7 Weeks</span>
        <span>Intermediate</span>
      </div>
      <div>By David Lee</div>
      <button className={homeStyles.bt}>Git It Now</button>
    </div>

  
    <div className={homeStyles.cardItem}>
      <img src={image5} className={homeStyles.cardImage} />

      <h5>Full Stack Development</h5>
      <p>Learn both frontend and backend technologies.</p>
      <div className={homeStyles.metaInfo}>
        <span>10 Weeks</span>
        <span>Advanced</span>
      </div>
      <div>By Jessica Chen</div>
      <button className={homeStyles.bt}>Git It Now</button>
    </div>
  </div>
</div>
<div className={homeStyles.testimonialSection}>
  <div className={homeStyles.topRow}>
    <div className={homeStyles.headingBlock}>
      <h2>Our Testimonials</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
    </div>
    <button className={homeStyles.viewAll}>View All</button>
  </div>

  <div className={homeStyles.testimonialRow}>
    <div className={homeStyles.testimonialBox}>
      <div className={homeStyles.quote}>
        <p>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
      </div>
      <div className={homeStyles.author}>
        <div className={homeStyles.authorImg}></div>
        <div className={homeStyles.authorDetails}>
          <strong>Sarah L</strong>
          <span>Read Full Story</span>
        </div>
      </div>
    </div>

    <div className={homeStyles.testimonialBox}>
      <div className={homeStyles.quote}>
        <p>The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!</p>
      </div>
      <div className={homeStyles.author}>
        <div className={homeStyles.authorImg}></div>
        <div className={homeStyles.authorDetails}>
          <strong>Emily R</strong>
          <span>Read Full Story</span>
        </div>
      </div>
    </div>

    <div className={homeStyles.testimonialBox}>
      <div className={homeStyles.quote}>
        <p>The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!</p>
      </div>
      <div className={homeStyles.author}>
        <div className={homeStyles.authorImg}></div>
        <div className={homeStyles.authorDetails}>
          <strong>Jason M</strong>
          <span>Read Full Story</span>
        </div>
      </div>
    </div>

    <div className={homeStyles.testimonialBox}>
      <div className={homeStyles.quote}>
        <p>I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!</p>
      </div>
      <div className={homeStyles.author}>
        <div className={homeStyles.authorImg}></div>
        <div className={homeStyles.authorDetails}>
          <strong>Michael K</strong>
          <span>Read Full Story</span>
        </div>
      </div>
    </div>
  </div>
</div>
<div className={homeStyles.pricing}>
  <div className={homeStyles.pricingHeader}>
    <h2>Our Pricing</h2>
    <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.</p>
    <div className={homeStyles.toggle}>
      <button className={homeStyles.active}>Monthly</button>
      <button>Yearly</button>
    </div>
  </div>

  <div className={homeStyles.plans}>
    
    <div className={homeStyles.plan}>
      <div className={homeStyles.planTitle}>Free Plan</div>
      <h1>$0<span>/month</span></h1>
      <div className={homeStyles.features}>
        <h4>Available Features</h4>
        <p><span className={homeStyles.correct}> <IoMdCheckmark /> </span> Access to selected free courses.</p>
        <p><span className={homeStyles.correct}> <IoMdCheckmark /> </span> Limited course materials and resources.</p>
        <p><span className={homeStyles.correct}> <IoMdCheckmark /> </span> Basic community support.</p>
        <p><span className={homeStyles.correct}> <IoMdCheckmark /> </span> No certification upon completion.</p>
        <p><span className={homeStyles.correct}> <IoMdCheckmark /> </span> Ad-supported platform.</p>
        <p><span className={homeStyles.correct}> <IoCloseOutline/> </span> Access to exclusive Pro Plan community forums.</p>
        <p><span className={homeStyles.correct}> <IoCloseOutline/> </span> Early access to new courses and updates.</p>
      </div>
      <button className={homeStyles.getStarted}>Get Started</button>
    </div>

    
    <div className={homeStyles.plan}>
      <div className={homeStyles.planTitle}>Pro Plan</div>
      <h1>$79<span>/month</span></h1>
      <div className={homeStyles.features}>
        <h4>Available Features</h4>
        <p><span className={homeStyles.correct}> <IoMdCheckmark /> </span> Unlimited access to all courses.</p>
        <p><span className={homeStyles.correct}> <IoMdCheckmark /> </span> Unlimited course materials and resources.</p>
        <p><span className={homeStyles.correct}> <IoMdCheckmark /> </span> Priority support from instructors.</p>
        <p><span className={homeStyles.correct}> <IoMdCheckmark /> </span> Course completion certificates.</p>
        <p><span className={homeStyles.correct}> <IoMdCheckmark /> </span> Ad-free experience.</p>
        <p><span className={homeStyles.correct}> <IoMdCheckmark /> </span> Access to exclusive Pro Plan community forums.</p>
        <p><span className={homeStyles.correct}> <IoMdCheckmark /> </span> Early access to new courses and updates.</p>
      </div>
      <button className={homeStyles.getStarted}>Get Started</button>
    </div>
  </div>
</div>
<div className={homeStyles.big}>
<div className={homeStyles.questions}>
  <div className={homeStyles.left}>
    <h2>Frequently Asked Questions</h2>
    <p>Still you have any questions? Contact our Team via support@skillbridge.com</p>
    <button>See All FAQ’s</button>
  </div>
  <div className={homeStyles.right}>
    <div className={homeStyles.ex}>
      <p>Can I enroll in multiple courses at once? <IoCloseOutline size={30}/> </p>
      <h6>Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.</h6>
      <h4 className='arrow'>Enrollment Process for Different Courses <FaArrowRight size={30}/> </h4>
    </div>
    <div className={homeStyles.plus}> What kind of support can I expect from instructors? <FaPlus  size={30}/>
</div>
    <div className={homeStyles.plus}>Are the courses self-paced or do they have specific start and end dates? <FaPlus size={30} />
</div>
    <div className={homeStyles.plus}>Are there any prerequisites for the courses? <FaPlus size={30} />
</div>
    <div className={homeStyles.plus}>Can I download the course materials for offline access? <FaPlus size={30} />
</div>
  </div>
</div>
</div>


    </>
  )
}

export default HomeComponent
