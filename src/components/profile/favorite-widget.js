import RecipeWidget from "../post-screen/recipe-widget";
import React from "react";
import {useDispatch} from "react-redux";
import {unlike} from "../actions/profile-actions";

const FavoriteWidget = ({recipe}) => {
    const dispatch = useDispatch();

    const handleUnlike = async (e) => {
        await unlike(recipe, dispatch);
    }

    return(
            <li className="list-group-item" key={recipe.idMeal}>
                <button onClick={handleUnlike} title="Remove" className="btn btn-close float-end"></button>
                <RecipeWidget recipe={recipe}/>
            </li>
        )

};
export default FavoriteWidget;