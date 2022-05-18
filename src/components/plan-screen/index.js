import React, {useEffect} from "react";
import * as action from "../actions/plan-actions";
import PlanItem from "./plan-item";
import {useDispatch, useSelector} from "react-redux";
import RecommendScreen from "../recommend-screen";

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