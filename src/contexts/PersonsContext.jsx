import  { useContext } from 'react'
import { UserContext } from './UserContext'

export default function PersonsContext() {
  return useContext(UserContext)
  
}
