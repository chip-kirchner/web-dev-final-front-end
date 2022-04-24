import axios from 'axios';
import * as authService from "./auth-service";
const api = axios.create({withCredentials:  true});

const API_MEAL = 'http://localhost:4000';

export const findRecipeById = async (id) => {
    try{
        const response = await api.get(`${API_MEAL}/api/meals/${id}`);
        return response.data;
    } catch (e) {
        return {};
    }
};

export const likeRecipe = async (recipe) => {
    // Get the loggedin profile
    try {
        const response = await api.put(`${API_MEAL}/api/like`, {recipe});
        return response.status;
    } catch (e) {

    }
};

export const getFavorites = async () => {
    try {
        const response = await api.post(`${API_MEAL}/api/favorites`);
        return response.data;
    } catch (e) {
        throw e;
    }
}