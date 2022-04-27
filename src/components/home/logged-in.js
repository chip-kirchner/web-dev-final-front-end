import React from "react";
import {useSelector} from "react-redux";

const LoggedIn = () => {
    const profile = useSelector(state => state.profile);

    return (
        <>
            {JSON.stringify(profile)}
        </>
    )
}

export default LoggedIn;