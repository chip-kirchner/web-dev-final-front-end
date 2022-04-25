import React, {useEffect, useState} from "react";
import * as service from "../services/post-service";
import {Link} from "react-router-dom";
import {useProfile} from "../../contexts/profile-context";
import PostItem from "./post-item";

const PostScreen = () => {
    const [posts, setPosts] = useState([]);
    const {profile, checkLoggedIn} = useProfile();

    const getPosts = async () => {
        const newPosts = await service.findAllPosts();
        setPosts(newPosts);
    }

    useEffect(() => {
        getPosts();
        checkLoggedIn();
    }, [])

    return (
        <ul className="list-group">
            {posts.map(post =>
                <PostItem newPost={post}/>
            )}
        </ul>
    );
};

export default PostScreen;