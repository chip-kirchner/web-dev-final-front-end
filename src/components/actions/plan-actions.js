import * as service from "../services/plan-service";

export const GET_ALL_PLANS = "GET_ALL_PLANS";
export const CREATE_PLAN = "CREATE_PLAN";
export const DELETE_PLAN = "DELETE_PLAN";
export const PUBLISH_PLAN = "PUBLISH_PLAN";

export const getPlans = async (dispatch) => {
    const plans = await service.findAllPlans();
    if (plans) {
        dispatch({
            type: GET_ALL_PLANS,
            plans
        })
    }
}

export const createPlan = async (newPlan, dispatch) => {
    const plan = await service.createPlan(newPlan);
    if (plan) {
        dispatch({
            type: CREATE_PLAN,
            plan
        })
    }
}

export const deletePlan = async (planToDelete, dispatch) => {
    const response = await service.deletePlan(planToDelete);
    if (response) {
        dispatch({
            type: DELETE_PLAN,
            planToDelete
        })
    }
}

export const publishPlan = async (plan, dispatch) => {
    const response = await service.publishPlan(plan);
    const newPlan = {...plan, publish: true};
    if (response) {
        dispatch({
            type: PUBLISH_PLAN,
            newPlan
        })
    }
}