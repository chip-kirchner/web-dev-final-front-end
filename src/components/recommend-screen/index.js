import React, {useEffect, useState} from "react";
import * as service from "../services/our-meal-db-service";
import {Link} from "react-router-dom";
import RecipeWidget from "../post-screen/recipe-widget";

const RecommendScreen = () => {
    const [recommendations, setRecommendations] = useState([]);

    const load = async () => {
        const recipes = await service.findRecommend();
        if (recipes) {
            setRecommendations(recipes);
        }
    }

    useEffect(() => {
        load();
    }, [])

    return (
        <div>
            <h3>Popular Recipes</h3>
            <ul className="list-group">
                {recommendations.map(recipe =>
                    <Link className="list-group-item list-group-item-action" to={`/details/${recipe.idMeal}`}>
                        <RecipeWidget recipe={recipe}/>
                    </Link>

                    )}

            </ul>
        </div>

    )
}

export default RecommendScreen;