import axios from 'axios';

const API_MEAL = 'https://www.themealdb.com/api/json/v1/1/';

export const findMealById = async (id) => {
    const response = await axios.get(`${API_MEAL}/lookup.php?i=${id}`);
    const meal = response.data;
    return meal.meals[0];
};

export const findMealByName = () => {};
export const findMealByIngredient = () => {};
export const findRandomMeal = () => {};


