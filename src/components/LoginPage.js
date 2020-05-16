import React from 'react';
import {connect } from 'react-redux';
import{startLogin} from '../actions/auth';

export const LoginPage = ({startLogin})=>(
     <div>
                
                    {/* <input type = "text" autoFocus placeholder = "Username"/>
                    <input type = "password" placeholder = "Password"/> */}
                    <button onClick = {startLogin}>Login</button>
                </div>
);

const mapDispatchToProps = (dispatch) =>({
    startLogin:() => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
