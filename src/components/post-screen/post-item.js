import React, {useEffect, useState} from "react";
import * as action from "../actions/post-actions";
import {useDispatch, useSelector} from "react-redux";
import RecipeWidget from "./recipe-widget";
import Verify from "./verify";
import {Link} from "react-router-dom";

const PostItem = ({post}) => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const isLiked = () => {
        if (profile) {
            return post.likedBy.includes(profile._id);
        }
        return false;
    }

    const handleDelete = async (e) => {
        if (profile) {
            await action.deletePost(post, dispatch);
        }
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
                <strong className="me-1">
                    <Link to={`/profile/${post.user._id}`}
                                               className="text-black"
                                               style={{ textDecoration: 'none' }}
                                            >@{post.user.name}</Link>
                </strong>
                <Verify role={post.user.role}/>
            </span>
            <div className="mb-2">
                {post.text}
            </div>
            {profile._id === post.user._id? <button onClick={handleDelete} className="btn btn-close float-end"></button> : ""}
            <div className="mb-2 ">
                <RecipeWidget recipe={post.recipe}/>
            </div>

        </li>
    );
};

export default PostItem;