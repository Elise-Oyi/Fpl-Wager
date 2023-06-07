import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GamewekContext } from "../contexts/GameweekContext";

const WagerDetails = () => {
  //---CONTEXT
  const { gameweek } = useContext(GamewekContext);
  //getting the wagerId from URl
  const { wagerId } = useParams();

  // //---data for wagers
  // const [wagerName, setWagerName] = useState()
  // const [entryToken, setEntryToken] = useState()
  // const [createdBy, setCreatedBy] = useState()

  // let wagerDetails ={}
  const [wagerDetails, setWagerDetails] = useState({
    wagerName: "a",
    entryToken: 0,
    createdBy: 0,
    isStarted: "d",
    isCompleted: "e",
    gameweek: 0,
  });

  const [wagerUsers, setWagerUsers] = useState();
 const [numberOfUsers, setNumberOfUsers] = useState(0)
 

  const [tokenPool,setTokenPool] = useState(0)

  //--getting winner
  const [winner,setWinner] = useState()

  //--data for wager list

  //---get fpl details url
  const getWagerUrl = `https://localhost:44352/api/wagers/get-wager/${wagerId}`;
  //---get wager list Url
  const wagerListUrl = `https://localhost:44352/api/wagers/wager-lists/${wagerId}`;
  //---fpl api
  //const fplUrl = `https://fantasy.premierleague.com/api/entry/${wagerUsers.fplId}/`;
  //--update is Started
  const updateIsStarted = `https://localhost:44352/api/wagers/update-isStarted`
   //--update is completed
   const updateIsCompleted = `https://localhost:44352/api/wagers/update-isCompleted`
     //---update tokens url
  const updateTokensUrl = 'https://localhost:44352/api/users/update-tokens'

 




  //--useEffect to get wager details
  useEffect(() => {
    if (wagerId)
      //---to get wager details
      axios
        .get(getWagerUrl)
        .then((response) => {
          wagerDetails.wagerName = response.data[0].wagerName;
          wagerDetails.entryToken = response.data[0].entryToken;
          wagerDetails.createdBy = response.data[0].createdBy;
          wagerDetails.isStarted = response.data[0].isStarted;
          wagerDetails.isCompleted = response.data[0].isCompleted;
          wagerDetails.gameweek = response.data[0].gameweek;

          setWagerDetails({ ...wagerDetails });
        })
        .catch((error) => {
          console.log(error);
        });

    //---to get users in the wager
    axios
      .get(wagerListUrl)
      .then((response) => {
        // console.log(response.data)
        const users = response.data.map((item) => ({
          userId: item.userId,
          fplId: item.fplId,
        }));

        // setWagerUsers(users);

        //--- Fetch additional details for each user using the Fpl API
        const userPromises = users.map((user) =>
          axios.get(
            `https://fantasy.premierleague.com/api/entry/${user.fplId}/`
          )
        );

        Promise.all(userPromises)
          .then((responses) => {
            //--- Update wagerUsers array with additional details
            const updatedUsers = users.map((user, index) => ({
              ...user,
              fplPoint: responses[index].data.summary_overall_points,
              teamName: responses[index].data.name,
              managerName:
                responses[index].data.player_first_name +
                " " +
                responses[index].data.player_last_name,
            }));

            setWagerUsers(updatedUsers);

          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });

      

  }, [wagerId]);


    //---second useEffect to handle isStarted
  useEffect(()=>{

    if(wagerDetails.gameweek)
    if(wagerDetails.gameweek === gameweek) 
      axios.put(updateIsStarted,{ wagerId:+wagerId, isStarted:true})
       .then(res=>{
        console.log(res.data)
        
      })
       .catch(error=>console.log(error)) 
       
  },[wagerDetails.gameweek])


   //---third useEffect to handle isCompleted and transfer tokenPool to winner
  useEffect(()=>{

   

    if(wagerDetails.gameweek)
    if(wagerDetails.gameweek < gameweek) 
      axios.put(updateIsCompleted,{ wagerId:+wagerId, isCompleted:true})
       .then(res=>{
        setWinner(wagerUsers[0])

        //updating winners tokens
        axios.put(updateTokensUrl,{id:+winner, tokens:+tokenPool})
        .then(response=>{
         console.log(response.data)
        })
        .catch(error=>console.log(error))

      })
       .catch(error=>console.log(error))     
       
  },[wagerDetails.gameweek])


  //---fourth useEffect -- to set number of users
  useEffect(()=>{
    if(wagerUsers) {
      setNumberOfUsers(wagerUsers.length)
      setTokenPool(numberOfUsers * wagerDetails.entryToken -
      0.1 * (numberOfUsers * wagerDetails.entryToken))
     
     
    }
  },[wagerUsers])


    //---fifth useEffect -- to set token pool
    useEffect(()=>{
      if(numberOfUsers) {
        setTokenPool(numberOfUsers * wagerDetails.entryToken -
        0.1 * (numberOfUsers * wagerDetails.entryToken))  
      }
    },[numberOfUsers])


  if (!wagerId) {
    return (
      <div className=" bg-customBrand-400 h-screen w-full overflow-y-scroll flex flex-col justify-center item-center mx-auto my-auto">
        <h3 className="text-white text-2xl text-center mx-auto">
          You currently have no wager
        </h3>
      </div>
    );
  }

  

  //----displaying users in table from the api
  if (!wagerUsers) return <h2>No users in the table</h2>;
  const sortedWagerUsers = wagerUsers.sort((a, b) => b.fplPoint - a.fplPoint);

  const tableUI = sortedWagerUsers.map((user, index) => {
    return (
      <tbody key={index}>
        <tr className="border-b  border-gray-700 bg-customBrand-200 ">
          <td className="px-4 py-4 md:px-2 md:py-1 rounded-t-xl ">
            {index + 1}
          </td>
          <th
            scope="row"
            className="px-3 py-4 md:px-2 md:py-1 font-medium   text-white  "
          >
            {user.managerName}
            <span className="block text-gray-400  font-light">
              {user.teamName}
            </span>
          </th>
          <td className="px-4 py-4 md:px-2 md:py-1">{user.fplPoint}</td>
        </tr>
      </tbody>
    );
  });



  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {wagerId && (
          <div className="h-screen overflow-y-scroll text-center mx-auto p-2 bg-customBrand-300 mt-10 md:mt-0">
            <div
              className="bg-red-900 w-full h-10 "
              style={{ visibility: "hidden" }}
            ></div>

            <div className="bg-customBrand-400 flex justify-center mt-5">
              <div className="bg-blue-600 p-3 shadow-md m-4 rounded-2xl w-200">
                <h4 className="text-white text-xl mb-6">
                  {wagerDetails.wagerName}
                </h4>
                <div className="text-white text-xl font-semibold flex gap-1 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
                  {wagerDetails.entryToken}
                </div>
              </div>

              <div className="bg-green-600 p-3 shadow-md m-4 rounded-2xl w-200">
                <h4 className="text-white text-xl mb-6">Pool Token</h4>
                <div className="text-white text-xl font-semibold flex gap-1 items-center justify-center">
                  { tokenPool}
                </div>
              </div>
            </div>
            <div className="h-10v"> </div>
            <div className="mt-12 md:mt-0 w-full md:w-width-600 bg-customBrand-400 text-center mx-auto p-2 rounded-lg">
              {/* -----if wager is yet to start--------- */}
              {!wagerDetails.isStarted && !wagerDetails.isCompleted && (
                <div className="p-2 w-full">
                  <h2 className="text-white text-2xl">Wager is yet to start</h2>
                  <Link to="/" className="text-sm text-blue-500">
                    go back
                  </Link>
                </div>
              )}

              {/* ------if wager is started-------- */}
              {!wagerDetails.isCompleted && (
                <div className=" p-2 w-full">
                  <table className="w-full text-sm text-left text-gray-400  md:w-8/12 mt-10 mb-10">
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
                    {tableUI}
                  </table>
                </div>
              )}

              {/* -------if wager is ended--------- */}
              {wagerDetails.isCompleted && (
                <div className="p-2 w-full">
                  <h3 className="text-white">League ended</h3>
                  <h1 className="text-white">Winner is {winner.managerName} with an Fpl point of {winner.fplPoint}</h1>
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
