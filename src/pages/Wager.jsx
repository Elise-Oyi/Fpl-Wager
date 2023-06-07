import React, { useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import axios from 'axios'






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