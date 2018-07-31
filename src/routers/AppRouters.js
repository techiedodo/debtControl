import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashBoardPage from "../components/ExpenseDashBoardPage";
import Header from "../components/Header";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import ErrorPage from "../components/ErrorPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashBoardPage} />
        <Route path="/addexpense" component={AddExpensePage} />
        <Route path="/editexpense/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
