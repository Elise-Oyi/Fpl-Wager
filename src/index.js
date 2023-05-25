import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./contexts/NavContext";
import UserProvider from "./contexts/UserContext";
import FplProvider from "./contexts/FplContext";
import GameweekProvider from "./contexts/GameweekContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <FplProvider>
          <GameweekProvider>
            <ContextProvider>
              <App />
            </ContextProvider>
          </GameweekProvider>
        </FplProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
