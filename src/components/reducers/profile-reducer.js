import {LOGOUT, SET_PROFILE, UPDATE_PROFILE, ADOPT_PLAN, LIKE} from "../actions/profile-actions";

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
        default:
            return state;
    }

}
export default profileReducer;