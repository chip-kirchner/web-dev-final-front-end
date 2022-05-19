import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE;
const api = axios.create({withCredentials:  true});

export const getUsers = async () => {
    const response = await api.post(`${API_URL}/users`);
    return response.data;
}

export const deleteUser = async (user) => {
    const response = await api.delete(`${API_URL}/users/${user._id}`);
    return response.status;
}