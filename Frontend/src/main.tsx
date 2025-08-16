import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { FunctionProvider } from "./context/FunctionContext";
import { UserFormProvider } from "./context/UserContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FunctionProvider>
        <UserFormProvider>
          <App />
        </UserFormProvider>
      </FunctionProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);