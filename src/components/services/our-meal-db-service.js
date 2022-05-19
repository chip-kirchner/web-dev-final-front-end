import axios from 'axios';
import {API_URL} from "./auth-service";
const api = axios.create({withCredentials:  true});

export const findRecipeById = async (id) => {
    try{
        const response = await api.get(`${API_URL}/meals/${id}`);
        return response.data;
    } catch (e) {
        return {};
    }
};

export const likeRecipe = async (recipe) => {
    // Get the loggedin profile
    try {
        const response = await api.put(`${API_URL}/like`, {recipe});
        return response.status;
    } catch (e) {
        throw(e);
    }
};

export const addRecipe = async (recipe) => {
    try {
        const response = await api.post(`${API_URL}/meals`, {recipe});
        return response.data;
    } catch(e) {
        throw e;
    }
}

export const findRecommend = async () => {
    try {
        const response = await api.get(`${API_URL}/recommended`);
        return response.data
    } catch (e) {
        throw e;
    }
}