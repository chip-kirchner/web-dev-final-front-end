import axios from 'axios';
const api = axios.create({withCredentials:  true});

const API_MEAL = process.env.API_URL || 'http://localhost:4000/api';

export const findAllPlans = async () => {
    const response = await api.get(`${API_MEAL}/plans`);
    return response.data;
}

export const findOnePlan = async (planId) => {
    const response = await api.get(`${API_MEAL}/plans/${planId}`);
    return response.data;
}

export const createPlan = async (plan) => {
    const response = await api.post(`${API_MEAL}/plans`, {plan});
    return response.data;
}

export const deletePlan = async (plan) => {
    const response = await api.delete(`${API_MEAL}/plans/`, {plan});
    return response.status;
}

export const publishPlan = async (plan) => {
    const response = await api.put(`${API_MEAL}/plans/publish`, {plan});
    return response.status;
}