import React, {useEffect, useRef, useState} from "react";
import {useProfile} from "../../contexts/profile-context";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const {profile, updateProfile, logout} = useProfile();
    const [newProfile, setNewProfile] = useState({});
    const navigate = useNavigate();

    const handleUpdateProfile = async () => {
        const response = await updateProfile(newProfile);
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
        await logout();
        navigate("/login");
    }

    useEffect(() => {
        if (profile) {
            setNewProfile(profile);
        }
    }, []);

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
                               type="radio" id="rolePleb"
                               value="pleb" checked={newProfile && newProfile.role === "pleb"}></input>
                        <label htmlFor="rolePleb" className="form-check-label">Pleb</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" onChange={handleRoleChange}
                               type="radio" id="roleNotPleb"
                               value="notPleb" checked={newProfile && newProfile.role !== "pleb"}></input>
                        <label htmlFor="roleNotPleb" className="form-check-label">Not Pleb</label>
                    </div>
                </div>
            </div>

            <button className="btn btn-primary rounded-pill" onClick={handleUpdateProfile}>Save</button>
        </div>
    )
}
export default Profile;