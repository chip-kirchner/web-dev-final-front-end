import React, {useEffect, useState} from "react";
import LoggedIn from "./logged-in";
import NotLoggedIn from "./not-loggedin";
import {useSelector} from "react-redux";


const Home = () => {
    const profile = useSelector(state => state.profile);

    return(
        <>
            { profile !== null ? <LoggedIn/> : <NotLoggedIn/>}
        </>

    )
};

export default Home;