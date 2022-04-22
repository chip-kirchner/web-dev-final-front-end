import React, {useEffect, useState} from "react";
import RecipeCarousel from "../recipe-carousel";
import {findRandomMeals} from "../services/recipe-service";
import {Link} from "react-router-dom";


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
                    <Link to="/login">
                        <button className="btn btn-primary float-end">Login</button>
                    </Link>
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