import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FplContext } from "../contexts/FplContext";
import { NavContext } from "../contexts/NavContext";


export default function Register() {
  //---CONTEXTS
  const { setFplPoints, setManagerName, setTeamName } = useContext(FplContext);
  const {activeMenu, setActiveMenu} = useContext(NavContext)


  //---form data
  const [email, setEmail] = useState("");
  const [fplId, setFplId] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //-- data for api
  const data = {
    email: email,
    fplId: +fplId,
    fullname: fullname,
    password: password,
    tokens: 0,
    salt: "",
  };
  //--api url
  const url = "https://localhost:44352/api/users/register";

  //--fpl api url
  const fplUrl = `https://fantasy.premierleague.com/api/entry/${fplId}/`;

  //---handle register errors
  const [registerErrors, setRegisterErrors] = useState({});

  //---navigate
  const navigate = useNavigate();

  useEffect(()=>{
    setActiveMenu(false)
    console.log(activeMenu)
  },[])

  //---handle register function
  function handleRegister(e) {
    e.preventDefault();
    setRegisterErrors(
      validateRegister({ email, fplId, fullname, password, confirmPassword })
    );

    //--checking if fpl ID s valid
    axios
      .get(fplUrl)
      .then((res) => {
        // Check if fplId exists
        if (res.data.id) {
          console.log("valid fpl id");

          //----posting data into database
          try {
            axios
              .post(url, data)
              .then((response) => {
                console.log(response.data);

                toast.success("Register successful!", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });

                navigate("/login");
              })
              .catch((errors) => {
                console.log(errors);

                toast.error("Register failed!", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              });
          } catch (error) {
            console.log(error);
          }
        }
      })
      .catch((error) => {
        console.log(error);
        console.log("invalid FplId")
        toast.error("Registeration error!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      });
  }

  function validateRegister(values) {
    const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const regexNumber = /^[0-9\b]+$/;

    if (!values.fullname) {
      errors.fullname = "Full name is required";
    }

    if (!values.email) {
      errors.email = "Email cannot be left empty";
    } else {
      if (!regexEmail.test(values.email)) {
        errors.email = "Enter  a valid email address";
      }
    }

    if (!values.fplId) {
      errors.fplId = "FPL ID cannot be left empty";
    } else {
      if (!regexNumber.test(values.fplId)) {
        errors.fplId = "Enter  a valid fpl ID";
      }
    }

    if (!values.password) {
      errors.password = "Password cannot be left empty";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Cofirm password cannot be left empty";

      //---checking if password matches confirm password
      if (values.password != values.confirmPassword) {
        errors.password = "Password mismatch";
      }
    }

    return errors;
  }

  return (
    <section className="bg-gray-900  flex my-auto h-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div
          to="/"
          className="flex ml-3 mt-4 text-xl gap-3 pb-3 font-extrabold tracking-tight text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>{" "}
          <span> FPL WAGER</span>
        </div>

        <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email"
                  required
                />
                <p className="text-red-400">{registerErrors.email}</p>
              </div>
              <div>
                <label
                  htmlFor="fplId"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Fpl ID
                </label>
                <input
                  type="number"
                  name="fplId"
                  id="fplId"
                  value={fplId}
                  onChange={(e) => {
                    setFplId(e.target.value);
                  }}
                  className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Fpl ID"
                  required
                />
                <p className="text-red-400">{registerErrors.fplId}</p>
              </div>
              <div>
                <label
                  htmlFor="fullname"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Fullname
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Fullname"
                  required
                />
                <p className="text-red-400">{registerErrors.fullname}</p>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium  text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <p className="text-red-400">{registerErrors.password}</p>
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium  text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  className="border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <p className="text-red-400">{registerErrors.confirmPassword}</p>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border  rounded focus:ring-3  bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-300">
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline text-white"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                onClick={handleRegister}
                className="w-full text-gray-900 bg-primary-600 focus:ring-4 focus:outline-none  rounded-lg text-md font-semibold px-5 py-2.5 text-center bg-white hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Register
              </button>
              <Link
                to="/login"
                className="text-sm font-light text-gray-500 dark:text-gray-400"
              >
                Already have an account?{" "}
                <span className="font-medium text-gray-300 hover:underline ">
                  Login{" "}
                </span>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </section>
  );
}

// // Update the fplPoint, managerName, and teamName variables
// setFplPoints(response.data.summary_overall_points);
// setManagerName(response.data.player_first_name + " " + response.data.player_last_name);
// setTeamName(response.data.name);
