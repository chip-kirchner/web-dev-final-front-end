import {GET_USERS, DELETE_USER} from "../actions/users-actions";

const userReducer = (state = null, action) => {
    switch(action.type) {
        case "GET_USERS":
            return action.users;
        case "DELETE_USER":
            return state.filter(user => user._id !== action.user._id);
        default:
            return state
    }
}
export default userReducer;