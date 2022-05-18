import React, {useEffect, useState} from "react";
import * as action from "../actions/profile-actions";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import FavoriteWidget from "./favorite-widget";
import ProfileTabs from "./profile-tabs";

const PersonalProfile = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const [newProfile, setNewProfile] = useState({});
    const navigate = useNavigate();

    const handleUpdateProfile = async () => {
        await action.updateProfile(newProfile, dispatch);
    }

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setNewProfile({...newProfile, name: newName});
    }

    const handleLogout = async () => {
        await action.logout(dispatch);
        navigate("/login");
    }

    useEffect(() => {
        const load = async () => {
            if (profile) {
                setNewProfile(profile);
            } else {
                navigate("/login");
            }
        }
        load();
        //console.log("effect")
    }, [dispatch, profile, navigate]);

    return (
        <div className="row">
            <div className="col-xl-8">
                <div className="border-bottom pb-2">
                    <button onClick={handleLogout} className="btn btn-danger rounded-pill float-end">Logout</button>
                    <h1>Hi {profile && profile.name}!</h1>
                    <p className="lead">All of your info is included below.</p>
                    <Link to={`/profile/${profile && profile._id}`}>View your public profile.</Link>
                    <div className="mb-3 row">
                        <label htmlFor="showEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" id="showEmail" value={profile ? profile.email : " "}/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="showName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" onChange={handleNameChange}
                                   id="showName" value={newProfile && newProfile.name}/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="showRole" className="col-sm-2 col-form-label">Role</label>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" disabled
                                       type="radio" id="standard"
                                       value="standard" checked={newProfile && newProfile.role === "standard"}></input>
                                <label htmlFor="standard" className="form-check-label">Standard</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" disabled
                                       type="radio" id="planner"
                                       value="planner" checked={newProfile && newProfile.role === "planner"}></input>
                                <label htmlFor="planner" className="form-check-label">Planner</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" disabled
                                       type="radio" id="moderator"
                                       value="moderator" checked={newProfile && newProfile.role === "moderator"}></input>
                                <label htmlFor="moderator" className="form-check-label">Moderator</label>
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-primary rounded-pill" onClick={handleUpdateProfile}>Save</button>
                </div>
                {profile && <ProfileTabs/>}
            </div>

            <div className="col-xl-4 d-none d-xl-block">
                <h4>Favorites</h4>
                <ul className="list-group">
                    {profile && profile.favoriteRecipes.map(recipe =>
                        <FavoriteWidget recipe={recipe}/>
                    )}
                </ul>
            </div>
        </div>

    )
}
export default PersonalProfile;