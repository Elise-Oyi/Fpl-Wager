
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
import ProtectedRoutes from "./components/ProtectedRoutes";
import BuyToken from "./pages/BuyToken";
import WithdrawToken from "./pages/WithdrawToken";
import Wager from "./pages/Wager";


export default function RoutesPage() {
  const { activeMenu } = useContext(NavContext);
  
  const location = useLocation();

  return (

    
    <AnimatePresence wait>


    <div className="flex relative ">
      {activeMenu ? (
        // <div className="w-72 fixed sidebar bg-customBrand-300 ">
        //   <Sidebar />
        // </div>
        location.pathname !== "/login" && location.pathname !== "/register"  && location.pathname !== "*"  && (
          <div className="w-72 fixed sidebar bg-customBrand-300  ">
           <Sidebar />
          </div>)
          // <div className="w-72 fixed sidebar bg-customBrand-300 ">
          // <Sidebar />
          // </div>
       
      ) : (
        <div className="w-0">
          <Sidebar />
        </div>
      )}
      <div
        className={
          activeMenu
            ? " bg-main-bg min-h-screen w-full  md:ml-72"
            : "bg-main-bg  w-full min-h-screen flex-2 "
        }
      >
            {/* <div className="fixed md:static bg-customBrand-300 navbar w-full ">
              <Navbar />
            </div> */}
             {location.pathname !== "/login" && location.pathname !== "/register"  && location.pathname !== "/*" && (
            <div className="fixed md:static bg-customBrand-300 navbar w-full ">
              <Navbar />
            </div>)}

        <div>
          
        <Routes location={location} key={location.pathname}>
       
        <Route  element={<ProtectedRoutes/>}>

            <Route path="/" element={<Homepage />} />
            <Route path="/wagers" element={<Wagers />} />
            <Route path="/token" element={<Token />} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/wager-details/:wagerId" element={<WagerDetails />} />
            <Route path="/entry" element={<Entry />} />
            <Route path="/create-wager" element={<CreateWager />} />
            <Route path="/join-wager" element={<JoinWager />} />
            <Route path="/pay-token/:wagerId" element={<PayToken />} />
           <Route path="/buy-token" element={<BuyToken />} />
            <Route path="/withdraw-token" element={<WithdrawToken />} />
       
        </Route>

        {/* <Route path="/buy-token" element={<BuyToken />} /> */}

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
                {/* <Route path="/wagerrr" element={<Wager />} /> */}
            <Route path="/*" element={<NotFound />} />


          </Routes>
        </div>

      </div>
      </div>
     </AnimatePresence>
  );
}
