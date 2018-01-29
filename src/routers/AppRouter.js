import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
//to redirect after login
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/Dashboard';
import Login from '../components/Login';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import NotFoundPage from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;