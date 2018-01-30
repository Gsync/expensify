import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const Login = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify App</h1>
            <p>Its time to get your expenses under contol!</p>
            {/* Trigger the auth action startLogin onClick */}
            <button onClick={ startLogin }>Login</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

//export connected version of the component
    //connect first argument is mapstatetoprops === undefined
        //connect to component Login
export default connect(undefined, mapDispatchToProps)(Login);