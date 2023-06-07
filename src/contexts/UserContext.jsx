import { createContext, useState } from "react";

export const UserContext = createContext(null)

const UserProvider = ({children})=>{
    const [userId,setUserId] = useState(null)
    const [fplId,setFplId] = useState(0)
    const [tokens,setTokens] = useState(0)
    return(
        <UserContext.Provider value={{userId,setUserId,fplId,setFplId,tokens,setTokens}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider 