import axios from 'axios';
const api = axios.create({withCredentials:  true});

const API_MEAL = 'http://localhost:4000';

export const findAllPosts = async () => {
    const response = await api.get(`${API_MEAL}/api/posts`);
    return response.data;
}

export const createPost = async (post) => {
    try {
        const response = await api.post(`${API_MEAL}/api/posts`, {post});
        return response.data;
    } catch (e) {
        //empty
    }
}

export const deletePost = async (post) => {
    try {
        const response = await api.delete(`${API_MEAL}/api/posts`, {post});
        return response.status;
    } catch (e) {
        //empty
    }
}

export const likePost = async (post) => {
    try {
        const response = await api.put(`${API_MEAL}/api/posts/like`, {post});
        return response.status;
    } catch (e) {
        //Empty
    }
}

export const unlikePost = async (post) => {
    try {
        const response = await api.put(`${API_MEAL}/api/posts/unlike`, {post});
        return response.status;
    } catch (e) {
        //Empty
    }
}