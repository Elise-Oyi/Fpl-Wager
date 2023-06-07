import { Route, Routes } from "react-router-dom";
import "./App.css";
import RoutesPage from "./RoutesPage";
import { ContextProvider } from "./contexts/NavContext";
import UserProvider, { UserContext } from "./contexts/UserContext";
import FplProvider from "./contexts/FplContext";
import GameweekProvider from "./contexts/GameweekContext";
import PersonsContext from "./contexts/PersonsContext";
import { useContext, useEffect } from "react";
import { getCookie } from "./util/util";

function App() {

  const {setUserId,userId} = useContext(UserContext)

  useEffect(()=>{
    // const userId = getCookie()
    const sessionId = localStorage.getItem('sessionId');
    if(sessionId){ return setUserId(sessionId)}
    console.log(userId)
  },[])

  return (
    // <UserProvider>
    //   <FplProvider>
    //     <GameweekProvider>
    //       <ContextProvider>
            <RoutesPage />
    //       </ContextProvider>
    //     </GameweekProvider>
    //   </FplProvider>
    // </UserProvider>
  );
}

export default App;
