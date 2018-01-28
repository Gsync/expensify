import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const Login = ({ startLogin }) => (
    <div>
        <h1>Login</h1>
            {/* Trigger the auth action startLogin onClick */}
            <button onClick={ startLogin }>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

//export connected version of the component
    //connect first argument is mapstatetoprops === undefined
        //connect to component Login
export default connect(undefined, mapDispatchToProps)(Login);