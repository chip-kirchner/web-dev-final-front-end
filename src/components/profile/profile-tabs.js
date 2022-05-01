import ViewWidget from "./view-widget";
import React, {useState} from "react";
import {useSelector} from "react-redux";


const ProfileTabs = ({user= null})=> {
    const profile = useSelector(state => state.profile);
    const first = user;
    if (!user) {
        user = profile
    }

    const [view, setView] = useState("posts");

    const handleGoPosts = (e) => {
        setView('posts');
    }

    const handleGoPlans = (e) => {
        if (user && user.role === 'planner') {
            setView('plans');
        }
    }

    const handleGoFollowing = (e) => {
        setView('following');
    }

    const handleGoFollowedBy = (e) => {
        setView('followedby');
    }

    const handleGoFavorites = (e) => {
        setView('favorites');
    }
    return (
        <div>
            <div>
                <ul className="nav nav-tabs mt-2">
                    <li className="nav-item pointer" onClick={handleGoPosts}>
                        <div className={`nav-link ${view === 'posts' ? 'active' : ''}`}>Posts</div>
                    </li>
                    <li className="nav-item pointer" onClick={handleGoPlans}>
                        <div className={`nav-link ${view === 'plans' ? 'active' : ''} ${user && user.role === 'planner' ? '' : 'disabled'}`}>Plans</div>
                    </li>
                    <li className="nav-item pointer" onClick={handleGoFollowing}>
                        <div className={`nav-link ${view === 'following' ? 'active' : ''}`}>Following</div>
                    </li>
                    <li className="nav-item pointer" onClick={handleGoFollowedBy}>
                        <div className={`nav-link ${view === 'followedby' ? 'active' : ''}`}>FollowedBy</div>
                    </li>
                    <li className="nav-item d-xl-none pointer" onClick={handleGoFavorites}>
                        <div className={`nav-link ${view === 'favorites' ? 'active' : ''}`}>Favorites</div>
                    </li>
                </ul>
            </div>
            <ViewWidget view={view} user={first ? user : null}/>
        </div>
    );
}
export default ProfileTabs;