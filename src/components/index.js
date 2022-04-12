import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import mealReducer from "./reducers/meal-reducer";
import Navigation from "./navigation";
import Home from "./home";
import Favorites from "./favorites";

const reducer = mealReducer;
const store = createStore(reducer);

const MealPlanner = () => {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2">
                    <Navigation/>
                </div>
                <div className="col-7">
                    <Favorites/>
                </div>
                <div className="col-3">
                Recommendations
                </div>
            </div>
        </Provider>
    )
};

export default MealPlanner;