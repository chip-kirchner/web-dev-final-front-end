import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import * as action from "../actions/profile-actions";
import {useDispatch} from "react-redux";


const LoginScreen = () => {
    const dispatch = useDispatch();
    const [signup, setSignup] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const [role, setRole] = useState('standard');
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            await action.signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value, role, dispatch);
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
                    <div>
                        <ul className="nav nav-tabs mt-2">
                            <li className="nav-item pointer" onClick={() => {setSignup(false)}} key={1}>
                                <div className={`nav-link ${signup ? '' : 'active'}`}>Login</div>
                            </li>
                            <li className="nav-item pointer" onClick={() => {setSignup(true)}} key={2}>
                                <div className={`nav-link ${signup ? 'active' :''}`}>Sign-Up</div>
                            </li>
                        </ul>
                    </div>
                    <label htmlFor="emailInput">Email:</label>
                    <input ref={emailRef} id="emailInput" type="email" placeholder="you@email.com"
                           className="form-control rounded-pill"></input>
                    {signup ?
                        <>
                            <label htmlFor="nmInput">Name:</label>
                            <input ref={nameRef} id="nmInput" type="text" placeholder="name"
                                   className="form-control rounded-pill"></input>
                            <label htmlFor="showRole" className="col-sm-2 col-form-label">Role:</label>
                            <div className="form-check">
                            <input className="form-check-input" onChange={(e) => {setRole(e.target.value)}}
                            type="radio" id="standard"
                            value="standard" checked={role === 'standard'}></input>
                            <label htmlFor="standard" className="form-check-label">Standard</label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" onChange={(e) => {setRole(e.target.value)}}
                            type="radio" id="planner"
                            value="planner" checked={role === 'planner'}></input>
                            <label htmlFor="planner" className="form-check-label">Planner</label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" onChange={(e) => {setRole(e.target.value)}}
                            type="radio" id="moderator"
                            value="moderator" checked={role === 'moderator'}></input>
                            <label htmlFor="moderator" className="form-check-label">Moderator</label>
                            </div>
                        </>
                        :
                        ""
                    }
                    <label htmlFor="pwInput">Password:</label>
                    <input ref={passwordRef} id="pwInput" type="password" placeholder="password"
                           className="form-control rounded-pill"></input>
                    <div className="d-flex justify-content-center">
                        {signup ?
                            <button onClick={handleSignup}
                                          className="btn btn-primary rounded-pill m-2 float-end">Sign-Up</button> :
                            <button onClick={handleLogin}
                                    className="btn btn-primary rounded-pill m-2 float-start">Login</button>
                        }


                    </div>

                </div>
            </div>
        </div>
    );
}

export default LoginScreen;