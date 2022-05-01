import {useDispatch, useSelector} from "react-redux";
import PostItem from "../post-screen/post-item";
import UserCard from "../user-card";
import PlanItem from "../plan-screen/plan-item";
import {getPlans} from "../actions/plan-actions";
import {getPosts} from "../actions/post-actions";
import React, {useEffect} from "react";
import FavoriteWidget from "./favorite-widget";

const ViewWidget = ({view, user = null}) => {
    const profile = useSelector(state => state.profile);
    if (!user) {
        user = profile;
    }
    const plans = useSelector(state => state.plans);
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        getPlans(dispatch);
        getPosts(dispatch);
    }, [dispatch]);

    switch(view) {
        case 'posts':
            return(
                <ul className="list-group mt-2">
                    {posts.filter(post => post.user._id === user._id).map(post =>
                        <PostItem post={post}/>
                    )}
                </ul>
            )
        case 'following':
            return(
                <ul className="list-group mt-2">
                    {user.following.map(user =>
                        <li className="list-group-item d-flex align-items-center" key={user._id}>
                            <UserCard user={user}/>
                        </li>
                    )}
                </ul>
            )
        case 'followedby':
            return(
                <ul className="list-group mt-2">
                    {user.followedBy.map(user =>
                        <li className="list-group-item d-flex align-items-center" key={user._id}>
                            <UserCard user={user}/>
                        </li>
                    )}
                </ul>
            )
        case 'plans':
            return (
                <ul className="list-group mt-2">
                    {plans.filter(plan => plan.user._id === user._id).map(
                        plan => <PlanItem plan={plan}/>
                    )}
                </ul>
            )
        case 'favorites':
            return (
                <ul className="list-group mt-2">
                    {user.favoriteRecipes.map(recipe =>
                        <FavoriteWidget recipe={recipe}/>
                    )}
                </ul>
            )
        default:
            return null;
    }

}
export default ViewWidget;