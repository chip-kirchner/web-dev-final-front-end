import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as mealService from "../services/recipe-service";
import * as ourMealService from "../services/our-meal-db-service";

const Details = () => {
    const [meal, setMeal] = useState({});
    const [dbMeal, setDbMeal] = useState({});
    const {mealID} = useParams();

    useEffect(() => {
        const loadMeal = async () => {
            const newMeal = await mealService.findMealById(mealID);
            setMeal(newMeal);
            const ourNewMeal = await ourMealService.findRecipeById(mealID);
            setDbMeal(ourNewMeal);
        };

        loadMeal();
    }, [mealID]);

    const ingredients = mealService.getIngredients(meal);
    return(
        <>
            <div className="row">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="float-start">{meal.strMeal}</h2>
                    <span>
                        <i className="fas fa-heart align-middle text-danger me-1"></i>
                        <span className="text-muted me-3"> {dbMeal.liked ? dbMeal.liked : 0}</span>
                        <i className="fas fa-calendar align-middle text-primary me-3"></i>
                        <i className="fas fa-plus align-middle me-2"></i>
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
                    <span className="ms-2 me-2">
                        <i className="fas fa-link me-2"></i>
                        Source
                    </span>
                    |
                    <span className="ms-2">
                        <i className="fas fa-video me-2"></i>
                        Watch
                    </span>
                </span>
            </div>
            <div className="mt-2">
                {meal.strInstructions}
            </div>
        </>
    );
};

export default Details;