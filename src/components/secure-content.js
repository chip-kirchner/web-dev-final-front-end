import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as action from "./actions/profile-actions";

const SecureContent = ({children}) => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);

    useEffect(() => {
        const check = async () => {
        if(!profile) {
            try {
                await action.checkLoggedIn(dispatch);
            } catch (e) {
            }
        }
    }
    check();
        }, [profile, dispatch])

    if(profile) {
        return children
    }
    return null
}

export default SecureContent