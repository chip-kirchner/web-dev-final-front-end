import React, {useEffect, useState} from "react";
import * as service from "../services/post-service";
import {useProfile} from "../../contexts/profile-context";
import PostItem from "./post-item";
import WritePost from "./write-post";
import {useDispatch, useSelector} from "react-redux";
import * as action from "../actions/post-actions";
import SecureContent from "../secure-content";

const PostScreen = () => {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const {profile, checkLoggedIn} = useProfile();

    const loadFunction = async (dispatch) => {
        await action.getPosts(dispatch);
        await checkLoggedIn();
    }
    useEffect(() => {
        loadFunction(dispatch);
    }, [dispatch, profile])

    return (
        <>
            <SecureContent>
                <WritePost/>
            </SecureContent>
            <ul className="list-group">
                {posts.map(post =>
                    <PostItem post={post}/>
                )}
            </ul>
        </>
    );
};

export default PostScreen;