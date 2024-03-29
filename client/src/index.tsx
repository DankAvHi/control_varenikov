import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./Styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
     <React.StrictMode>
          <BrowserRouter>
               <App />
          </BrowserRouter>
     </React.StrictMode>
);

serviceWorkerRegistration.unregister();

reportWebVitals();
