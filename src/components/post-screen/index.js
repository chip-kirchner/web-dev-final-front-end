import React, {useEffect} from "react";
import PostItem from "./post-item";
import WritePost from "./write-post";
import {useDispatch, useSelector} from "react-redux";
import * as action from "../actions/post-actions";
import SecureContent from "../secure-content";
import RecommendScreen from "../recommend-screen";

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
        <div className="row">
            <div className="col-xl-8">
                <h2>Most Recent Posts</h2>
                <SecureContent>
                    <WritePost/>
                </SecureContent>
                <ul className="list-group">
                    {posts.map(post =>
                        <PostItem post={post}/>
                    )}
                </ul>
            </div>
            <div className="d-none d-xl-block col-xl-4">
                <RecommendScreen/>
            </div>

        </div>
    );
};

export default PostScreen;