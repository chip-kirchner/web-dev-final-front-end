import React from "react";
import {useSelector} from "react-redux";
import PlanItem from "../plan-screen/plan-item";

const LoggedIn = () => {
    const profile = useSelector(state => state.profile);

    const myPlan = {...profile.plan, title: `${profile.name}'s Plan`, user: profile};

    return (
        <>
            <h1>Hi {profile.name}!</h1>
            <p className="lead">Take a look at this week's plan below.</p>
            <div className="mt-2">
                <PlanItem plan={myPlan} disable={true}/>
            </div>
        </>
    )
}

export default LoggedIn;