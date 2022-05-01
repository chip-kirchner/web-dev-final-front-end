import axios from 'axios';
const api = axios.create({withCredentials:  true});

const API_MEAL = 'http://localhost:4000';

export const findAllPlans = async () => {
    const response = await api.get(`${API_MEAL}/api/plans`);
    return response.data;
}

export const findOnePlan = async (planId) => {
    const response = await api.get(`${API_MEAL}/api/plans/${planId}`);
    return response.data;
}

export const createPlan = async (plan) => {
    const response = await api.post(`${API_MEAL}/api/plans`, {plan});
    return response.data;
}

export const deletePlan = async (plan) => {
    const response = await api.delete(`${API_MEAL}/api/plans/`, {plan});
    return response.status;
}

export const publishPlan = async (plan) => {
    const response = await api.put(`${API_MEAL}/api/plans/publish`, {plan});
    return response.status;
}