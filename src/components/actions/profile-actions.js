import React from "react";
import * as service from "../services/auth-service";
import * as mealService from "../services/our-meal-db-service";

export const SET_PROFILE = "SET_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const LOGOUT = "LOGOUT";
export const LIKE = "LIKE";
export const ADOPT_PLAN = "ADOPT_PLAN";

export const login = async (email, password, dispatch) => {
    try {
        const profile = await service.login(email, password);
        dispatch({
            type: SET_PROFILE,
            profile
        });
    } catch (e) {
        throw e;
    }
}

export const checkLoggedIn = async (dispatch) => {
    try {
        const profile = await service.profile();
        dispatch({
            type: SET_PROFILE,
            profile
        });
        return profile;
    } catch (e) {
        const profile = null;
        dispatch({
            type: SET_PROFILE,
            profile
        });
        return null;
    }
}

export const signup = async (email, password, dispatch) => {
    try {
        const profile = await service.signup(email, password);
        dispatch({
            type: SET_PROFILE,
            profile
        })
    } catch (e) {
        throw e;
    }
}

export const updateProfile = async (profile, dispatch) => {
    try {
        const newProfile = await service.updateProfile(profile);
        dispatch({
            type: UPDATE_PROFILE,
            newProfile
        });
    } catch(e) {
        throw e;
    }
}

export const likeRecipe = async (recipe, dispatch) => {
    try {
        const response = await mealService.likeRecipe(recipe);
        dispatch({
            type: LIKE,
            recipe
        });
        return response;
    } catch (e) {
        throw e;
    }
}

export const logout = async (dispatch) => {
    try {
        await service.logout();
        dispatch({
            type: LOGOUT
        })
    } catch (e) {
        //Empty
    }
}

export const adoptPlan = async (plan, dispatch) => {
    try {
        const response = await service.adoptPlan(plan);
        dispatch({
            type: ADOPT_PLAN,
            plan
        })
        return response;
    } catch (e) {
        //
    }
    return;
}