import React from "react";
import { faTrash, faMoneyBill, faEye } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
    }}
  />
);

export default function Wagers() {
  const wager = true;

  if (!wager) {
    return (
      <div className="mt-12 bg-customBrand-400 h-screen overflow-y-scroll text-center mx-auto my-auto">
        <div
          className="bg-red-900 w-full h-10 "
          style={{ visibility: "hidden" }}
        ></div>
        <h3 className="text-white">You currently have no wager</h3>
      </div>
    );
  }

  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {wager && (

<div className="h-screen overflow-y-scroll text-center mx-auto p-2 bg-customBrand-400 mt-10 md:mt-0">
<div
  className="bg-red-900 w-full h-10 "
  style={{ visibility: "hidden" }}
></div>

{/* ----------Wagers---------- */}
<div className="w-10/12 rounded-2xl bg-customGreen-200 flex flex-col text-center mx-auto p-2 mt-4">
  <div className="text-4xl text-white text-extrabold flex justify-start p-4">
    Wagers
  </div>

  <div className="flex justify-between items-center mx-auto p-2 w-full">
    <span className="text-white text-md md:text-2xl py-2 md:py-3 px-4 md:px-6">
      Wager 1
    </span>
    <span className="text-white text-md md:text-2xl py-2 md:py-3 px-4 md:px-6 cursor-pointer">
      ₵ 33
      <FontAwesomeIcon
        className="text-white"
        icon={faEye}
        style={{ fontSize: "1.2rem", marginLeft: "10px" }}
      />
    </span>
  </div>
  <span className="px-6">
    <ColoredLine color="white" />
  </span>
  <div className="flex justify-between items-center mx-auto p-2 w-full">
    <span className="text-white text-md md:text-2xl py-2 md:py-3 px-4 md:px-6 cursor-pointer">
      Wager 2
    </span>
    <span className="text-white text-md md:text-2xl py-2 md:py-3 px-4 md:px-6 cursor-pointer">
      ₵ 64
      <FontAwesomeIcon
        className="text-white"
        icon={faEye}
        style={{ fontSize: "1.2rem", marginLeft: "10px" }}
      />
    </span>
  </div>
  <span className="px-6">
    <ColoredLine color="white" />
  </span>
  <div className="flex justify-between items-center mx-auto p-2 w-full">
    <span className="text-white text-md md:text-2xl py-2 md:py-3 px-4 md:px-6">
      Wager 3
    </span>
    <Link to="/wager">
      <span className="text-white text-md md:text-2xl py-2 md:py-3 px-4 md:px-6 cursor-pointer">
        ₵ 41
        <FontAwesomeIcon
          className="text-white"
          icon={faEye}
          style={{ fontSize: "1.2rem", marginLeft: "10px" }}
        />
      </span>
    </Link>
  </div>
</div>
</div>


        )}
             </motion.div>
    </>
  );
}
