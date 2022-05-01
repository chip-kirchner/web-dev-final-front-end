import {useEffect, useState} from "react";
import * as action from "./actions/profile-actions";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const SecureRoute = ({children}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [currentUser, setCurrentUser] = useState();
    const [waiting, setWaiting] = useState(true);

    const check = async () => {
        try {
            const user = await action.checkLoggedIn(dispatch);
            setCurrentUser(user);
            setWaiting(false);
        } catch (e) {
            setWaiting(false);
        }
    };
    useEffect(() => { check() }, []);

    if(currentUser) {
        return children;
    } else if(waiting) {
        return null;
    } else {
        return navigate("/login");
    }

};

export default SecureRoute;