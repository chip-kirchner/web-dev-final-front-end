import React, {useEffect, useState} from "react";
import LoggedIn from "./logged-in";
import NotLoggedIn from "./not-loggedin";
import {useDispatch, useSelector} from "react-redux";
import {checkLoggedIn} from "../actions/profile-actions";


const Home = () => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        checkLoggedIn(dispatch);
    }, [dispatch]);

    return(
        <>
            { profile !== null ? <LoggedIn/> : <NotLoggedIn/>}
        </>

    )
};

export default Home;