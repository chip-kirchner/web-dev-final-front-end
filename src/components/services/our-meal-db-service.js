import axios from 'axios';

const API_MEAL = 'http://localhost:4000';

export const findRecipeById = async (id) => {
    try{
        const response = await axios.get(`${API_MEAL}/api/meals/${id}`);
        return response.data;
    } catch (e) {
        return {};
    }
};

export const likeRecipe = () => {};