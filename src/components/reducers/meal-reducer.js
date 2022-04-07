import {FIND_MEAL_BY_ID} from "../actions/meal-actions";

const mealReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_MEAL_BY_ID:
            return action.meal;
        default:
            return state;
    }
}
export default mealReducer;