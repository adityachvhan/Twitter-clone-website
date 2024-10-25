// User Login Action Types
export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";    // Triggered when a user login request is initiated
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";    // Dispatched when user login is successful
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";    // Dispatched when user login fails

// User Registration Action Types
export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";  // Triggered when a user registration request is initiated
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";  // Dispatched when user registration is successful
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";  // Dispatched when user registration fails

// Get User Profile Action Types
export const GET_USER_PROFILE_REQUEST = "GET_USER_PROFILE_REQUEST";  // Triggered when requesting user profile data
export const GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_SUCCESS";  // Dispatched when user profile is successfully fetched
export const GET_USER_PROFILE_FAILURE = "GET_USER_PROFILE_FAILURE";  // Dispatched when fetching user profile data fails

// User Update Action Types
export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";  // Triggered when a request to update user data is initiated
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";  // Dispatched when user data update is successful
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";  // Dispatched when user data update fails

// User Follow Action Types
export const FOLLOW_USER_REQUEST = "FOLLOW_USER_REQUEST";  // Triggered when a request to follow another user is initiated
export const FOLLOW_USER_SUCCESS = "FOLLOW_USER_SUCCESS";  // Dispatched when following a user succeeds
export const FOLLOW_USER_FAILURE = "FOLLOW_USER_FAILURE";  // Dispatched when following a user fails

// Find User by ID Action Types
export const FIND_USER_BY_ID_REQUEST = "FIND_USER_BY_ID_REQUEST";  // Triggered when requesting user data by ID
export const FIND_USER_BY_ID_SUCCESS = "FIND_USER_BY_ID_SUCCESS";  // Dispatched when user data is successfully fetched by ID
export const FIND_USER_BY_ID_FAILURE = "FIND_USER_BY_ID_FAILURE";  // Dispatched when fetching user data by ID fails

// User Logout Action Type
export const LOGOUT = "LOGOUT";  // Dispatched when the user logs out
