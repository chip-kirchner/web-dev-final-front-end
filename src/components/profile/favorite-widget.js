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
            <li className="list-group-item d-flex" key={recipe.idMeal}>
                <div className="flex-grow-1 overflow-hidden text-nowrap text-truncate">
                    <RecipeWidget recipe={recipe}/>
                </div>

                <button onClick={handleUnlike} title="Remove" className="btn btn-close"></button>
            </li>
        )

};
export default FavoriteWidget;