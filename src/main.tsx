import React from "react";
import App from "./index";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/auth.context";
import { globalStyles } from "./theme/global";
import { FilterProvider } from "./context/filter.context";

import "react-toastify/dist/ReactToastify.css";

globalStyles();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <FilterProvider>
          <ToastContainer position="bottom-right" limit={1} />
            <App />
        </FilterProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
