import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouters";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.sass";

const store = configureStore();

console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById("app"));
