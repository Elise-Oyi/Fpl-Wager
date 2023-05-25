import { createContext, useState } from "react";

export const FplContext = createContext(null)

const FplProvider = (props)=>{
    const [FplPoints,setFplPoints] = useState(0)
    const [ManagerName,setManagerName] = useState('')
    const [TeamName, setTeamName] = useState('')
   

    return(
        <FplContext.Provider value={{FplPoints,setFplPoints,ManagerName,setManagerName,TeamName, setTeamName}}>
            {props.children}
        </FplContext.Provider>
    )
}

export default FplProvider