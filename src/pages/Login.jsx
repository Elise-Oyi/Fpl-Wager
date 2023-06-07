import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
// import { UserContext } from "../contexts/UserContext";
import { FplContext } from "../contexts/FplContext";
import { GamewekContext } from "../contexts/GameweekContext";
import { NavContext } from "../contexts/NavContext";
import PersonsContext from "../contexts/PersonsContext";

export default function Login() {



  //---CONTEXTS
  const {setUserId,setFplId,setTokens} = PersonsContext()
  const {setFplPoints,setManagerName,setTeamName} = useContext(FplContext)
  const {setGameweek,setIsFinished,setIsCurrent} = useContext(GamewekContext)
  const {activeMenu, setActiveMenu} = useContext(NavContext)

  //----input fields
  const [emailOrFplId, setEmailOrFplId,fplId] = useState("");
  const [password, setPassword] = useState("");

  //-- data for api
  const data = {
    emailOrFplId: "",
    password: password,
  };
  //--api url
  const url = "https://localhost:44352/api/users/login";

  //--gameweek url
  const gameweekUrl = 'https://fantasy.premierleague.com/api/bootstrap-static/'

  
  //---handle login errors
  const [loginErrors, setLoginErrors] = useState({});

  //---navigate
  const navigate = useNavigate();

  useEffect(()=>{
    setActiveMenu(false)
  },[])

  //---handle login function
  function handleLogin(e) {
    e.preventDefault();
    setLoginErrors(ValidateLogins({ emailOrFplId, password }));

    try {
      // axios.defaults.withCredentials = true

      axios
        .post(url, data)
        .then((response) => {
          const res = response.data
          if (res.id) {
            
            //---setting data into UserContext
            setUserId(res.id)
            setTokens(res.tokens)
            setFplId(res.fplId)
            localStorage.setItem('sessionId', res.id);
            
            //--fpl api url
            const fplUrl = `https://fantasy.premierleague.com/api/entry/${res.fplId}/`;
            const headers = {}
            //--geting user details from fpl api
              axios.get(fplUrl)
              .then((resp=>{
                setFplPoints(resp.data.summary_overall_points)
                setManagerName(resp.data.player_first_name + " " + resp.data.player_last_name)
                setTeamName(resp.data.name)
              }))



            //---Toast notification
              toast.success('Login successful!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
              
                navigate("/");
          } 
        
        })
        .catch((error) => {
          console.log(error);
          toast.error('Login failed!', {
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
    } catch (error) {
      console.log(error);
    }

    //---geting gameweek
    axios.get(gameweekUrl)
      .then(r=>{
        const events = r.data.events

        const game = events.filter(function (currentGame){
           return currentGame.is_current === true
          })
                   
         setGameweek(game[0].id)
         setIsFinished(game[0].finished)
         setIsCurrent(game[0].is_current)
        
      })

      
  
   
  }

  //---function handle errors
  function ValidateLogins(values) {
    const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const regexNumber = /^[0-9\b]+$/;

    if (!values.emailOrFplId) {
      errors.emailOrFplId = "Email or Fpl Id required";
    } else if (
      !regexNumber.test(values.emailOrFplId) &&
      !regexEmail.test(values.emailOrFplId)
    ) {
      errors.emailOrFplId = "Enter either a valid email or your FPL ID";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    if (regexEmail.test(values.emailOrFplId)) {
      data.Email = values.emailOrFplId;
    }
    if (regexNumber.test(values.emailOrFplId)) {
      data.FplID = +values.emailOrFplId;
    }

    return errors;
  }
 
  return (
    <section className="bg-gray-900 h-screen flex my-auto w-full">
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

        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
              Login to your account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Email or Fpl ID
                </label>
                <input
                  type="text"
                  name="emailOrFplId"
                  id="email"
                  value={emailOrFplId}
                  onChange={(e) => {
                    setEmailOrFplId(e.target.value);
                  }}
                  className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email or Fpl ID"
                  required
                />
                <p className="text-red-400">{loginErrors.emailOrFplId}</p>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <p className="text-red-400">{loginErrors.password}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium hover:underline text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                onClick={handleLogin}
                className="w-full text-gray-900 bg-primary-600 focus:ring-4 focus:outline-none font-semibold rounded-lg text-md px-5 py-2.5 text-center bg-white hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login
              </button>

              <Link
                to="/register"
                className="text-sm font-light text-gray-500 dark:text-gray-400"
              >
                Don’t have an account{" "}
                <span className="font-medium text-gray-300 hover:underline dark:text-primary-500">
                  Register
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
