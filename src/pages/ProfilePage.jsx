import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faMoneyBill, faEye } from "@fortawesome/free-solid-svg-icons";


const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
    }}
  />
);

export default function ProfilePage() {
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >

<div className="h-screen overflow-y-scroll text-center mx-auto p-2 bg-customBrand-400 mt-10 md:mt-0">

  <div
    className="bg-red-900 w-full h-10 "
    style={{ visibility: "hidden" }}
  ></div>

  <div className="text-white bg-customBrand-300 p-2">hello</div>

  <div className="text-white bg-customBrand-300 p-2 mt-4">
    <Link to='/wagers'>My Wagers</Link>
  </div>
  
</div>
      </motion.div>
    </>
  )
}
