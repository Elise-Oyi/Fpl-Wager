import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Navigate, Outlet } from 'react-router-dom'
import PersonsContext from '../contexts/PersonsContext';

export default function ProtectedRoutes() {
     const {userId,setUserId} = PersonsContext()
    const sessionId = localStorage.getItem('sessionId');

    console.log(sessionId)
    useEffect(()=>{
      setUserId(sessionId)
    },[])

    console.log(userId)
    
  return (
    sessionId ? <Outlet/> : <Navigate to='/login' />
  )
}
