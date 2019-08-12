import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e10b44f1bd91b1dff56972ef4a195a6f8b56e1bde532ba50ef71fd9e7c14de73'
    }
})