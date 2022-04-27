import React, {useEffect, useState} from "react";
import * as action from "../actions/post-actions";
import {useDispatch, useSelector} from "react-redux";
import RecipeWidget from "./recipe-widget";

const PostItem = ({post}) => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const isLiked = () => {
        if (profile) {
            return post.likedBy.includes(profile._id);
        }
        return false;
    }

    const handleLikes = async () => {
        if (profile) {
            if (isLiked()) {
                await action.unlikePost(post, profile, dispatch);
            } else {
                await action.likePost(post, profile, dispatch);
            }
        }
    }

    return (
        <li key={post._id} className="border list-group-item rounded mb-2">
            <span className="float-end">
                <i onClick={handleLikes}
                   className={`fas fa-thumbs-up ${isLiked() ? "text-primary" : ""} me-1`}></i>
                <span className="text-secondary">{post.likedBy.length}</span>
            </span>

            <span className="mt-1">
                <strong className="me-2">@{post.user.name}</strong>
                -
                {post.user.role === 'notPleb' ? <i className="fas fa-check text-primary ms-2 me-2"></i> : ""}
            </span>
            <div className="mb-2">
                {post.text}
            </div>
            <div className="mb-2 ">
                <RecipeWidget recipe={post.recipe}/>
            </div>
        </li>
    );
};

export default PostItem;