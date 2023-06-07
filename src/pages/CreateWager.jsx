import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PersonsContext from "../contexts/PersonsContext";


export default function CreateWager() {
  const Currentgameweek = 39;
  const availableGameweek = Currentgameweek + 1;

const {userId} = PersonsContext()

  //--navigate 
  const navigate = useNavigate()

  //--data from Api
  const [wagerId,setWagerId] = useState()

  //---form data
  const [wagerName, setWagerName] = useState("");
  const [entryToken, setEntryToken] = useState(5);
  const [gameweek, setGameweek] = useState(availableGameweek);

    //-- data for api
    const data = {
      wagerName : wagerName,
      entryToken : +entryToken,
      gameweek : +gameweek,
      tokenDistribution:'top 1',
      winType: 'weekly',
      createdBy: +userId,
      isStarted: false,
      isCompleted: false
    }

    //--api url
    const url = 'https://localhost:44352/api/wagers/create-wagers'

  //---handle create wager errors
  const [createWagerErrors, setCreateWagerErrors] = useState({});

  //--- function for handle create wager
  function handleCreatewager(e) {
    e.preventDefault();
    setCreateWagerErrors(ValidateCreateWager({ wagerName, entryToken }));

     //----posting data into database
     try {
      axios.post(url,data)
       .then(response=>{
        console.log(response.data)
        setWagerId(response.data.wagerId)

        navigate(`/pay-token/${response.data.wagerId}`)
       })
       .catch(errors=>{
        console.log(errors)
       })
     } catch (error) {
      console.log(error)
     }
  }


  //--- function for validate create wager errors
  function ValidateCreateWager(values) {
    let errors = {};
    const regexName = /^[A-Za-z0-9]*$/;

    if (!values.wagerName) {
      errors.wagerName = "Name cannot be empty";
    } else if (regexName.wagerName) {
      errors.wagerName = "League name can only contain letters and numbers";
    }
    if (!values.entryToken) {
      errors.entryToken = "Entry token cannot be left empty";
    } else if (values.entryToken < 5) {
      errors.entryToken = "Min entry token is 5";
    }

    return errors;
  }

  return (
    <motion.div>
    <section className="bg-customBrand-400  h-screen flex my-auto">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div
          to="/"
          className="flex ml-3 mt-4 text-xl gap-3 pb-3 font-extrabold tracking-tight text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>{" "}
          <span> Create Wager</span>
        </div>

        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="wagerName"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Wager Name
                </label>
                <input
                  type="text"
                  name="text"
                  id="wagerName"
                  value={wagerName}
                  onChange={(e) => {
                    setWagerName(e.target.value);
                  }}
                  className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Wager name"
                  required
                />
                <p className="text-red-400">{createWagerErrors.wagerName}</p>
              </div>
              <div>
                <label
                  htmlFor="entryToken"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Entry Token
                </label>
                <input
                  type="number"
                  name="entryToken"
                  id="entryToken"
                  placeholder="Entry token"
                  value={entryToken}
                  onChange={(e) => {
                    setEntryToken(e.target.value);
                  }}
                  className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <p className="text-red-400">{createWagerErrors.entryToken}</p>
              </div>

              <label
                htmlFor="entryToken"
                className="block mb-2 text-sm font-medium text-white"
              >
                Gameweek
              </label>
              <select
                //value={gameweek}
                onChange={(e) => setGameweek(e.target.value)}
                className="w-full p-2.5 text-gray-400 bg-gray-700 border-gray-600  border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              >
                <option value={availableGameweek}>week {availableGameweek}</option>
                <option value={parseInt(availableGameweek) +1}>week {availableGameweek + 1}</option>
                <option value={parseInt(availableGameweek) +2}>week {availableGameweek + 2}</option>
                <option value={parseInt(availableGameweek) +3}>week {availableGameweek + 3}</option>
              </select>
              {/* <div className="flex items-center justify-between">
               <div>
                 <label
                   htmlFor="entryToken"
                   className="block mb-2 text-sm font-medium text-white"
                 >
                  Token Distribution
                 </label>
                 <input
                   type="text"
                   name="entryToken"
                   id="entryToken"
                   placeholder="Entry token"
                   className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                   required=""
                 />
               </div>

               <div>
                 <label
                   htmlFor="entryToken"
                   className="block mb-2 text-sm font-medium text-white"
                 >
                  Win Type
                 </label>
                 <input
                   type="text"
                   name="entryToken"
                   id="entryToken"
                   placeholder="Entry token"
                   className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                   required=""
                 />
               </div>
                
               </div>
                */}
              <button
                type="submit"
                onClick={handleCreatewager}
                className="w-full text-gray-900 bg-primary-600 focus:ring-4 focus:outline-none font-semibold rounded-lg text-md px-5 py-2.5 text-center bg-white hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create Wager
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
}
