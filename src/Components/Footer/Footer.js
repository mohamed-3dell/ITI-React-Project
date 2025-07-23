import React from 'react'
import './footer.css'
import icon from '../../imgs/Logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div className='lft'>
                <img alt='' src={icon}/>
                <p>hello@skillbridge.com</p>
                <p>hello@skillbridge.com</p>
                <p>hello@skillbridge.com</p>
            </div>
            <div className='ct'>
                <div className='bx'>
                    <h6>Home</h6>
                    <p>Benefits</p>
                    <p>Benefits</p>
                    <p>Benefits</p>
                </div>
                <div className='bx'>
                    <h6>Home</h6>
                    <p>Benefits</p>
                    <p>Benefits</p>
                    <p>Benefits</p>
                </div>
            </div>
            <div className='rgh'>
                <h5>Social Profiles</h5>
                <div>
                                    <FaFacebookSquare size={30} color='#333'/>
                <FaTwitterSquare size={30} color='#333'/>
                <FaLinkedin size={30} color='#333'/>
                </div>

            </div>
        </div>
        <div className='btm'>
            © 2023 Skillbridge. All rights reserved.
        </div>
    </div>
  )
}

export default Footer
