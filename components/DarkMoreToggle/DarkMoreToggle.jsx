"use client"

import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from "react"

export default function DarkMoreToggle() {
  const { mode, toggle } = useContext(ThemeContext)

  return (
    <div className="container mx-auto px-1 select-none cursor-pointer relative border-solid border-2 border-pink-400 rounded-3xl flex justify-between items-center" onClick={toggle}>
        <div className="text-lg">🌙</div>
        <div className="text-lg">🌑</div>
        <div 
        className="w-6 p-2 bg-pink-400 aspect-square rounded-full absolute" 
        style={mode === "light"? {left: "2px"} : {right: "2px"}}
        />
    </div>
  )
}

