import React, { useContext, useEffect, useState } from "react";
import { faTrash, faMoneyBill, faEye } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

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
  const [wagers, setWagers] = useState();

  //---CONTEXTS
  const {userId} = useContext(UserContext)
  //const userId = 2;

  //--- list of wagers using userId
  const listWagerUrl = `https://localhost:44352/api/users/wager-detailsLists/${userId}`;

  useEffect(() => {
    if(userId)
    //--making a get request
    axios
      .get(listWagerUrl)
      .then((response) => {
        setWagers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [listWagerUrl]);

  //mapping through wagers
  if (!wagers) {
    return (
      <div className="mt-10 bg-customBrand-400 h-screen overflow-y-scroll text-center mx-auto my-auto">
        <div
          className="bg-red-900 w-full h-10 "
          style={{ visibility: "hidden" }}
        ></div>
        <h3 className="text-white">You currently have no wager</h3>
      </div>
    );
  }

 const wagerUI = wagers.map((wager,index) => {
    if (wager.isStarted) {
      return (
        <div  key={index}>
              {/* <div className="text-4xl text-white text-bold flex justify-start p-4">
                Ongoing wagers
              </div> */}
              <Link to={`/wager-details/${wager.wagerId}`}>
               <div className="flex justify-between items-center mx-auto p-1 w-full">
                <span className="text-white text-2xl md:text-2xl py-2 md:py-3 px-4 md:px-6">
                 { wager.wagerName}
                </span>
                <span className="text-white flex items-center gap-1 text-2xl md:text-2xl py-2 md:py-3 px-4 md:px-6 cursor-pointer">
                {wager.entryToken}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </span>
              </div>
              </Link>
              
              <span className="px-6">
                <ColoredLine color="white" />
              </span>
            </div>
      )
    }

    else{
      return(
        
         <React.Fragment key={index}>
           {/* <div className="text-2xl text-orange-900 text-bold flex justify-start p-4">
                Upcoming wagers
              </div> */}

              <Link to={`/wager-details/${wager.wagerId}`}>
              <div className="flex justify-between items-center mx-auto p-2 w-full">
                <span className="text-white text-xl md:text-2xl py-2 md:py-3 px-4 md:px-6">
                { wager.wagerName}
                </span>
                <span className="text-white text-xl md:text-2xl py-2 md:py-3 px-4 md:px-6 cursor-pointer">
                { wager.entryToken}
                  <FontAwesomeIcon
                    className="text-white"
                    icon={faEye}
                    style={{ fontSize: "1.2rem", marginLeft: "10px" }}
                  />
                </span>
              </div>
              </Link>
              
              <span className="px-6">
                <ColoredLine color="white" />
              </span>
          </React.Fragment>
        
         
             
              
          
      )
    }
  });



  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {wagers && (
          <div className="h-screen overflow-y-scroll text-center mx-auto p-2 bg-customBrand-400 mt-10 md:mt-0">
            <div
              className="bg-red-900 w-full h-10 "
              style={{ visibility: "hidden" }}
            ></div>

            <div className="text-5xl text-white text-extrabold flex justify-start p-4">
              Wagers
            </div>

                   
            

            {/* ----------Ongoing Wagers---------- */}

            <div className="w-10/12 rounded-2xl bg-customGreen-200 flex flex-col text-center mx-auto p-2 mt-4">
               
               <div className="text-4xl text-white text-bold flex justify-start p-4">
                Ongoing wagers
              </div>

              {wagerUI}

            </div>

          </div>
        )}
      </motion.div>
    </>
  );
}
