import React, {useEffect, useRef, useState} from "react";
import * as action from "../actions/profile-actions";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const PersonalProfile = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
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

    useEffect(() => {
        if (profile) {
            setNewProfile(profile);
        }
    }, [dispatch]);

    return (
        <div>
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
    )
}
export default PersonalProfile;