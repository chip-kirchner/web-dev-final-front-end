import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import UserCard from "../user-card";
import {deleteUser, getUsers} from "../actions/users-actions";
import {checkLoggedIn} from "../actions/profile-actions";

const UserScreen = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const users = useSelector(state => state.users);

    const handleDelete = async (user) => {
        await deleteUser(user, dispatch);
    }

    useEffect(() => {
        if(!users) {
            getUsers(dispatch);
        }

        if(!profile) {
            checkLoggedIn(dispatch);
        }
    }, [dispatch, profile, users])

    if (profile && profile.role === 'moderator') {
        return (
            <div className="row">
                <div className="col-lg-8 col-xl-7">
                    <h1 className="border-bottom">All Users</h1>
                    <ul className="list-group">
                        {users && users.map(user =>
                            <li className="list-group-item d-flex align-items-center" key={user._id}>
                                    <UserCard user={user} act={false}/>
                                    <span className="text-muted me-3 d-none d-md-block">{user.email}</span>
                                    <button onClick={() => handleDelete(user)} className="btn btn-danger rounded-pill">Delete</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}
export default UserScreen;