import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faMoneyBill, faEye } from "@fortawesome/free-solid-svg-icons";
import banner from "../data/hero-img-2.avif";
import { Avatar, Dropdown } from "flowbite-react";
import CreateWager from "./CreateWager";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
    }}
  />
);

const Entry = () => {
  
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="h-screen overflow-y-scroll text-center mx-auto md:p-2 bg-customBrand-300 mt-10 md:mt-0">
          <div
            className="bg-red-900 w-10/12 h-10 "
            style={{ visibility: "hidden" }}
          ></div>

          <div className="mt-12 md:mt-0 w-full md:w-width-600 bg-customBrand-400 text-center mx-auto md:p-2  rounded-lg">
            {/* <div className='w-width-400 bg-green-500 h-60 z-20'></div> */}
            <div className=" md:p-2 w-8/12 h-screen overflow-scroll text-center mx-auto">
              {/* <div className='w-full'>
                    <img src={banner} className='w-80'/>
                    </div> */}

              <div
                className="bg-red-900 w-full h-10 "
                style={{ visibility: "hidden" }}
              ></div>

              {/* notice board */}
              <div className="bg-customBrand-500  rounded-2xl md:w-10/12 text-center mx-auto">
                <div className="flex flex-col md:p-2 items-center mx-auto">
                  <div className="flex justify-between items-center mx-auto p-2 w-full ">
                    <span className="text-white text-md md:text-2xl py-2 md:py-3 px-4 md:px-6">
                      Lizza Bans
                    </span>

                    <span className="text-white text-md md:text-2xl py-2 md:py-3 px-4 md:px-6 text-semibold">
                      FPL Points
                    </span>
                  </div>

                  <div className="flex justify-between items-center mx-auto p-2 w-full ">
                    <span className="text-white text-md md:text-2xl py-2 md:py-3 px-4 md:px-8">
                      <FontAwesomeIcon
                        className="text-white"
                        icon={faMoneyBill}
                        style={{ fontSize: "2.6rem" }}
                      />
                    </span>

                    <span className="text-white text-md md:text-4xl py-2 md:py-3 px-4 md:px-6 text-extrabold">
                      345
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="bg-red-900 w-full h-10 "
                style={{ visibility: "hidden" }}
              ></div>

              {/* --------Wagers-------------- */}
              <div className=" rounded-2xl bg-customGreen-200 flex flex-col text-center mx-auto p-2 ">
                <div className="flex">
                    <div className="text-2xl md:text-4xl text-white text-extrabold flex justify-start p-4">
                    Wagers
                    </div>
                    <div className=" md:p-2 flex justify-center items-center ml-auto px-1 md:px-4  rounded-xl">
                    <Link className="text-sm md:text-lg text-extrabold text-red-900" to='/wagers'>
                        View all
                    </Link>
                    </div>
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

              {/* -----floating button-------- */}
              <div className="fixed pr-2 z-20 right-8 bottom-12">
                
              <Dropdown
              label={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>}
              arrowIcon={false}
              inline={true}
            >
                
            
            <Dropdown.Header>
              <span className="block text-16 text-gray-500 font-bold">
                <Link to='/create-wager'>Create wager</Link>
              </span>
              <span className="block text-16 text-gray-500 font-bold">
              <Link to='/join-wager'>Join wager</Link>
              </span>
            </Dropdown.Header>
            {/* <Dropdown.Item>
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item>
              Settings
            </Dropdown.Item>
            <Dropdown.Item>
              Earnings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              Sign out
            </Dropdown.Item> */}
          </Dropdown>

                <button>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> */}

                </button>
              </div>
              
            </div>
          </div>
          
        </div>
      </motion.div>
    </>
  );
};

export default Entry;
