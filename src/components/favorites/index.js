import * as service from "../services/our-meal-db-service";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Favorites = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const [favorites, setFavorites] = useState([]);

    const getFavorites = async () => {
        if (profile) {
            const favs = await service.getFavorites();
            setFavorites(favs);
        }
    }

    useEffect(() => {
        getFavorites();
    }, [dispatch])

    return(
        <>
            <p className="lead">Take a look at your favorites below!</p>
            <ul className="list-group">
                {favorites.map(meal =>
                    <li className="list-group-item border-0 d-flex align-items-center justify-content-start" key={meal.idMeal}>
                        <img className="rounded border shadow me-3 mb-2 mt-2" alt={meal.strMeal} src={meal.strMealThumb} height={80}/>
                        <div className="fs-5 flex-grow-1">
                            <Link to={`/details/${meal.idMeal}`} style={{ textDecoration: 'none' }} className="text-black">
                                <strong>{meal.strMeal}</strong>
                            </Link>
                            {meal.strSource ?
                                <div className="fs-6">
                                    <a href={meal.strSource}
                                       style={{ textDecoration: 'none' }}
                                       className="text-black">
                                        <i className="fas fa-link me-3"></i>
                                        Source
                                    </a>
                                </div> :
                                <div className="fs-6 text-muted">
                                    <i className="fas fa-link me-3"></i>
                                    Source
                                </div>
                            }
                        </div>
                        <button className="btn btn-danger rounded-pill ms-3">Remove</button>
                    </li>
                )}
            </ul>
        </>
    );
}

export default Favorites;