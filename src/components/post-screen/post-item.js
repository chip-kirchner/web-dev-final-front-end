import React, {useEffect, useState} from "react";
import * as service from "../services/post-service";
import {Link} from "react-router-dom";
import {useProfile} from "../../contexts/profile-context";

const PostItem = ({newPost}) => {
    const [post, setPost] = useState(newPost);
    const {profile} = useProfile();

    const isLiked = () => {
        if (profile) {
            return post.likedBy.includes(profile._id);
        }
        return false;
    }

    const handleLikes = async () => {
        if (profile) {
            if (isLiked()) {
                try {
                    await service.unlikePost(post);
                    const newLikes = post.likedBy.filter(use => use !== profile._id);
                    setPost({...post, likedBy: newLikes});
                } catch (e) {
                    //Empty
                }
            } else {
                try {
                    await service.likePost(post);
                    const newLikes = [...post.likedBy, profile._id];
                    setPost({...post, likedBy: newLikes});
                } catch (e) {
                    //Empty
                }
            }
        }
    }

    return (
        <li className="border list-group-item rounded mb-2">
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
                <Link to={`/details/${post.recipe.idMeal}`} style={{ textDecoration: 'none' }}
                      className="text-black">
                    <img src={post.recipe.strMealThumb} alt={post.recipe.strMeal} height={60}
                         className="rounded float-start me-2 border border-muted"/>
                    <div>
                        <strong>{post.recipe.strMeal}</strong>
                    </div>

                    <span className="text-secondary me-2">
                        <i className="fas fa-globe me-2"></i>
                        {post.recipe.strArea}
                    </span>
                    |
                    <span className="text-secondary ms-2 me-2">
                        <i className="fas fa-utensils me-2"></i>
                        {post.recipe.strCategory}
                    </span>
                </Link>
            </div>
        </li>
    );
};

export default PostItem;