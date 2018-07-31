import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => (
  <header>
    <h1>Debt Plan</h1>
    <NavLink exact to="/" activeClassName="is-active">
      Dashboard
    </NavLink>
    <NavLink to="/addexpense" activeClassName="is-active">
      Add Debt
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Get Help
    </NavLink>
  </header>
);

export default Header;
