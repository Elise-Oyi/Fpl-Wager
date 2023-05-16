import { createContext, useContext, useState } from "react";

export const NavContext = createContext()

const initialState = {
    //userProfile: false,
    notification: false
}

export const ContextProvider = ({children}) =>{
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const handleClick = (clicked) =>setIsClicked({...initialState, [clicked]:true})
       
    

    return(
        <NavContext.Provider
          value={{activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize}}
        >
            {children}
        </NavContext.Provider>
    )
}
   