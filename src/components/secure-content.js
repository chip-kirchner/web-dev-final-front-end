import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import * as action from "./actions/profile-actions";

const SecureContent = ({children}) => {
    const dispatch = useDispatch();

    const [currentUser, setCurrentUser] = useState()

    const check = async () => {
        try {
            const user = await action.checkLoggedIn(dispatch);
            setCurrentUser(user)
        } catch (e) {
        }
    }
    useEffect(() => { check() }, [])

    if(currentUser) {
        return children
    }
    return null
}

export default SecureContent