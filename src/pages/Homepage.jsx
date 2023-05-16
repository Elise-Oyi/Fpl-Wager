import React from "react";
import TokenComponent from "../components/TokenComponent";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import Fixtures from "./Fixtures";

export default function Homepage() {
  const tokenStyle = "text-gray-500 text-2xl font-bold";
  return (
    <>
      <div className="mt-12">
        {/* ----Hero Section---- */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center">
          <div className="bg-sky-500  h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3  bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div className="">
                <h3 className="font-bold text-gray-600 text-2xl">Lizzo Bans</h3>
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg border border-indigo-500 bg-white py-1 px-4 mt-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 "
                >
                  <TokenComponent tokenStyle={tokenStyle} />
                </a>
              </div>
              <div className="">
                <p className="font-bold text-gray-600 text-2xl">Fpl points</p>
                <h3 className="font-extrabold text-white text-4xl">230</h3>
              </div>
            </div>
          </div>
        </div>

        {/* -----Wager list section-------*/}

        <Card className="mt-12 mx-2">
          <div className="pt-12 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <h2 className="font-bold border-b-2 border-primary-100 text-2xl text-gray-700 ">
              My wagers
            </h2>
            <Link
                to='/wagers'
                className="text-md font-medium text-blue-500 hover:underline"
              >
                View all
              </Link>
            </div>
            

            <div className="md:grid grid-cols-1 gap-3 pt-4">

                <div className="">
                <ul className="divide-y divide-gray-200 p-2 m-4">
                <li className="py-3 sm:py-4 p-2 ">
                  <div className="flex items-center  space-x-6">
                    <div className="shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                        alt="Neil image"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-2xl font-medium text-gray-900">
                        Wager 1
                      </p>
                      <p className="truncate text-xl text-gray-500">
                        2
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                      <TokenComponent/>
                    </div>
                  </div>
                </li>
                
                <li className="py-3 sm:py-4 ">
                  <div className="flex items-center  space-x-6">
                    <div className="shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                        alt="Neil image"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-2xl font-medium text-gray-900">
                        Wager 1 ggj
                      </p>
                      <p className="truncate text-xl text-gray-500">
                        2
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                      <TokenComponent/>
                    </div>
                  </div>
                </li>

              </ul>
                </div>
              
             
            </div>
          </div>
        </Card>

        {/* ----fixture section---- */}
        <Fixtures />
      </div>
    </>
  );
}
