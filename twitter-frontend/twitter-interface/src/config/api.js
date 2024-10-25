import axios from 'axios';

export const BASE_API_URL = "http://localhost:6565";

// Create an Axios instance with the base URL and default headers
export const api = axios.create({
    baseURL: BASE_API_URL,  // Corrected 'baseUrl' to 'baseURL'
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`,  // Authorization header for JWT
        "Content-Type": "application/json"  // Content type header
    }
});
