import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const Wager = () => {
  return (
    <>
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} >


            <div className='h-screen overflow-y-scroll text-center mx-auto p-2 bg-customBrand-300 mt-10 md:mt-0'>
            <div className="bg-red-900 w-full h-10 " style={{visibility: 'hidden'}}></div>

              <div className='mt-12 md:mt-0 w-full md:w-width-600 bg-customBrand-200 text-center mx-auto p-2 rounded-lg'>
                    {/* <div className='w-width-400 bg-green-500 h-60 z-20'></div> */}
                <div className=' p-2 w-full'>


                    {/* table */}


                </div>
                </div>
                
                
                
                
                
                
                
                </div>

                </motion.div>
    
    
    </>
  )
}

export default Wager