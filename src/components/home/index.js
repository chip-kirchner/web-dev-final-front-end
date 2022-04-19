import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findMealById} from "../actions/meal-actions";
import CardCarousel from "../recipe-card";
import RecipeCard from "../recipe-card";
import RecipeCarousel from "../recipe-carousel";
import {findRandomMeals} from "../services/recipe-service";


const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const getRecipes = async () => {
        const rec = await findRandomMeals();
        setRecipes(rec);
    }
    useEffect(() => {getRecipes()}, []);

    return(
        <>

            <div className="row">
                <div className="col-md-12 col-lg-10">
                    <button className="btn btn-primary float-end">Login</button>
                    <div>
                        <h2>Welcome!</h2>
                        <p className="lead">Login to start building meal plans or browse recipes anonymously for inspiration.</p>
                    </div>
                    <RecipeCarousel recipes={recipes} />
                </div>
            </div>

        </>



    )
};

export default Home;