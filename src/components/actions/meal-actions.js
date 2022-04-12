import * as service from "../services/recipe-service";

export const FIND_MEAL_BY_ID = 'FIND_MEAL_BY_ID';

export const findMealById = async (dispatch, id) => {
    const meal = await service.findMealById(id);
    dispatch({
        type: FIND_MEAL_BY_ID,
        meal
    });
}

export const findMultiMeals = async (dispatch, ids) => {
    const meals = []
}