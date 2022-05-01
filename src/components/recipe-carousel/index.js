import {getIngredients} from "../services/recipe-service";
import "./style.css";
import {Link} from "react-router-dom";


const defaultRecipe = {
    strMealThumb: "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",//"https://www.publicdomainpictures.net/pictures/240000/nahled/grey-background-2.jpg",
    strMeal: "Default Title",
    strCategory: "Category",
    strArea: "Region"
}

const RecipeCarousel = ({recipes}) => {
    if (recipes === [] || recipes == null) {
        recipes = [defaultRecipe];
    }

    let buttons = [];
    for (let i = 0; i < recipes.length; i++){
        buttons.push(
            i
        );
    }

    return(
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {buttons.map(ind => <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={ind} className={ind === 0 ? "active" : ""}
                                            aria-current="true" aria-label="Slide 1"></button>)}
            </div>
            <div className="carousel-inner rounded">
                {
                    recipes.map(
                        recipe =>
                            <div className={`carousel-item ${recipes.indexOf(recipe) === 0 ? 'active' : ''}`}>
                                <img src={recipe.strMealThumb}
                                     className="d-block w-100 img-fluid" alt={recipe.strMeal}
                                     style={{"width": "800px", "height": "600px", "objectFit": "cover"}}/>
                                <div className="carousel-caption d-none d-md-block">
                                    <Link to={`/details/${recipe.idMeal}`} style={{ textDecoration: 'none' }} className="text-white">
                                        <h5>{recipe.strMeal}</h5>
                                        <p>{recipe.strArea} {recipe.strCategory} dish with {getIngredients(recipe).length} ingredients.</p>
                                    </Link>
                                </div>
                            </div>
                    )
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};
export default RecipeCarousel;
