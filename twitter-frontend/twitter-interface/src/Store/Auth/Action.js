import axios from 'axios';
import { api, BASE_API_URL } from '../../config/api';
import {
    FIND_USER_BY_ID_FAILURE,
    FIND_USER_BY_ID_SUCCESS,
    FOLLOW_USER_FAILURE,
    FOLLOW_USER_SUCCESS,
    GET_USER_PROFILE_FAILURE,
    GET_USER_PROFILE_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGOUT,
    REGISTER_USER_FAILURE,
    REGISTER_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    UPDATE_USER_SUCCESS
} from './ActionType';

export const loginUser = (loginData) => async (dispatch) => {
    try {
        const { data } = await axios.post(`${BASE_API_URL}/auth/signin`, loginData);

        console.log("login data", data);

        if (data.jwt) {
            localStorage.setItem('jwt', data.jwt);
        }

        dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
    } catch (error) {
        console.error("Login error", error);
        dispatch({ type: LOGIN_USER_FAILURE, payload: error.response?.data?.message || error.message });
    }
};

export const registerUser = (registerData) => async (dispatch) => {
    try {
        const { data } = await axios.post(`${BASE_API_URL}/auth/signup`, registerData);

        console.log("register data", data);

        if (data.jwt) {
            localStorage.setItem('jwt', data.jwt);
        }

        dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    } catch (error) {
        console.error("Registration error", error);
        dispatch({ type: REGISTER_USER_FAILURE, payload: error.response?.data?.message || error.message });
    }
};

export const getUserProfile = () => async (dispatch) => {
    const jwt = localStorage.getItem('jwt');

    if (!jwt) {
        return dispatch({ type: GET_USER_PROFILE_FAILURE, payload: "JWT not found. Please login." });
    }

    try {
        const { data } = await axios.get(`${BASE_API_URL}/api/users/profile`, {
            headers: {
                "Authorization": `Bearer ${jwt}`,
            },
        });

        dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: data });
    } catch (error) {
        console.error("Profile fetch error", error);
        dispatch({ type: GET_USER_PROFILE_FAILURE, payload: error.response?.data?.message || error.message });
    }
};


export const findUserById = (userId) => async (dispatch) => {
    const jwt = localStorage.getItem('jwt');

    try {
        const { data } = await api.get(`/api/users/${userId}`);
        dispatch({ type: FIND_USER_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        console.error("Profile fetch error", error);
        dispatch({ type: FIND_USER_BY_ID_FAILURE, payload: error.response?.data?.message || error.message });
    }
};

export const updateUserProfile = (reqData) => async (dispatch) => {

    try {
        const { data } = await api.put(`/api/users/update`, reqData);
        dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
    } catch (error) {
        console.error("Profile fetch error", error);
        dispatch({ type: UPDATE_USER_FAILURE, payload: error.response?.data?.message || error.message });
    }
};


export const followUserAction = (userId) => async (dispatch) => {

    try {
        const { data } = await api.put(`/api/users/${userId}/follow`);
        dispatch({ type: FOLLOW_USER_SUCCESS, payload: data });
    } catch (error) {
        console.error("Profile fetch error", error);
        dispatch({ type: FOLLOW_USER_FAILURE, payload: error.response?.data?.message || error.message });
    }
};


export const logout = () => async (dispatch) => {

    localStorage.removeItem("jwt")

    dispatch({ type: LOGOUT, payload: null })

};
