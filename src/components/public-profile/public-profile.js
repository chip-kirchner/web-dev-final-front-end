import React, {useState, useEffect} from "react";
import * as service from "../services/auth-service";
import * as action from "../actions/profile-actions";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import SecureContent from "../secure-content";
import PostItem from "../post-screen/post-item";
import * as postAction from "../actions/post-actions";
import RecipeWidget from "../post-screen/recipe-widget";

const PublicProfile = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    const profile = useSelector(state => state.profile);
    const [users, setUsers] = useState([]);
    const {uid} = useParams();
    const [prof, setProf] = useState(null);

    const find = async () => {
        if (uid) {
            try {
                const temp = await service.lookup(uid);
                setProf(temp);
                await postAction.getPosts(dispatch);
                setUsers(temp.following);
            } catch (e) {
                setProf(null);
            }
        }
    }

    const isFollowing = () => {
        if (profile) {
            return profile.following.filter(u => u === uid).length > 0;
        }
        return false;
    }

    const handleFollow = async () => {
        if (prof && isFollowing()) {
            await action.unfollow(prof, dispatch);
        } else {
            await action.follow(prof, dispatch);
        }
    }

    useEffect(() => {
        find();
    }, [dispatch])

    console.log(prof.following)
    if (prof) {
        return (
            <div className="row">
                <div className="col-xl-8">
                    <div className="border-bottom">
                        <h1>@{prof.name}</h1>

                        <div className="d-flex align-items-center">
                            <i className="text-muted me-3">
                                ({prof.role})
                            </i>
                            <span data-bs-toggle="modal" data-bs-target="#users" className="me-3">
                            {prof.following.length} Following
                        </span>
                            <span className="flex-grow-1">
                            {prof.followedBy.length} Followers
                        </span>
                            <SecureContent>
                                <button onClick={handleFollow} className="btn btn-primary mb-2">{isFollowing() ? 'Unfollow' : 'Follow'}</button>
                            </SecureContent>
                        </div>

                    </div>
                    <h4 className="mt-1">
                        Posts by @{prof.name}
                    </h4>

                    <div className="mt-3">
                        {
                            posts.filter(post => post.user._id === uid).map(post => <PostItem post={post}/>)
                        }
                    </div>
                </div>
                <div className="col-xl-4 d-none d-xl-block">
                    <h5>@{prof.name}'s Favorites</h5>
                    <ul className="list-group">
                        {prof.favoriteRecipes.map(recipe => <li className="list-group-item" key={recipe.idMeal}><RecipeWidget recipe={recipe}/></li>)}
                    </ul>
                </div>

                <div className="modal fade" id="users" data-bs-backdrop="static" data-bs-keyboard="false"
                     tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="publishLabel">{prof.name}'s Following</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <ul className="list-group">
                                    {prof.following.map(user => <li className="list-group-item">{user.name}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    } else {
        return (<h1>Not Found</h1>);
    }
}
export default PublicProfile;