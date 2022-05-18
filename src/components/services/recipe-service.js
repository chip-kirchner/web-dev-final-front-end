import axios from 'axios';

const API_MEAL = 'https://www.themealdb.com/api/json/v1/1/';

export const findMealById = async (id) => {
    const response = await axios.get(`${API_MEAL}/lookup.php?i=${id}`);
    const meal = response.data;
    return meal.meals[0];
};

export const findRandomMeals = async () => {
    let responses = [];
    for (let i = 0; i < 3; i++) {
        let response = await axios.get(`${API_MEAL}random.php`);
        if (response.data !== null) {
            responses.push(response.data.meals[0]);
        }
    }
    return responses;
};

export const getIngredients = (meal) => {
    let toReturn = []
    for (let i = 0; i < 20; i++) {
        if (meal[`strIngredient${i+1}`]) {
            toReturn.push({ingredient: meal[`strIngredient${i+1}`], amount: meal[`strMeasure${i+1}`]});
        }
    }
    return toReturn
};


