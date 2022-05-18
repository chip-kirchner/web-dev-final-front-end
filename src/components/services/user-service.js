import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:4000/api";
const api = axios.create({withCredentials:  true});

export const getUsers = async () => {
    const response = await api.post(`${API_URL}/users`);
    return response.data;
}

export const deleteUser = async (user) => {
    const response = await api.delete(`${API_URL}/users/${user._id}`);
    return response.status;
}