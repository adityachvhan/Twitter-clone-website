import { api } from "../../config/api"
import { FIND_TWEET_BY_ID_FAILURE, FIND_TWEET_BY_ID_SUCCESS, GET_ALL_TWEETS_FAILURE, GET_ALL_TWEETS_REQUEST, GET_USERS_TWEET_FAILURE, GET_USERS_TWEET_SUCCESS, LIKE_TWEET_FAILURE, LIKE_TWEET_SUCCESS, REPLY_TWEET_FAILURE, REPLY_TWEET_REQUEST, REPLY_TWEET_SUCCESS, RETWEET_FAILURE, RETWEET_SUCCESS, TWEET_CREATE_FAILURE, TWEET_CREATE_SUCCESS, TWEET_DELETE_FAILURE, TWEET_DELETE_SUCCESS, USER_LIKE_TWEET_FAILURE, USER_LIKE_TWEET_SUCCESS } from "./ActionType";

export const getAllTweets = () => async (dispatch) => {

    try {

        const { data } = await api.get("/api/twits");

        console.log("All Tweets Data", data);

        dispatch({ type: GET_ALL_TWEETS_REQUEST, payload: data })

    } catch (error) {
        console.log("Error", error);
        dispatch({ type: GET_ALL_TWEETS_FAILURE, payload: error.message })
    }
}


export const getUsersTweet = (userId) => async (dispatch) => {

    try {

        const { data } = await api.get(`/api/twits/user/${userId}`);

        console.log("All Users Data", data);

        dispatch({ type: GET_USERS_TWEET_SUCCESS, payload: data })

    } catch (error) {
        console.log("Error", error);
        dispatch({ type: GET_USERS_TWEET_FAILURE, payload: error.message })
    }
}


export const findTwitsByLikeContaineUser = (userId) => async (dispatch) => {

    try {

        const { data } = await api.get(`/api/twits/user/${userId}/likes`);

        console.log("user likes tweets", data);

        dispatch({ type: USER_LIKE_TWEET_SUCCESS, payload: data })

    } catch (error) {
        console.log("Error", error);
        dispatch({ type: USER_LIKE_TWEET_FAILURE, payload: error.message })
    }
}


export const findTwitsById = (twitId) => async (dispatch) => {

    try {

        const { data } = await api.get(`/api/twits/${twitId}`);

        console.log("Find Tweets by id", data);

        dispatch({ type: FIND_TWEET_BY_ID_SUCCESS, payload: data })

    } catch (error) {
        console.log("Error", error);
        dispatch({ type: FIND_TWEET_BY_ID_FAILURE, payload: error.message })
    }
}


export const createTweet = (tweetData) => async (dispatch) => {

    try {

        const { data } = await api.post(`/api/twits/create`, tweetData);

        console.log("createTweet Data", data);

        dispatch({ type: TWEET_CREATE_SUCCESS, payload: data })

    } catch (error) {
        console.log("Error", error);
        dispatch({ type: TWEET_CREATE_FAILURE, payload: error.message })
    }
}


export const createTweetReply = (tweetData) => async (dispatch) => {

    try {

        const { data } = await api.post(`/api/twits/reply`, tweetData);

        console.log("createTweetReply Data", data);

        dispatch({ type: REPLY_TWEET_SUCCESS, payload: data })

    } catch (error) {
        console.log("Error", error);
        dispatch({ type: REPLY_TWEET_FAILURE, payload: error.message })
    }
}


export const createReTweet = (twitId) => async (dispatch) => {

    try {

        const { data } = await api.post(`/api/twits/${twitId}/retwit`);

        console.log("createReTweet Data", data);

        dispatch({ type: RETWEET_SUCCESS, payload: data })

    } catch (error) {
        console.log("Error", error);
        dispatch({ type: RETWEET_FAILURE, payload: error.message })
    }
}


export const likeTweet = (twitId) => async (dispatch) => {

    try {

        const { data } = await api.post(`/api/${twitId}/like`);

        console.log("likeTweet Data", data);

        dispatch({ type: LIKE_TWEET_SUCCESS, payload: data })

    } catch (error) {
        console.log("Error", error);
        dispatch({ type: LIKE_TWEET_FAILURE, payload: error.message })
    }
}


export const deleteTweet = (twitId) => async (dispatch) => {

    try {

        const { data } = await api.post(`/api/twit/${twitId}`);

        console.log("deleteTweet Data", data);

        dispatch({ type: TWEET_DELETE_SUCCESS, payload: data })

    } catch (error) {
        console.log("Error", error);
        dispatch({ type: TWEET_DELETE_FAILURE, payload: error.message })
    }
}
