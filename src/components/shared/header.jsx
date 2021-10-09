import React from 'react'
import { AiOutlineStock } from 'react-icons/ai'
import { IconContext } from 'react-icons';

export default function Header() {
  return (
    <>
      <header className="h-26 h-24 flex flex-col items-center bg-daWhite">
        <div className="h-1/2 w-full flex">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-daBlue to-daGreen">DEEPANALYSIS</h2>
          <IconContext.Provider value={{color: '#3e6b89', size: '40px'}}>
            <AiOutlineStock />
          </IconContext.Provider>
        </div>
        <div className="h-1/2 w-full flex flex-col place-content-center bg-daBlue">
          <nav className="flex justify-end space-x-10 pr-10 items-center">
            <a className="text-gray-300">About</a>
            <a className="text-gray-300">Services</a>
            <a className="text-gray-300">Contact</a>
          </nav>
        </div>
      </header>
    </>
  )
}
