import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { FplContext } from '../contexts/FplContext';
import { PaystackButton } from 'react-paystack';
import PersonsContext from '../contexts/PersonsContext';


import PaystackPop from '@paystack/inline-js'
import axios from 'axios';

export default function BuyToken() {

  //---CONTEXT
  const {userId,tokens} = PersonsContext()

  const[email,setEmail] =useState('')
  const [amount,setAmount]= useState(10)

  //--generating reference for user
  const reference = (new Date()).getTime().toString()

  //---update tokens url
  const updateTokensUrl = 'https://localhost:44352/api/users/update-tokens'
  
  //--update tokens data
  const tokensData = {
    id : +userId,
    tokens : +amount+tokens
  }


  //--handleClose for paystack
  const handleClose = () => { 
    alert("Transaction failed " )
  }



  function handleBuyToken(e){
    e.preventDefault() 

    const paystack = new PaystackPop()
    
    paystack.newTransaction({
      key:'pk_test_0cb209c8fb9b85bbe4aa3353bbb4af6d0d22a6b2',
      amount:amount*100,
      email:email,
      // onSuccess: (reference) => handleSuccess,
      onSuccess: () => {
        toast.success("Transaction successful with reference " + reference, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setAmount(10)
        setEmail('')
    
        //updating users token after purchase
         //--updating tokens in api
         axios.put(updateTokensUrl,tokensData)
         .then(response=>{
          console.log(response.data)
           })
          .catch(error=>{console.log(error)})
         
      },
      onClose: handleClose,
    })


  }

  return (
    <section className="bg-gray-900 h-screen flex my-auto w-full">
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
        <span> FPL WAGER</span>
      </div> 

      <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-600 border-gray-500">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-black">
           Buy Token
          </h1>
          <form className="space-y-4 md:space-y-6">

          <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="email"
                required
              />
            </div>

           
            <div>
              <label
                htmlFor="amount"
                className="block mb-2 text-sm font-medium text-white"
              >
                Amount
              </label>
              <input
                type="number"
                name="amounr"
                id="amount"
                placeholder="amount"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          
            <button
             onClick={handleBuyToken}
              type="submit"
              className="w-full text-gray-900 bg-primary-600 focus:ring-4 focus:outline-none font-semibold rounded-lg text-md px-5 py-2.5 text-center bg-customGreen-200 hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Buy token
            </button>
           {/* <div className="flex items-center bg-customGreen-200 p-2 rounded-md justify-center hover:bg-green-700 shadow-md">
             <PaystackButton {...componentProps} className='text-white'/>
           </div> */}
           
            
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

  )
}
