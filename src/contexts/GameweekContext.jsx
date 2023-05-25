import { createContext, useState } from "react";

export const GamewekContext = createContext(null)

const GameweekProvider = (props)=>{
    const [gameweek,setGameweek] = useState('')
    const [isFinished, setIsFinished] = useState()
    const [isCurrent, setIsCurrent] = useState()
    

    return(
        <GamewekContext.Provider value={{gameweek,setGameweek,isFinished,setIsFinished,isCurrent, setIsCurrent}}>
            {props.children}
        </GamewekContext.Provider>
    )
}

export default GameweekProvider