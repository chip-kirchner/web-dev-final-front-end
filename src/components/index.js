import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import mealReducer from "./reducers/meal-reducer";
import Navigation from "./navigation";
import Home from "./home";

const reducer = mealReducer;
const store = createStore(reducer);

const MealPlanner = () => {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2">
                    <Navigation/>
                </div>
                <div className="col-6">
                    <Home/>
                </div>
                <div className="col-4">
                Recommendations
                </div>
            </div>
        </Provider>
    )
};

export default MealPlanner;