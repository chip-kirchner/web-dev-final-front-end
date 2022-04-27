import React, {useEffect} from "react";
import * as action from "../actions/plan-actions";
import PlanItem from "./plan-item";
import {useDispatch, useSelector} from "react-redux";

const temp_plan = {
    "title": "A new plan",
    "user": {username: "bob"},
    "monday": {
        "_id": "6265c96798c44f0e8e2f73bf",
        "idMeal": 52920,
        "strMeal": "Chicken Marengo",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/qpxvuq1511798906.jpg",
        "strSource": "https://www.bbcgoodfood.com/recipes/3146682/chicken-marengo",
        "strArea": "French",
        "strCategory": "Chicken",
        "liked": [],
        "__v": 0
    },
    "wednesday": {
        "_id": "6265c96798c44f0e8e2f73bf",
        "idMeal": 52920,
        "strMeal": "Chicken Marengo",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/qpxvuq1511798906.jpg",
        "strSource": "https://www.bbcgoodfood.com/recipes/3146682/chicken-marengo",
        "strArea": "French",
        "strCategory": "Chicken",
        "liked": [],
        "__v": 0
    }
};

const PlanScreen = () => {
    const dispatch = useDispatch();
    const plans = useSelector((state) => state.plans);
    console.log(plans);
    useEffect(() => {
        action.getPlans(dispatch);
    }, [dispatch]);

    return (
        <>
            <p className="lead">Check out some plans from our verified meal-planners below!</p>
            {
                plans.map(plan => <div className="mb-2 p-2 border-bottom">
                    <PlanItem plan={plan}/>
                </div>)
            }
        </>

    );
};

export default PlanScreen;