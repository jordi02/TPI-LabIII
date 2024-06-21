import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserState from "./components/userState/UserState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserState>
      <App />
    </UserState>
  </React.StrictMode>
);
