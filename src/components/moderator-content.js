import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as action from "./actions/profile-actions";

const PlannerContent = ({children}) => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const [currentUser, setCurrentUser] = useState()

    const check = async () => {
        if (profile) {
            setCurrentUser(profile);
        } else {
            try {
                const user = await action.checkLoggedIn(dispatch);
                setCurrentUser(user)
            } catch (e) {
            }
        }

    }
    useEffect(() => { check() }, [])

    if(currentUser && currentUser.role === "moderator") {
        return children
    }
    return null
}

export default PlannerContent;