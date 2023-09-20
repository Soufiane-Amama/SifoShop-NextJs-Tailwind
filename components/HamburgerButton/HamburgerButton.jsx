"use client";

import { useContext } from "react"
import { OpenMenuContext } from "@/context/OpenMenuContext";
import iconClose from "/public/images/icons/icon-close.svg"
import Image from "next/image";


export default function HamburgerButton() {
  const { open, toggleMenu } = useContext(OpenMenuContext)

  return (
    <>
        <button onClick={toggleMenu}  className={`p-2 lg:hidden ${ open ? 'invisible' : 'visible'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
			<button  onClick={toggleMenu} className={`absolute w-8 h-8 right-4  ${ !open ? 'invisible' : 'visible'}`}><Image src={iconClose} /></button>
   </>
  )
}
