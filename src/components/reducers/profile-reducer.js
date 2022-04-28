import {LOGOUT, SET_PROFILE, UPDATE_PROFILE, ADOPT_PLAN, LIKE, FOLLOW, UNFOLLOW} from "../actions/profile-actions";

const profileReducer = (state = null, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return action.profile;
        case UPDATE_PROFILE:
            const newProfile = {...state, ...action.newProfile};
            return newProfile;
        case LOGOUT:
            return null;
        case LIKE:
            //Is this in the profile?
            if(state.favoriteRecipes.map(m => m.idMeal).includes(action.recipe.idMeal)) {
                const newLikes = state.favoriteRecipes.filter(m => m.idMeal !== action.recipe.idMeal);
                return {...state, favoriteRecipes: newLikes};
            } else {
                const newLikes = [...state.favoriteRecipes, action.recipe];
                return {...state, favoriteRecipes: newLikes};
            }
        case ADOPT_PLAN:
            return {...state, plan: action.plan};
        case FOLLOW:
            console.log({...state, following: [action.user._id, ...state.following]})
            return {...state, following: [action.user._id, ...state.following]};
        case UNFOLLOW:
            console.log({...state, following: state.following.filter(u => u !== action.user._id)})
            return {...state, following: state.following.filter(u => u !== action.user._id)};
        default:
            return state;
    }

}
export default profileReducer;