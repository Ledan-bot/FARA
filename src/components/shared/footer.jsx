import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa'
import { IconContext } from 'react-icons';

export default function Footer() {
  return (
    <>
      <footer className="h-14 flex flex-wrap items-center bg-daGreen ">
        <div className="flex-1 ">
          <h2>Contact me via Socials:</h2>
        </div>
        <IconContext.Provider value={{ size: "40px", color: '#000000' }}>
          <a href="https://www.linkedin.com/in/nicholas-ledan-a1b542209/" className="flex-initial justify-end pr-1">
            <FaLinkedin />
          </a>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "40px", color: '#000000' }}>
          <a href="https://github.com/Ledan-bot" className="flex-initial justify-end pr-1">
            <FaGithub />
          </a>
        </IconContext.Provider>
      </footer>
    </>
  )
}