import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouters";
import "normalize.css/normalize.css";
import "./styles/styles.sass";

console.log("this is working");

ReactDOM.render(<AppRouter />, document.getElementById("app"));
