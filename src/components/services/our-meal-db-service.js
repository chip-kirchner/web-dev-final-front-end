import axios from 'axios';

const API_MEAL = 'http://localhost:4000';

export const findRecipeById = async (id) => {
    const response = await axios.get(`${API_MEAL}/api/meals/${id}`);
    if (response.status !== 404) {
        return response.data;
    } else {
        return {};
    }

};

export const likeRecipe = () => {};