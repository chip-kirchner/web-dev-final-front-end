import React from "react";
import RecipeWidget from "../post-screen/recipe-widget";
import SecureContent from "../secure-content";
import * as action from "../actions/profile-actions";
import * as planAction from "../actions/plan-actions";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

const temp_recipe = {
    "_id": "6265c96798c44f0e8e2f73bf",
    "idMeal": '#',
    "strMeal": "No Meal Yet.",
    "strMealThumb": "https://www.publicdomainpictures.net/pictures/120000/velka/christmas-dinner.jpg",
    "strSource": "https://www.bbcgoodfood.com/recipes/3146682/chicken-marengo",
    "strArea": "TBD",
    "strCategory": "TBD",
    "liked": [],
    "__v": 0
};

const PlanItem = (
    {
        plan: plan,
        disable: disable = false
    }
) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const profile = useSelector(state => state.profile);

    const handleClick = async (e) => {
        await action.adoptPlan(plan, dispatch);
        navigate("/home");
    }

    const handleDelete = async (e) => {
        await planAction.deletePlan(plan, dispatch);
    }

    return (
            <ul className="list-group">
                <li key="name" className="list-group-item border-0 border-bottom d-flex justify-content-between align-items-center">
                    <span><strong>{plan.title}</strong> {disable ? "" : <Link className="text-black"
                                                                              style={{ textDecoration: 'none' }}
                                                                              to={`/profile/${plan.user._id}`}>by @{plan.user.name}</Link>} </span>
                    <SecureContent>
                        <div>
                            {disable ? "" : <i onClick={handleClick} className="fas fa-plus pointer me-2"></i>}
                            {!disable && profile && plan.user._id === profile._id ?
                                <button onClick={handleDelete} className="btn btn-close ms-2"></button> : ""}
                        </div>
                    </SecureContent>

                </li>
                <li key="sunday" className="list-group-item">
                    <div className="row">
                        <div className="col-md-3 col-xl-2 fs-4">
                            <strong>Sunday</strong>
                        </div>
                        <div className="col-md-9 col-xl-10">
                            <RecipeWidget recipe={plan.sunday ? plan.sunday : temp_recipe}/>
                        </div>
                    </div>
                </li>
                <li key="monday" className="list-group-item">
                <div className="row">
                    <div className="col-md-3 col-xl-2 fs-4">
                        <strong>Monday</strong>
                    </div>
                    <div className="col-md-9 col-xl-10">
                        <RecipeWidget recipe={plan.monday ? plan.monday : temp_recipe}/>
                    </div>
                </div>
                </li>
                <li key="tuesday" className="list-group-item">
                    <div className="row">
                        <div className="col-md-3 col-xl-2 fs-4">
                            <strong>Tuesday</strong>
                        </div>
                        <div className="col-md-9 col-xl-10">
                            <RecipeWidget recipe={plan.tuesday ? plan.tuesday : temp_recipe}/>
                        </div>
                    </div>
                </li>
                <li key="wednesday" className="list-group-item">
                    <div className="row">
                        <div className="col-md-3 col-xl-2 fs-4">
                            <strong>Wednesday</strong>
                        </div>
                        <div className="col-md-9 col-xl-10">
                            <RecipeWidget recipe={plan.wednesday ? plan.wednesday : temp_recipe}/>
                        </div>
                    </div>
                </li>
                <li key="thursday" className="list-group-item">
                    <div className="row">
                        <div className="col-md-3 col-xl-2 fs-4">
                            <strong>Thursday</strong>
                        </div>
                        <div className="col-md-9 col-xl-10">
                            <RecipeWidget recipe={plan.thursday ? plan.thursday : temp_recipe}/>
                        </div>
                    </div>
                </li>
                <li key="friday" className="list-group-item">
                    <div className="row">
                        <div className="col-md-3 col-xl-2 fs-4">
                            <strong>Friday</strong>
                        </div>
                        <div className="col-md-9 col-xl-10">
                            <RecipeWidget recipe={plan.friday ? plan.friday : temp_recipe}/>
                        </div>
                    </div>
                </li>
                <li key="saturday" className="list-group-item">
                    <div className="row">
                        <div className="col-md-3 col-xl-2 fs-4">
                            <strong>Saturday</strong>
                        </div>
                        <div className="col-md-9 col-xl-10">
                            <RecipeWidget recipe={plan.saturday ? plan.saturday : temp_recipe}/>
                        </div>
                    </div>
                </li>
            </ul>
    );
};

export default PlanItem;