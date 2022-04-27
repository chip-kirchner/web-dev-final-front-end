import {GET_ALL_PLANS, PUBLISH_PLAN, CREATE_PLAN, DELETE_PLAN} from "../actions/plan-actions";

const planReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_PLANS:
            return action.plans;
        case CREATE_PLAN:
            return [action.plan, ...state.plans];
        case DELETE_PLAN:
            plans: state.plans.filter(p => p._id !== action.planToDelete._id);
        case PUBLISH_PLAN:
            plans: state.plans.filter(p => p._id === action.newPlan._id ? action.newPlan : p);
        default:
            return state;
    }
}
export default planReducer;