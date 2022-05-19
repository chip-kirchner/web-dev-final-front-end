import axios from 'axios';
import {API_URL} from "./auth-service";
const api = axios.create({withCredentials:  true});

export const findAllPlans = async () => {
    const response = await api.get(`${API_URL}/plans`);
    return response.data;
}

export const findOnePlan = async (planId) => {
    const response = await api.get(`${API_URL}/plans/${planId}`);
    return response.data;
}

export const createPlan = async (plan) => {
    const response = await api.post(`${API_URL}/plans`, {plan});
    return response.data;
}

export const deletePlan = async (plan) => {
    const response = await api.delete(`${API_URL}/plans/`, {plan});
    return response.status;
}

export const publishPlan = async (plan) => {
    const response = await api.put(`${API_URL}/plans/publish`, {plan});
    return response.status;
}