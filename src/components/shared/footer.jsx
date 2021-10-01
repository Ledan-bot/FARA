import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa'
import { IconContext } from 'react-icons';

export default function Footer() {
  return (
    <>
      <footer className="h-14 flex flex-wrap items-center bg-indigo-800 ">
        <div className="flex-1 ">
          <h2 className="text-gray-300">Contact me via Socials:</h2>
        </div>
        <IconContext.Provider value={{ size: "40px", color: '#D1D5DB' }}>
          <div className="flex-initial justify-end pr-1">
            <FaLinkedin />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "40px", color: '#D1D5DB' }}>
          <div className="flex-initial justify-end pr-1">
            <FaGithub />
          </div>
        </IconContext.Provider>
      </footer>
    </>
  )
}