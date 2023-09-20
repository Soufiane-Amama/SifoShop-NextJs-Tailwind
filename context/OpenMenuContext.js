"use client"

const { createContext, useState } = require("react")


export const OpenMenuContext = createContext()

function OpenMenuProvider({children}) {
  const [open, setOpen] = useState(false); 

  const toggleMenu = () => {
    setOpen(!open);
  }
  
    
  return (
    <OpenMenuContext.Provider value={{ open, toggleMenu }}>
            {children}
    </OpenMenuContext.Provider>
  )
}

export default OpenMenuProvider;