import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


export default function JoinWager() {

  //---form data
  const [wagerId,setWagerId] = useState('')


    //--api url
    const url = `https://localhost:44352/api/wagers/get-wager/${wagerId}`

    //--naviagte
    const navigate = useNavigate()

  //---join wager error
  const [joinWagerError, setJoinWagerError] = useState({})

  //---handleJoin wager function
  function handleJoinWager(e){
    e.preventDefault();
    setJoinWagerError(ValidateJoinWager({ wagerId }));

    
     //----posting data into database
     try {
      axios.get(url)
       .then(response=>{
        
        if(response.data[0].wagerId){
          navigate(`/pay-token/${wagerId}`)
        }
        
       })
       .catch(error=>{
        console.log(error)
        toast.error('Invalid wager Id!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
       })
     } catch (error) {
       console.log(error)
     }
  }

  //---function ValidateJoinWager
  function ValidateJoinWager(values){
    let errors = {};

    if (!values.wagerId) {
      errors.wagerId = "Wager Url cannot be empty";
    } 

    return errors
  }

  return (
    <motion.div>
    <section className="bg-customBrand-400  h-screen flex my-auto">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0  
     w-10/12 md:w-8/12
    ">

       <div  to= "/" className="flex ml-3 mt-4 text-xl gap-3 pb-3 font-extrabold tracking-tight text-white">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>  <span className='text-3xl text-center mx-auto p-2'> Join Wager</span>
       </div> 

         <div className="w-10/12 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700 ">
           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            
             <form className="space-y-4 md:space-y-6" >
               <div>
                 <label
                   htmlFor="wagerUrl"
                   className="block mb-2 text-sm font-medium text-white"
                 >
                  Wager Id
                 </label>
                 <input
                   type="text"
                   name="text"
                   id="wagerUrl"
                   value= {wagerId}
                   onChange={(e)=>{setWagerId(e.target.value)}}
                   className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                   placeholder="paste wager Id"
                   required = {true}
                 />
                  <p className="text-red-400">{joinWagerError.wagerId}</p>

               </div>
              <div className="mt-4">

              </div>
              <Link>
               <button
                 type="submit"
                 onClick={handleJoinWager}
                 className="w-full text-gray-900 bg-primary-600 focus:ring-4 focus:outline-none font-semibold rounded-lg text-md px-5 py-2.5 text-center bg-white hover:bg-primary-700 dark:focus:ring-primary-800"
               >
                 Pay token
               </button>
              </Link>
              
             
             </form>
           </div>
         </div>
       </div>
       <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
          {/* Same as */}
          <ToastContainer />
     </section>
     </motion.div>
  )
}
