import React from "react";
import ReactDOM from "react-dom/client";

import {App} from "./App";
import "./main.scss";
import { AppProvider } from "../contexts/DarkModeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
