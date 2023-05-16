import { Card } from "flowbite-react";
import React, { useState } from "react";

export default function Fixtures(){

    return(
        <>
      
      <div className="mt-12 mx-2">
        <div className="bg-indigo-500 pt-12 p-6 rounded-xl">
            <h2 className="font-semibold border-b-2 border-primary-100 text-xl text-white">FPL Fixtures</h2>
              <h3 className="text-2xl font-bold pt-4 text-gray-200">Game week <span>37</span> </h3>
            <div className="gameFixtures md:grid grid-cols-2 gap-3 ">
              
            <div className="mt-2">
                  <Card>
                 
                    <h4 className="font-bold pl-2 border-b-2 border-gray-300 text-xl">Friday 3 feb</h4>
                    <p className="pt-2 text-md font-semibold flex justify-center gap-2 border-b-2 border-gray-300 text-xl">chelsea <span className="border-2 border-violet-300 font-normal text-xl">20:00</span> Fulham</p>

                    <p className="pt-2 text-md font-semibold flex justify-center gap-2 border-b-2 border-gray-300 text-xl">chelsea <span className="border-2 border-violet-300 font-normal text-xl">20:00</span> Fulham</p>
                  
              </Card>
              </div>             

              <div className="mt-2">
                  <Card>
                 
                    <h4 className="font-bold pl-2 border-b-2 border-gray-300 text-xl">Friday 3 feb</h4>
                    <p className="pt-2 text-md font-semibold flex justify-center gap-2 border-b-2 border-gray-300 text-xl">chelsea <span className="border-2 border-violet-300 font-normal text-xl">20:00</span> Fulham</p>

                    <p className="pt-2 text-md font-semibold flex justify-center gap-2 border-b-2 border-gray-300 text-xl">chelsea <span className="border-2 border-violet-300 font-normal text-xl">20:00</span> Fulham</p>
                  
              </Card>

              </div> 
                <div className="mt-2">
                  <Card>
                 
                    <h4 className="font-bold pl-2 border-b-2 border-gray-300 text-xl">Friday 3 feb</h4>
                    <p className="pt-2 text-md font-semibold flex justify-center gap-2 border-b-2 border-gray-300 text-xl">chelsea <span className="border-2 border-violet-300 font-normal text-xl">20:00</span> Fulham</p>

                    <p className="pt-2 text-md font-semibold flex justify-center gap-2 border-b-2 border-gray-300 text-xl">chelsea <span className="border-2 border-violet-300 font-normal text-xl">20:00</span> Fulham</p>
                  
              </Card>
              </div>
            </div>
           </div>
      </div>
  
        </>
    )
}