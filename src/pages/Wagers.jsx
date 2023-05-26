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
  //const {userId} = useContext(UserContext)
  const userId = 2;

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
  }, []);

  //,apping through wagers
  if (!wagers) {
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

 const wagerUI = wagers.map((wager,index) => {
    if (wager.isStarted) {
      return (
        <div  key={index}>
              {/* <div className="text-4xl text-white text-bold flex justify-start p-4">
                Ongoing wagers
              </div> */}
              <Link to={`/wager-details/${wager.wagerId}`}>
               <div className="flex justify-between items-center mx-auto p-2 w-full">
                <span className="text-white text-2xl md:text-2xl py-2 md:py-3 px-4 md:px-6">
                 { wager.wagerName}
                </span>
                <span className="text-white text-2xl md:text-2xl py-2 md:py-3 px-4 md:px-6 cursor-pointer">
                  {wager.entryToken}
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
            </div>
      )
    }

    else{
      return(
          <React.Fragment key={index}>
           <div className="text-2xl text-orange-900 text-bold flex justify-start p-4">
                Upcoming wagers
              </div>

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
