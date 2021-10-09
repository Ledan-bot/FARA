import React from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import { IconContext } from 'react-icons';

export default function Header() {
  return (
    <>
      <header className="h-14 flex flex-wrap items-center bg-daBlue">
        <div className="flex-1 pl-5">
          <h2 className="text-gray-300">Research Assistant</h2>
        </div>
        <IconContext.Provider value={{ size: "40px", color: '#D1D5DB' }}>
          <div className="flex-initial justify-end pr-1">
            <AiOutlineBars />
          </div>
        </IconContext.Provider>
      </header>
    </>
  )
}