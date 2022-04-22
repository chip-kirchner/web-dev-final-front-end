import axios from 'axios';
import * as authService from "./auth-service";

const API_MEAL = 'http://localhost:4000';

export const findRecipeById = async (id) => {
    try{
        const response = await axios.get(`${API_MEAL}/api/meals/${id}`);
        return response.data;
    } catch (e) {
        return {};
    }
};

export const likeRecipe = async (recipe) => {
    // Get the loggedin profile
    try {
        const user = await authService.profile();
        const response = await axios.put(`${API_MEAL}/api/like`, {user, recipe});
        return response.status;
    } catch (e) {
        throw e;
    }
};