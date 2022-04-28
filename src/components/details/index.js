import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import * as mealService from "../services/recipe-service";
import * as ourMealService from "../services/our-meal-db-service";
import * as action from "../actions/profile-actions";
import {useDispatch, useSelector} from "react-redux";
import SecureContent from "../secure-content";


const Details = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const [meal, setMeal] = useState({});
    const [dbMeal, setDbMeal] = useState(null);
    const [day, setDay] = useState("monday");
    const {mealID} = useParams();
    const navigate = useNavigate();

    const isLiked = () => {
        if (dbMeal && dbMeal.liked && profile) {
            return dbMeal.liked.filter(u => u._id === profile._id).length > 0;
        }
        return false;
    }

    const handleDayChange = (e) => {
        const newDay = e.target.value;
        setDay(newDay);
    }

    const handleAddMealToPlan = async () => {
        if (dbMeal._id) {
            await action.addMealToPlan(day, dbMeal, profile.plan, dispatch);
            navigate("/home");
        } else {
            const ourNewMeal = await ourMealService.addRecipe(meal);
            setDbMeal(ourNewMeal);
            await action.addMealToPlan(day, ourNewMeal, profile.plan, dispatch);
            navigate("/home");
        }
    }

    useEffect(() => {
        const loadMeal = async () => {
            const newMeal = await mealService.findMealById(mealID);
            setMeal(newMeal);
            const ourNewMeal = await ourMealService.findRecipeById(mealID);
            setDbMeal(ourNewMeal);
            await action.checkLoggedIn(dispatch);
        };

        loadMeal();
    }, [mealID, dispatch]);

    const handleLikes = async () => {
        if (profile) {
            try {
                await action.likeRecipe(meal, dispatch);
                if (dbMeal.liked) {
                    if (isLiked()) {
                        const newLikes = dbMeal.liked.filter(u => u._id !== profile._id);
                        setDbMeal({...dbMeal, liked: newLikes});
                    } else {
                        const newLikes = [...dbMeal.liked, profile];
                        setDbMeal({...dbMeal, liked: newLikes});
                    }
                } else {
                    const ourNewMeal = await ourMealService.findRecipeById(meal.idMeal);
                    setDbMeal(ourNewMeal);
                }
            } catch (e) {
                //empty
            }
        }
    }

    const ingredients = mealService.getIngredients(meal);
    return(
        <>
            <div className="row">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="float-start">{meal.strMeal}</h2>
                    <span>
                        <i title="Add to favorites" onClick={handleLikes} className={`fas fa-heart align-middle ${isLiked() ? "text-danger" : ""} me-1`}></i>
                        <span className="text-muted me-3"> {dbMeal && dbMeal.liked ? dbMeal.liked.length : 0}</span>
                        <SecureContent>
                            <i title="Add to your plan" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="fas fa-calendar align-middle text-primary me-3"></i>

                            <i onClick={() => {navigate(`/posts?i=${meal.idMeal}`)}} title="Make a post" data-bs-toggle="tooltip" className="fas fa-plus align-middle me-2"></i>
                        </SecureContent>
                    </span>

                </div>
            </div>
            <div className="row border-bottom rounded pb-2">
                <div className="col-8">
                    <img className="img-fluid rounded" src={meal.strMealThumb} alt={meal.strMeal}/>
                </div>
                <div className="col-4">
                    <ul className="list-group">
                        <li className="list-group-item bg-primary text-white">Ingredients</li>
                        {
                            ingredients.map(ind => {
                                return (<li className="list-group-item font-weight-bold">{ind.amount} {ind.ingredient}</li>);
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="d-flex justify-content-between mt-2">
                <span className="float-start">
                    <span className="text-secondary me-2">
                        <i className="fas fa-globe me-2"></i>
                        {meal.strArea}
                    </span>
                    |
                    <span className="text-secondary ms-2 me-2">
                        <i className="fas fa-utensils me-2"></i>
                        {meal.strCategory}
                    </span>
                </span>

                <span className="float-end">
                    {meal.strSource ?
                        <a style={{ textDecoration: 'none' }}
                           href={meal.strSource}
                           className="ms-2 me-2 text-black">
                            <i className="fas fa-link me-2"></i>
                            <strong>Source</strong>
                        </a>
                        : <span className="ms-2 me-2 text-muted">
                            <i className="fas fa-link me-2"></i>
                            Source
                        </span>}
                    |
                    {meal.strYoutube ?
                        <a style={{ textDecoration: 'none' }}
                           href={meal.strYoutube}
                           className="ms-2 me-2 text-black">
                            <i className="fas fa-link me-2"></i>
                            <strong>Watch</strong>
                        </a>
                        : <span className="ms-2 me-2 text-muted">
                            <i className="fas fa-link me-2"></i>
                            Watch
                        </span>}
                </span>
            </div>
            <div className="mt-2">
                {meal.strInstructions}
            </div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Which day would you like to add this recipe to?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <select onChange={handleDayChange} className="form-select">
                                <option selected value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                                <option value="friday">Friday</option>
                                <option value="saturday">Saturday</option>
                                <option value="sunday">Sunday</option>
                            </select>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Nevermind</button>
                            <button onClick={handleAddMealToPlan} data-bs-dismiss="modal" type="button" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;