import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import SecureContent from "../secure-content";
import {Link} from "react-router-dom";
import Verify from "../post-screen/verify";
import * as action from "../actions/profile-actions";

const UserCard = ({user, act = true}) => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const [following, setFollowing] = useState(false);

    const handleUnfollow = async (e) => {
        if (following) {
            await action.unfollow(user, dispatch);
            setFollowing(false);
        } else {
            await action.follow(user, dispatch);
            setFollowing(true);
        }

    }

    useEffect(() => {
        if (profile) {
            setFollowing(profile.following.filter(fol => fol._id === user._id).length > 0);
        }
    })

    return (
        <>
            <Link to={`/profile/${user._id}`} className="text-black"
                  style={{ textDecoration: 'none' }}>
                <strong>@{user && user.name}</strong>
            </Link>
            <div className="">
                <Verify role={user.role}/>
            </div>
            <SecureContent>
                <div className="flex-grow-1 text-muted">
                    {user.following && user.following.filter(prof => prof._id === profile._id).length > 0 ? "(following you)" : ""}
                </div>
                {act && <button onClick={handleUnfollow} className="btn btn-danger rounded-pill">{profile.following.filter(fol => fol._id === user._id).length > 0 ? "Unfollow" : "Follow"}</button>}
            </SecureContent>
        </>
    )

}
export default UserCard;