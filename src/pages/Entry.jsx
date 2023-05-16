import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const Entry = () => {
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
                    <div className='flex justify-between items-center mx-auto p-1 bg-customBrand-500 rounded-2xl'>
                    
                    
                    <Link to="#">
                    <div className='flex justify-start p-2'>
                    <span className='bg-red-800 text-white text-sm md:text-xl rounded-3xl py-2 md:py-3 px-4 md:px-6'> All </span>
                    </div>
                    </Link>
                    
                    
                    <div className='flex justify-evenly items-center p-1 md:p-2 w-full md:w-11/12'>
                    <Link to="#"><span className=' text-customBrand-500 text-sm md:text-xl bg-white rounded-xl py-2 md:py-3 px-4 md:px-6'> link one
                    </span>
                    </Link>
                    <Link to="#"><span className='text-customBrand-500 text-sm md:text-xl bg-white rounded-xl py-2 md:py-3 px-4 md:px-6'> link two
                    </span>
                    </Link>

                    <Link to="#"><span className='text-sm md:text-xl text-customBrand-500 bg-white rounded-xl py-2 md:py-3 px-4 md:px-6'> link three
                    </span>
                    </Link>
                    <Link to="#"><span className='text-sm md:text-xl text-customBrand-500 bg-white rounded-xl py-2 md:py-3 px-4 md:px-6'> link fourth
                    </span>
                    </Link>


                    </div>
                    </div>

                    <div className="bg-red-900 w-full h-10 " style={{visibility: 'hidden'}}></div>
                   
                    {/* notice board */}
                    <div className='bg-customBrand-500 w-full rounded-2xl'>
                        <div className='flex flex-col p-2 items-center mx-auto'> 

                        <div className='flex justify-between items-center mx-auto p-2 w-10/12 '>
                        <span className='text-white text-md md:text-2xl py-2 md:py-3 px-4 md:px-6'>
                            Lizza Bans
                        </span>

                        <span className='text-white text-md md:text-2xl py-2 md:py-3 px-4 md:px-6 text-semibold'>
                            FPL Points
                        </span>
                        </div>

                        <div className='flex justify-between items-center mx-auto p-2 w-10/12 '>
                        <span className='text-white text-md md:text-2xl py-2 md:py-3 px-4 md:px-6'>
                            Lizza Bans
                        </span>

                        <span className='text-white text-md md:text-2xl py-2 md:py-3 px-4 md:px-6 text-semibold'>
                            FPL Points
                        </span>



                        </div>



                        
                        </div>
                    </div>
                </div>

              </div>

            </div>




            </motion.div>

    </>
  )
}

export default Entry