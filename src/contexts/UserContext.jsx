import { createContext, useState } from "react";

export const UserContext = createContext(null)

const UserProvider = (props)=>{
    const [userId,setUserId] = useState('')
    const [fplId,setFplId] = useState(0)
    const [tokens,setTokens] = useState(0)
    return(
        <UserContext.Provider value={{userId,setUserId,fplId,setFplId,tokens,setTokens}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider