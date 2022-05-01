import React, {useEffect} from "react";
import * as action from "../actions/plan-actions";
import PlanItem from "./plan-item";
import {useDispatch, useSelector} from "react-redux";
import RecommendScreen from "../recommend-screen";

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
    useEffect(() => {
        action.getPlans(dispatch);
    }, [dispatch]);

    return (
        <div className="row">
            <div className="col-xl-8">
                <h1>Plans</h1>
                <p className="lead">Check out some plans from our verified meal-planners below!</p>
                {
                    plans.map(plan => <div className="mb-2 p-2 border-bottom">
                        <PlanItem plan={plan}/>
                    </div>)
                }
            </div>
            <div className="d-none d-xl-block col-xl-4 overflow-hidden text-nowrap text-truncate">
                <RecommendScreen/>
            </div>


        </div>

    );
};

export default PlanScreen;