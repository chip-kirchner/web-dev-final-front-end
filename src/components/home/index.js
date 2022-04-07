import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findMealById} from "../actions/meal-actions";


const Home = () => {
    const meal = useSelector(state => state);
    const dispatch = useDispatch();
    const ID = 52920;
    useEffect( () => {findMealById(dispatch, ID)}, [dispatch]);

    console.log(meal['strInstructions']);
    return(
        <>
            {JSON.stringify(meal)}
        </>
    );
};

export default Home;