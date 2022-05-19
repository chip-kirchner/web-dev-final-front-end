import axios from 'axios';
import {API_URL} from "./auth-service";
const api = axios.create({withCredentials:  true});


export const findAllPosts = async () => {
    const response = await api.get(`${API_URL}/posts`);
    return response.data;
}

export const createPost = async (post) => {
    try {
        const response = await api.post(`${API_URL}/posts`, {post});
        return response.data;
    } catch (e) {
        return null;
    }
}

export const deletePost = async (post) => {
    try {
        const response = await api.delete(`${API_URL}/posts`, {post});
        return response.status;
    } catch (e) {
        return null;
    }
}

export const likePost = async (post) => {
    try {
        const response = await api.put(`${API_URL}/posts/like`, {post});
        return response.status;
    } catch (e) {
        return null;
    }
}

export const unlikePost = async (post) => {
    try {
        const response = await api.put(`${API_URL}/posts/unlike`, {post});
        return response.status;
    } catch (e) {
        return null;
    }
}