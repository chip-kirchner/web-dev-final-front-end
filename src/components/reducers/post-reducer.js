import {GET_POSTS, CREATE_POST, DELETE_POST, UPDATE_POST} from "../actions/post-actions";

const postReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_POST:
            return [
                action.newPost,
                ...state
            ];
        case DELETE_POST:
            return state.filter(post => post !== action.postToDelete);
        case UPDATE_POST:
            return state.map(post => post._id === action.newPost._id ? action.newPost : post);
        case GET_POSTS:
            return action.posts;
        default:
            return state;
    }
}
export default postReducer;