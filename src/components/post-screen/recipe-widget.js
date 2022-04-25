import {Link} from "react-router-dom";
import React from "react";

const RecipeWidget = ({recipe}) => {
    return(
        <>
            <Link to={`/details/${recipe.idMeal}`} style={{ textDecoration: 'none' }}
                  className="text-black">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} height={60}
                     className="rounded float-start me-2 border border-muted"/>
                <div>
                    <strong>{recipe.strMeal}</strong>
                </div>

                <span className="text-secondary me-2">
                        <i className="fas fa-globe me-2"></i>
                    {recipe.strArea}
                    </span>
                |
                <span className="text-secondary ms-2 me-2">
                        <i className="fas fa-utensils me-2"></i>
                    {recipe.strCategory}
                    </span>
            </Link>
        </>
        );
}
export default RecipeWidget;