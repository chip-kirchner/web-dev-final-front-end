import React, {useEffect, useRef, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useProfile} from "../../contexts/profile-context";
import * as ourMealService from "../services/our-meal-db-service";
import * as mealService from "../services/recipe-service";
import * as action from "../actions/post-actions";
import RecipeWidget from "./recipe-widget";
import {useDispatch} from "react-redux";

const WritePost = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [postRecipe, setPostRecipe] = useState();
    const {profile} = useProfile();
    const dispatch = useDispatch();
    const textRef = useRef();
    const recipeID = searchParams.get('i');

    const getInfo = async () => {
        if(recipeID){
            let recipe = await ourMealService.findRecipeById(recipeID);
            if(recipe._id){
                setPostRecipe(recipe);
            } else {
                recipe = await mealService.findMealById(recipeID);
                setPostRecipe(recipe);
            }
        }
    }

    const handlePost = async () => {
        //if our recipe is actually a valid object
        if(postRecipe.idMeal) {
            const newPost = {text: textRef.current.value, recipe: postRecipe};
            await action.createPost(newPost, dispatch);
        }
    }

    useEffect(() => {
        getInfo();
    }, [])

    if (recipeID === null) {
        return null;
    }

    return (
        <div className="">
            <div className="row m-2 border-bottom rounded">
                <div className="position-relative col-12">
                    <div className="">
                        @<strong>{profile.name}</strong>
                    </div>
                    <div className="d-flex">
                        <textarea placeholder="What about this recipe?" ref={textRef}
                                  className="form-control flex-grow-1 me-2"></textarea>
                        <button onClick={handlePost}
                                className="btn btn-primary rounded-pill ms-2 align-self-center">Post</button>
                    </div>
                    <div className="mt-2">
                        {postRecipe ? <RecipeWidget recipe={postRecipe}/> : ""}
                    </div>

                </div>
            </div>
        </div>

    );
};

export default WritePost;