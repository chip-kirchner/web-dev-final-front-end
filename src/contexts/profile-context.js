import React, {useContext, useState} from "react";
import * as service from "../components/services/auth-service";
import * as mealService from "../components/services/our-meal-db-service";

const ProfileContext = React.createContext();

export const ProfileProvider = ({children}) => {
    const [profile, setProfile] = useState();

    const login = async (email, password) => {
        try {
            const p = await service.login(email, password);
            setProfile(p);
        } catch (e) {
            throw e;
        }
    }

    const checkLoggedIn = async () => {
        try {
            const p = await service.profile();
            setProfile(p);
            return p;
        } catch (e) {
            throw e;
        }
    }

    const signup = async (email, password) => {
        try {
            const newUser = await service.signup(email, password);
            setProfile(newUser);
        } catch (e) {
            throw e;
        }
    }

    const updateProfile = async (profile) => {
        try {
            const newProfile = await service.updateProfile(profile);
            setProfile(newProfile);
        } catch(e) {
            throw e;
        }
    }

    const likeRecipe = async (recipe) => {
        if (profile) {
            try {
                const response = await mealService.likeRecipe(recipe);
                const newProfile = await service.profile();
                setProfile(newProfile);
                return;
            } catch (e) {
                throw e;
            }
        }
    }

    const logout = async () => {
        try {
            await service.logout();
            setProfile(null);
        } catch (e) {
            //Empty
        }
    }

    const value = {profile, signup, checkLoggedIn, login, updateProfile, likeRecipe, logout};

    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    );
}

export const useProfile = () => {
    return useContext(ProfileContext);
}