import React, {useRef} from "react";
import {useNavigate} from "react-router-dom";
import {useProfile} from "../../contexts/profile-context";


const LoginScreen = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const {signup, login} = useProfile();

    const handleSignup = async () => {
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate("/profile");
        } catch (e) {
            alert(e);
        }
    }

    const handleLogin = async () => {
        try {
            await login(emailRef.current.value, passwordRef.current.value);
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