import axios from "axios";

const API_URL = "http://localhost:4000/api";
const api = axios.create({withCredentials:  true});

export const signup = async (email, password) => {
    const response = await api.post(`${API_URL}/signup`, {email, password});
    return response.data;
}

export const login = async (email, password) => {
    const response = await api.post(`${API_URL}/login`, {email, password});
    return response.data;
}

export const profile = async () => {
    const response = await api.post(`${API_URL}/profile`);
    return response.data;
}

export const logout = async() => {
    const response = await api.post(`${API_URL}/logout`);
    return response.data;
}

export const updateProfile = async (profile) => {
    const response = await api.put(`${API_URL}/profile/update`, {profile});
    return response.data;
}

export const adoptPlan = async (plan) => {
    const response = await api.put(`${API_URL}/adopt`, {plan});
    return response;
}

