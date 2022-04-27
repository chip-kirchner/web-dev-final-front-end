import React, {useEffect, useState} from "react";
import PostItem from "./post-item";
import WritePost from "./write-post";
import {useDispatch, useSelector} from "react-redux";
import * as action from "../actions/post-actions";
import SecureContent from "../secure-content";

const PostScreen = () => {
    const posts = useSelector((state) => state.posts);
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const loadFunction = async (dispatch) => {
        await action.getPosts(dispatch);
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