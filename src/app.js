import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import "./styles/styles.scss";
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water bill', amount: 1000, createdAt: -21000 }));
// store.dispatch(addExpense({ description: 'Gas bill', amount: 200, createdAt: 1100 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));

// store.dispatch(setTextFilter('water'));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById("app"));
});

//Method to check the login state, whether the user is logged in or not
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('Logged in!');
    } else {
        console.log('Logged Out!');
    }
});

