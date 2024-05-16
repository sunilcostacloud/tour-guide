import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext.jsx";
import TourGuide from "./components/tourGuide/TourGuide.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <TourGuide>
          <App />
        </TourGuide>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
