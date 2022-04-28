import React, {useEffect, useRef, useState} from "react";
import * as action from "../actions/profile-actions";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import RecipeWidget from "../post-screen/recipe-widget";
import FavoriteWidget from "./favorite-widget";
import ViewWidget from "./view-widget";

const PersonalProfile = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const [searchParams, setSearchParams] = useSearchParams();
    const [view, setView] = useState("posts");
    const [newProfile, setNewProfile] = useState({});
    const navigate = useNavigate();

    const handleUpdateProfile = async () => {
        const response = await action.updateProfile(newProfile, dispatch);
    }

    const handleRoleChange = (e) => {
        const newRole = e.target.value;
        setNewProfile({...newProfile, role: newRole});
    }

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setNewProfile({...newProfile, name: newName});
    }

    const handleLogout = async () => {
        await action.logout(dispatch);
        navigate("/login");
    }

    const handleGoPosts = (e) => {
        setView('posts');
    }

    const handleGoPlans = (e) => {
        setView('plans');
    }

    const handleGoFollowing = (e) => {
        setView('following');
    }

    const handleGoFavorites = (e) => {
        setView('favorites');
    }

    useEffect(() => {
        if (profile) {
            setNewProfile(profile);
        }
    }, [dispatch, profile, view]);

    return (
        <div className="row">
            <div className="col-xl-8">
                <div className="border-bottom pb-2">
                    <button onClick={handleLogout} className="btn btn-danger rounded-pill float-end">Logout</button>
                    <h1>Hi {profile && profile.name}!</h1>
                    <p className="lead">All of your info is included below.</p>
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
                                   id="showName" value={newProfile.name}/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="showRole" className="col-sm-2 col-form-label">Role</label>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" onChange={handleRoleChange}
                                       type="radio" id="standard"
                                       value="standard" checked={newProfile && newProfile.role === "standard"}></input>
                                <label htmlFor="standard" className="form-check-label">Standard</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" onChange={handleRoleChange}
                                       type="radio" id="planner"
                                       value="planner" checked={newProfile && newProfile.role === "planner"}></input>
                                <label htmlFor="planner" className="form-check-label">Planner</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" onChange={handleRoleChange}
                                       type="radio" id="moderator"
                                       value="moderator" checked={newProfile && newProfile.role === "moderator"}></input>
                                <label htmlFor="moderator" className="form-check-label">Moderator</label>
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-primary rounded-pill" onClick={handleUpdateProfile}>Save</button>
                </div>
                <div>
                    <ul className="nav nav-tabs mt-2">
                        <li className="nav-item pointer" onClick={handleGoPosts}>
                            <div className={`nav-link ${view === 'posts' ? 'active' : ''}`}>Posts</div>
                        </li>
                        <li className="nav-item pointer" onClick={handleGoPlans}>
                            <div className={`nav-link ${view === 'plans' ? 'active' : ''}`}>Plans</div>
                        </li>
                        <li className="nav-item pointer" onClick={handleGoFollowing}>
                            <div className={`nav-link ${view === 'following' ? 'active' : ''}`}>Following</div>
                        </li>
                        <li className="nav-item d-xl-none pointer" onClick={handleGoFavorites}>
                            <div className={`nav-link ${view === 'favorites' ? 'active' : ''}`}>Favorites</div>
                        </li>
                    </ul>
                </div>
                <ViewWidget view={view}/>
            </div>

            <div className="col-xl-4 d-none d-xl-block">
                <h4>Favorites</h4>
                <ul className="list-group">
                    {profile.favoriteRecipes.map(recipe =>
                        <FavoriteWidget recipe={recipe}/>
                    )}
                </ul>
            </div>
        </div>

    )
}
export default PersonalProfile;