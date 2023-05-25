import { Route, Routes } from "react-router-dom";
import "./App.css";
import RoutesPage from "./RoutesPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Router from './Router'

function App() {
  return (
    <>
    {/* <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
      </Routes> */}
      <RoutesPage />
      {/* <Router /> */}
      
     
      
    </>
  );
}

export default App;
