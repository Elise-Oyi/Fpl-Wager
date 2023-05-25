import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import axios from 'axios'

export default function PayToken() {

  //---CONTEXTS
  const {tokens:token,userId, setTokens} = useContext(UserContext)

  //---entry token
  const [entryToken, setEntryToken] = useState(0)
  const [wagerName, setWagerName] = useState('')
  const [createdBy, setCreatedBy] = useState()
  const [gameweek, setGameweek] = useState()

  //---geting the wagerId from url
  const {wagerId} = useParams()

  //---update tokens url
  const updateTokensUrl = 'https://localhost:44352/api/users/update-tokens'
  //---wager details url
  const wagerUrl = `https://localhost:44352/api/wagers/get-wager/${wagerId}`
  //---join wager url
  const joinUrl = `https://localhost:44352/api/wagers/joinwager`

  //--join wager data
  const joinWagerData = {
    userId: userId,
    wagerId: wagerId
  }

  //--update tokens data
  const tokensData = {
    userId : userId,
    tokens : token
  }

  //--navigate
  const navigate = useNavigate()


  //getting wager info using wagerId
 useEffect(()=>{
    if(wagerId) {
       axios.get(wagerUrl)
     .then(response =>{
      setEntryToken(response.data[0].entryToken)
      setWagerName(response.data[0].wagerName)
      setCreatedBy(response.data[0].createdBy)
      setGameweek(response.data[0].gameweek)
     })
    }
   
  },[wagerId])


  //---confirm pay function
  function handleConfirmPay(){
    if(token > entryToken){
      token = token - entryToken

      //--updating tokens in api
      axios.put(updateTokensUrl,tokensData)
       .then(response=>{
        console.log(response.data)
        setTokens(response.data.tokens)

           
        axios.post(joinUrl,joinWagerData)
         .then(res => {
          console.log(res.data)
          alert("you hav joined successfully")

        //--navigating to the join wager page
          navigate(`/wager-details/${wagerId}`)
         })
         .catch(error=>{
          console.log(error)
         })

      
       })
       .catch(error=>{
        console.log(error)
       })

    }
    else{
      alert('insufficient tokens')
    }
  }


  return (
    <div className='h-screen overflow-y-scroll text-center mx-auto md:p-2 bg-customBrand-400 mt-10 md:mt-0'>
          <div
            className="bg-red-900 w-10/12 h-10 "
            style={{ visibility: "hidden" }}
          ></div>
      <div className="bg-customBrand-300 py-4 text-2xl mb-2">
        <p className='text-gray-200'>Wager Id: {wagerId}</p>
      </div>

      <div className="bg-customBrand-300 p-3 border-1 border-gray-300 text-white m-3">
        <h4>Gameweek: {gameweek}</h4>
        <h2 className='text-md'>wager Name: {wagerName}</h2>
        <h2 className='font-bold text-customGreen-200 text-xl'>Entry Token: {entryToken}</h2>
        <p>Created by: {createdBy}</p>
      </div>

      <button onClick={handleConfirmPay} className='text-white p-3 bg-customGreen-200 rounded-md'>
        click to confirm
      </button>
    </div>
  )
}
