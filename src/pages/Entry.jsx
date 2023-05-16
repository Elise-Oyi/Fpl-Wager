import { motion } from 'framer-motion'
import React from 'react'

const Entry = () => {
  return (
    <>
       <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} >


            <div className='h-screen overflow-y-scroll text-center mx-auto p-2 bg-violent'>

                <div className='text-2xl text-white flex justify-center item-center mx-auto my-auto'> 
                peace be still
                </div>

            </div>




            </motion.div>

    </>
  )
}

export default Entry