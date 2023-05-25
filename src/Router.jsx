import {  Routes, Route, useLocation } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Wagers from "./pages/Wagers";
import Token from "./pages/Token";
import ProfilePage from "./pages/ProfilePage";
import Fixtures from "./pages/Fixtures";
import Notification from "./pages/Notification";
import Entry from "./pages/Entry";
import WagerDetails from "./pages/WagerDetails";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { NavContext } from "./contexts/NavContext";
import { useContext } from "react";
import { AnimatePresence } from 'framer-motion';
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateWager from "./pages/CreateWager";
import JoinWager from "./pages/JoinWager";
import PayToken from "./pages/PayToken";
import NotFound from "./pages/NotFound";
import Trial from "./pages/Trial";


export default function RoutesPage() {
  const { activeMenu } = useContext(NavContext);
  const location = useLocation();

  return (

    
    <AnimatePresence wait>


    <div className="flex relative ">
     
          
        <Routes location={location} key={location.pathname}>
       
            <Route path="/" element={<Homepage />} />
            <Route path="/wagers" element={<Wagers />} />
            <Route path="/token" element={<Token />} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/wager-details" element={<WagerDetails />} />
            <Route path="/entry" element={<Entry />} />
            <Route path="/create-wager" element={<CreateWager />} />
            <Route path="/join-wager" element={<JoinWager />} />
            <Route path="/pay-token" element={<PayToken />} />
            <Route path="/login"      element={<Login />} />
            <Route path="/register"      element={<Register />} />
            <Route path="/trial"      element={<Trial />} />
            <Route path="*" element={<NotFound />} />


          </Routes>
        

      </div>
     </AnimatePresence>
  );
}
