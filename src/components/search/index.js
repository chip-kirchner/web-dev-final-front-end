import React, {useEffect, useRef, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import * as mealService from "../services/recipe-service";
import axios from "axios";


const Search = () => {
    const recipeSearchRef = useRef();
    const {recipeSearch} = useParams();
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);

    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s";

    const searchByName = async () => {
        const searchString = recipeSearchRef.current.value || recipeSearch || "";
        if (searchString !== "") {
            try {
                const response = await axios.get(`${url}=${searchString}`);
                if (response.data.meals !== null) {
                    setRecipes(response.data.meals);
                    recipeSearchRef.current.value = searchString;
                    navigate(`/search/${searchString}`);
                } else {
                    setRecipes([]);
                    recipeSearchRef.current.value = "";
                    navigate(`/search`);
                }
            } catch (e) {
                setRecipes([]);
                recipeSearchRef.current.value = "";
                navigate(`/search`);
            }
        } else {
            setRecipes([]);
        }
    }

    useEffect(() => {
        searchByName();
    }, []);

    return(
        <div className="row">
            <div className="col-9">
                <ul className="list-group">
                    <li className="list-group-item border-0 border-bottom">
                        <input ref={recipeSearchRef} className="form-control w-75 rounded-pill float-start" placeholder="Find something new!"></input>
                        <button onClick={searchByName} className="btn btn-primary rounded-pill float-end">Search</button>
                    </li>
                    {
                        recipes.map(recipe =>
                            <li className="list-group-item d-flex" key={recipe.idMeal}>
                                <div className="flex-grow-1 overflow-hidden text-nowrap text-truncate">
                                    <Link to={`/details/${recipe.idMeal}`} style={{ textDecoration: 'none' }}>
                                        <img src={recipe.strMealThumb} className="me-2 rounded" height={50} alt={recipe.strMeal}/>
                                        <span className="text-black">
                                            <strong>{recipe.strMeal} ({mealService.getIngredients(recipe).length} Ingredients)</strong>
                                        </span>

                                    </Link>
                                </div>

                                <span className="flex-grow text-nowrap">
                                    {recipe.strSource ?
                                        <a style={{ textDecoration: 'none' }}
                                           href={recipe.strSource}
                                           className="ms-2 me-2 text-black">
                                        <i className="fas fa-link me-2"></i>
                                        <strong>Source</strong>
                                        </a>
                                    : <span className="ms-2 me-2 text-muted">
                                            <i className="fas fa-link me-2"></i>
                                            Source
                                        </span>}
                                    |
                                    {recipe.strYoutube ?
                                        <a style={{ textDecoration: 'none' }}
                                           href={recipe.strYoutube}
                                           className="ms-2 me-2 text-black">
                                            <i className="fas fa-link me-2"></i>
                                            <strong>Watch</strong>
                                        </a>
                                        : <span className="ms-2 me-2 text-muted">
                                            <i className="fas fa-link me-2"></i>
                                            Watch
                                        </span>}
                                </span>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="col-3">
                <h1>Recommend</h1>
            </div>
        </div>
    );
};

export default Search;