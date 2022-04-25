import * as service from "../services/post-service";

export const GET_POSTS = "GET_POSTS";
export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";

export const getPosts = async (dispatch) => {
    const posts = await service.findAllPosts();
    dispatch({
        type: GET_POSTS,
        posts
    });
}

export const createPost = async (post, dispatch) => {
    try {
        const newPost = await service.createPost(post);
        if (newPost) {
            dispatch({
                type: CREATE_POST,
                newPost
            })
        }
    } catch (e) {
        //Empty
    }
}

export const deletePost = async (postToDelete, dispatch) => {
    try {
        const response = await service.deletePost(postToDelete);
        if (response) {
            dispatch({
                type: DELETE_POST,
                postToDelete
            })
        }
    } catch (e) {
        //Empty
    }
}

export const likePost = async (post, user, dispatch) => {
    const response = await service.likePost(post);
    if (response) {
        const newLikes = [...post.likedBy, user._id];
        const newPost = {...post, lilkedBy: newLikes};
        dispatch({
            type: UPDATE_POST,
            newPost
        })
    }
}

export const unlikePost = async (post, user, dispatch) => {
    const response = await service.unlikePost(post);
    if (response) {
        const newLikes = post.likedBy.filter(use => use !== user._id);
        const newPost = {...post, likedBy: newLikes};
        dispatch({
            type: UPDATE_POST,
            newPost
        })
    }
}

