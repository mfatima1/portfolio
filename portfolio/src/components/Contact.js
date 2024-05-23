import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
import resumePDF from './MalihaFatimaResume.pdf'; 


import './Contact.css'
export const Contact = () => {
  return (
    <div className='main'>
      <div className='content'>
        <div className='left'>
      <h3 className='contact'>Contact</h3>
      </div>
      <div className='right'>
      <a href="mailto:malihameer@hotmail.com" target="_blank" rel="noopener noreferrer" >
            <p className='mail'>Email <MdOutlineMailOutline /></p>
          </a>
          <a href="https://www.linkedin.com/in/maliha-fatima-10525125b" target="_blank" rel="noopener noreferrer" >
            <p className='linkedin'>LinkedIn <FaLinkedin /></p>
          </a>
          <a href={resumePDF} target="_blank" rel="noopener noreferrer">
            <p className='resume'>Resume <RiFilePaper2Line /></p>
            </a>
      </div>
      </div>
    </div>
  )
}

export default Contact;