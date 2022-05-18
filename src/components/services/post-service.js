import axios from 'axios';
const api = axios.create({withCredentials:  true});

const API_MEAL = process.env.API_URL || 'http://localhost:4000/api';

export const findAllPosts = async () => {
    const response = await api.get(`${API_MEAL}/posts`);
    return response.data;
}

export const createPost = async (post) => {
    try {
        const response = await api.post(`${API_MEAL}/posts`, {post});
        return response.data;
    } catch (e) {
        return null;
    }
}

export const deletePost = async (post) => {
    try {
        const response = await api.delete(`${API_MEAL}/posts`, {post});
        return response.status;
    } catch (e) {
        return null;
    }
}

export const likePost = async (post) => {
    try {
        const response = await api.put(`${API_MEAL}/posts/like`, {post});
        return response.status;
    } catch (e) {
        return null;
    }
}

export const unlikePost = async (post) => {
    try {
        const response = await api.put(`${API_MEAL}/posts/unlike`, {post});
        return response.status;
    } catch (e) {
        return null;
    }
}