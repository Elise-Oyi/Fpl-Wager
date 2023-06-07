import React, { useContext } from 'react'
import { Avatar, Dropdown } from 'flowbite-react'
// import { UserContext } from '../contexts/UserContext'
import { FplContext } from '../contexts/FplContext'
import PersonsContext from '../contexts/PersonsContext'
import BuyToken from '../pages/BuyToken'
import { Link } from 'react-router-dom'




export default function Profile() {

    //----CONTEXTS
  const {FplPoints,ManagerName,TeamName} = useContext(FplContext)
  const {setUserId} = PersonsContext()

  function handleLogout (){
    setUserId(null)
    localStorage.removeItem('sessionId')
  }

  return (
    <div> 
      <Dropdown
              label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
              arrowIcon={false}
              inline={true}
            >
            
            <Dropdown.Header>
              <span className="block text-16 text-gray-500 font-bold">
               { ManagerName}
              </span>
              <span className="block truncate text-sm font-medium text-gray-400">
                {TeamName}
              </span>
            </Dropdown.Header>
        
            <Dropdown.Item>
              <Link to='/buy-token'>Buy token</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to='/withdraw-token'>Withdraw token</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
             <button className='font-bold text-orange-700' onClick={handleLogout}>Logout</button> 
            </Dropdown.Item>
          </Dropdown>
    </div>
  )
}
