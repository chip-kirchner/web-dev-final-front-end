import React, {useRef} from "react";
import {useNavigate} from "react-router-dom";
import * as action from "../actions/profile-actions";
import {useDispatch, useSelector} from "react-redux";


const LoginScreen = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            await action.signup(emailRef.current.value, passwordRef.current.value, dispatch);
            navigate("/profile");
        } catch (e) {
            alert(e);
        }
    }

    const handleLogin = async () => {
        try {
            await action.login(emailRef.current.value, passwordRef.current.value, dispatch);
            navigate("/profile");
        } catch (e) {
            alert(e);
        }
    }

    return(
        <div className="d-flex justify-content-center">
            <div className="shadow border rounded">
                <div className="p-3">
                    <h4 className="mt-2 mb-2">Sign-in to get started!</h4>
                    <label htmlFor="emailInput">Email:</label>
                    <input ref={emailRef} id="emailInput" type="email" placeholder="you@email.com"
                           className="form-control rounded-pill"></input>
                    <label htmlFor="pwInput">Password:</label>
                    <input ref={passwordRef} id="pwInput" type="password" placeholder="password"
                           className="form-control rounded-pill"></input>
                    <span>
                        <button onClick={handleLogin}
                                className="btn btn-primary rounded-pill m-2 float-start">Login</button>
                        <button onClick={handleSignup}
                                className="btn btn-primary rounded-pill m-2 float-end">Sign-Up</button>
                    </span>

                </div>
            </div>
        </div>
    );
}

export default LoginScreen;