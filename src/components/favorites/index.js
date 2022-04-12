import MealItem from "./meal-item";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findMealById} from "../actions/meal-actions";

const Favorites = () => {

    const favs = [52920, 52900, 52923];

    return(
        <>
            <ul className="list-group">
                {favs.map(item => <li className="list-group-item" key={item}><MealItem id={item}/></li>)}
            </ul>
        </>
    );
}

export default Favorites;