import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import "./styles/styles.scss";
import 'normalize.css/normalize.css';

const ExpenseDashboardPage = () => (
    <div>
        this is from my dashboard component..
    </div>
);

const EditExpensePage = () => (
    <div>
        Edit Page
    </div>
);

const HelpPage = () => (
    <div>
        this is from my help page
    </div>
);

const AddExpensePage = () => (
    <div>
        this is from my expense page component..
    </div>
);

const NotFoundPage = () => (
    <div>
        404! Page not found!
        <Link to="/">Go to Homepage</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit"activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help"activeClassName="is-active">Help</NavLink>
    </header>
);

const Routes = () => (
  <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<Routes />, document.getElementById("app"));
