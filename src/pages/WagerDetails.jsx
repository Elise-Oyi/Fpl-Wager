import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";




const WagerDetails = () => {
  
  //getting the wagerId from URl
  const {wagerId} = useParams()

  //---data for wagers
  const [wagerName, setWagerName] = useState()
  // wagerId: 12,
  // "wagerName": "wager 3",
  // "entryToken": 5,
  // "createdBy": 4,
  // "gameweek": 42,
  // "isStarted": false,
  // "isCompleted": false

  //--data for wager list

  //---get fpl details url
  const url = `https://localhost:44352/api/wagers/get-wager/${wagerId}`
  //---get wager list Url
  const wagerListUrl = ``

  const isStarted = true;
  const isCompleted = false

    //--useEffect to get wager list
    useEffect(()=>{
       
      if(wagerId)
      axios.get(url)
        .then(response =>{})

    },[])


    if(!wagerId){
      return (
      <div className="mt-12 bg-customBrand-400 h-screen overflow-y-scroll text-center mx-auto my-auto">
         <div
          className="bg-red-900 w-full h-10 "
          style={{ visibility: "hidden" }}
        ></div>
        <h3 className="text-white">You currently have no wager</h3>
      </div>)
    } 


    
  
  
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {wagerId && (
        <div className="h-screen overflow-y-scroll text-center mx-auto p-2 bg-customBrand-300 mt-10 md:mt-0">
        <div
          className="bg-red-900 w-full h-10 "
          style={{ visibility: "hidden" }}
        ></div>

        <div className="bg-customBrand-400 flex justify-center">

          <div className="bg-gray-700 p-3 shadow-md m-4 rounded-sm">
            <h4 className="text-white text-sm">League name</h4>
            <div className="text-green-400 text-sm font-semibold flex gap-1 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
                4
              </div>
          </div>

          <div className="bg-gray-700 p-3 shadow-md m-4 rounded-sm">
            <h4 className="text-white text-sm">League name</h4>
            <div className="text-green-400 text-sm font-semibold flex gap-1 items-center justify-center">
                4
              </div>
          </div>
        </div>

        <div className="mt-12 md:mt-0 w-full md:w-width-600 bg-customBrand-400 text-center mx-auto p-2 rounded-lg">
          
          {/* -----if wager is yet to start--------- */}
          {!isStarted && !isCompleted &&(
            <div className="p-2 w-full">
              <h2 className="text-white">Wager is yet to start</h2>
              <Link to='/entry'>Go back to home page</Link>
            </div>
          )}

          {/* ------if wager is started-------- */}
         {isStarted && ( <div className=" p-2 w-full">
            
              <table className="w-full text-sm text-left text-gray-400">
                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                  <tr>
                  <th scope="col" className="px-2 py-3">
                      Rank
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Manager Name
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Total Pts
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b bg-gray-800 border-gray-700">
                  <td className="px-4 py-4 md:px-2 md:py-1">1</td>
                    <th
                      scope="row"
                      className="px-3 py-4 md:px-2 md:py-1 font-medium   text-white"
                    >
                      Apple MacBook
                      <span className="block text-gray-400 font-light">team name</span>
                    </th>
                    <td className="px-4 py-4 md:px-2 md:py-1">55</td>
                  </tr>
                  
                  <tr className="bg-gray-800 border-gray-700">
                  <td className="px-4 py-4 md:px-2 md:py-1">2</td>
                    <th
                      scope="row"
                      className="px-3 py-4 md:px-2 md:py-1 font-medium   text-white"
                    >
                      Microsoft Surface Pro
                      <span className="block text-gray-400 font-light">team name</span>
                    </th>
                    <td className="px-4 py-4 md:px-2 md:py-1">40</td>
                  </tr>
                </tbody>
              </table>
            
          </div>)}


          {/* -------if wager is ended--------- */}
          {isCompleted && (
            <div className="p-2 w-full">
              <h3 className="text-white">League ended</h3>
              <h1 className="text-white">Winner is Akosua</h1>
            </div>
          )}

        

        </div>
      </div>
        )}

      </motion.div>
    </>
  );
};

export default WagerDetails;
