import axios from 'axios';
const api = axios.create({withCredentials:  true});

const API_MEAL = process.env.API_URL || 'http://localhost:4000/api';

export const findRecipeById = async (id) => {
    try{
        const response = await api.get(`${API_MEAL}/meals/${id}`);
        return response.data;
    } catch (e) {
        return {};
    }
};

export const likeRecipe = async (recipe) => {
    // Get the loggedin profile
    try {
        const response = await api.put(`${API_MEAL}/like`, {recipe});
        return response.status;
    } catch (e) {
        throw(e);
    }
};

export const addRecipe = async (recipe) => {
    try {
        const response = await api.post(`${API_MEAL}/meals`, {recipe});
        return response.data;
    } catch(e) {
        throw e;
    }
}

export const findRecommend = async () => {
    try {
        const response = await api.get(`${API_MEAL}/recommended`);
        return response.data
    } catch (e) {
        throw e;
    }
}