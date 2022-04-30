import React from "react";
import * as service from "../services/auth-service";
import * as mealService from "../services/our-meal-db-service";

export const SET_PROFILE = "SET_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const LOGOUT = "LOGOUT";
export const LIKE = "LIKE";
export const ADOPT_PLAN = "ADOPT_PLAN";
export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const UNLIKE = "UNLIKE";

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
        const newProfile = await service.adoptPlan(plan);
        dispatch({
            type: UPDATE_PROFILE,
            newProfile
        })
        return newProfile;
    } catch (e) {
        //
    }
    return;
}

export const addMealToPlan = async (day, recipe, oldPlan, dispatch) => {
    switch (day) {
        case "monday":
            await adoptPlan({...oldPlan, monday: recipe}, dispatch);
            return;
        case "tuesday":
            await adoptPlan({...oldPlan, tuesday: recipe}, dispatch);
            return;
        case "wednesday":
            await adoptPlan({...oldPlan, wednesday: recipe}, dispatch);
            return;
        case "thursday":
            await adoptPlan({...oldPlan, thursday: recipe}, dispatch);
            return;
        case "friday":
            await adoptPlan({...oldPlan, friday: recipe}, dispatch);
            return;
        case "saturday":
            await adoptPlan({...oldPlan, saturday: recipe}, dispatch);
            return;
        case "sunday":
            await adoptPlan({...oldPlan, sunday: recipe}, dispatch);
            return;
    }
}

export const follow = async (user, dispatch) => {
    try {
        await service.follow(user);
        dispatch({
            type: FOLLOW,
            user
        })
    } catch (e) {
        //
    }
};

export const unfollow = async (user, dispatch) => {
    try {
        await service.unfollow(user);
        dispatch({
            type: UNFOLLOW,
            user
        })
    } catch (e) {
        //
    }
};

export const unlike = async (recipe, dispatch) => {
    try{
        await service.unlikeRecipe(recipe);
        dispatch({
            type: UNLIKE,
            recipe
        })
    } catch (e) {}
}

