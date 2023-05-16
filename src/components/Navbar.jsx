import React, { useContext, useEffect } from 'react'
import { NavContext } from '../contexts/NavContext'
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import TokenComponent from './TokenComponent';
import { Link } from 'react-router-dom';
import Notification from '../pages/Notification';
import Profile from '../pages/Profile';

const NavButton = ({title,customFunc,icon,color,dotColor}) => (
  // <Tooltip content={title} placement="BottomCenter">
    <button type='button' onClick={customFunc} style={{color}}
     className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      {/* <span style={{background:dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'> */}
        {icon}
      {/* </span> */}
    </button>
  // </Tooltip>
)


export default function Navbar() {
  const {activeMenu,setActiveMenu,isClicked,handleClick,screenSize,setScreenSize} = useContext(NavContext)
  
  const tokenStyle = 'text-blue-700 font-bold'

  useEffect(()=>{
    // ---a function to handle screen width/size
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  },[])

  useEffect(()=>{
    if(screenSize <= 900){
      setActiveMenu(false)
    } 
    else{
      setActiveMenu(true)
    }
  },[screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative md:ml-6'>

      {/* ----NavMenu---- */}
      <NavButton title='Menu' customFunc={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} color="blue" icon={<AiOutlineMenu/>}/>

      {/* ----notification,token,profile section--- */}
      <div className="flex">
        <NavButton title='Notifications' customFunc={()=>{setActiveMenu((prevActiveMenu)=>!prevActiveMenu); handleClick('notification')}} color="blue" icon={<RiNotification3Line/>}/>

        <Link to="/token">
          <TokenComponent tokenStyle={tokenStyle}/>                       
        </Link>

        {/* -----profile section----- */}
        <div className=" pr-4">
          <Profile/>
        </div>

        {isClicked.notification && (<Notification/>)}

      </div>

    </div>
  )
}
