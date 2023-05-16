// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   BrowserRouter,
//   useLocation,
// } from "react-router-dom";
import {  Routes, Route, useLocation } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Wagers from "./pages/Wagers";
import Token from "./pages/Token";
import Profile from "./pages/Profile";
import Fixtures from "./pages/Fixtures";
import Notification from "./pages/Notification";
import Entry from "./pages/Entry";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { NavContext } from "./contexts/NavContext";
import { useContext } from "react";
import { AnimatePresence } from 'framer-motion';


export default function RoutesPage() {
  const { activeMenu } = useContext(NavContext);
  const location = useLocation();

  return (
    <AnimatePresence wait>
    <div className="flex relative">
      {activeMenu ? (
        <div className="w-72 fixed sidebar bg-white ">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0">
          <Sidebar />
        </div>
      )}
      <div
        className={
          activeMenu
            ? " bg-main-bg min-h-screen md:ml-72 w-full  "
            : "bg-main-bg  w-full min-h-screen flex-2 "
        }
      >
        <div className="fixed md:static bg-main-bg navbar w-full ">
          <Navbar />
        </div>

        <div>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Homepage />} />
            <Route path="/wagers" element={<Wagers />} />
            <Route path="/token" element={<Token />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/entry" element={<Entry />} />
          </Routes>
        </div>
      </div>
      </div>
     </AnimatePresence>
  );
}
