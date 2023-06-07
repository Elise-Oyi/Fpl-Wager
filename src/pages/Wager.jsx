import React, { useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import axios from 'axios'



const proxyURL = 'https://cors-anywhere.herokuapp.com/';
const baseURL = 'https://fantasy.premierleague.com/api/';

export const reqType = {
  bootstrap : 'bootstrap-static/', //Overview
  element : 'element-summary/', //Players (playderID)
  events : 'events', // Get all gameweeks
  event : 'event',  //A selected gameweek
  entry : 'entry', //Get a team
  elementTypes: 'element-types', // Get all player positions
  gameweekFixtures: 'fixtures/?event', //Get all fixtures for a specified gameweek (gameweek number)
  teams: 'teams/', //Get all teams,
  leagueClassicStanding: 'leagues-classic/' //Get league standing at current gameweek.
}

// export const doCORSRequest = async (url) => {
//   const response = await fetch(proxyURL + baseURL + url);
//   const myJson = await response.json();
//   return myJson
// }


const Wager = () => {

  const fplUrl = `https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/api/entry/1101/`;



  axios.get(fplUrl)
   .then(res=>console.log(res.data))
   .catch(error=>console.log(error))
  


  // axios.get(fplUrl)
  // .then((resp=>{
  //   console.log(resp.data)
  // }))
  // .catch(error=>{
  //   console.log(error)
  // })
  // const url = 'https://fantasy-premier-league3.p.rapidapi.com/data/types',

 const headers = {
    "content-length": "812",
    "content-type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }

// const options = {
//   method: 'GET',
//   url: 'https://fantasy-premier-league3.p.rapidapi.com/data/types',
//   headers: {
//     'X-RapidAPI-Key': 'd6533fae6amshd30484bbe4ef096p19ffa0jsn65580ea13803',
//     'X-RapidAPI-Host': 'fantasy-premier-league3.p.rapidapi.com'
//   }
// };








  return (
    <>
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }} >


            <div className='h-screen overflow-y-scroll text-center mx-auto p-2 bg-customBrand-300 mt-10 md:mt-0'>
            <div className="bg-red-900 w-full h-10 " style={{visibility: 'hidden'}}></div>

              <div className='mt-12 md:mt-0 w-full md:w-width-600 bg-customBrand-200 text-center mx-auto p-2 rounded-lg'>
                <div className=' p-2 w-full'>


                    <h1 className='text-white'>Hello</h1>


                </div>
                </div>
                
                
                
                
                
                
                
                </div>

                </motion.div>
    
    
    </>
  )
}

export default Wager