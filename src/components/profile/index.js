import React, {useEffect, useState} from "react";
import {useProfile} from "../../contexts/profile-context";

const Profile = () => {
    const {profile} = useProfile();
    console.log(profile);
    return (
        <div>
            <h1>{profile && profile.email}</h1>
            {profile && JSON.stringify(profile)}
        </div>
    )
}
export default Profile;