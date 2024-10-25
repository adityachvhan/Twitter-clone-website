// Tweet Creation Action Types
export const TWEET_CREATE_REQUEST = "TWEET_CREATE_REQUEST";    // Triggered when tweet creation is requested
export const TWEET_CREATE_SUCCESS = "TWEET_CREATE_SUCCESS";    // Dispatched when tweet creation succeeds
export const TWEET_CREATE_FAILURE = "TWEET_CREATE_FAILURE";    // Dispatched when tweet creation fails

// Tweet Deletion Action Types
export const TWEET_DELETE_REQUEST = "TWEET_DELETE_REQUEST";    // Triggered when tweet deletion is requested
export const TWEET_DELETE_SUCCESS = "TWEET_DELETE_SUCCESS";    // Dispatched when tweet deletion succeeds
export const TWEET_DELETE_FAILURE = "TWEET_DELETE_FAILURE";    // Dispatched when tweet deletion fails

// Get All Tweets Action Types
export const GET_ALL_TWEETS_REQUEST = "GET_ALL_TWEETS_REQUEST";  // Triggered when fetching all tweets is requested
export const GET_ALL_TWEETS_SUCCESS = "GET_ALL_TWEETS_SUCCESS";  // Dispatched when all tweets are successfully fetched
export const GET_ALL_TWEETS_FAILURE = "GET_ALL_TWEETS_FAILURE";  // Dispatched when fetching all tweets fails

// Get User's Tweets Action Types
export const GET_USERS_TWEET_REQUEST = "GET_USERS_TWEET_REQUEST";  // Triggered when fetching a user's tweets is requested
export const GET_USERS_TWEET_SUCCESS = "GET_USERS_TWEET_SUCCESS";  // Dispatched when user's tweets are successfully fetched
export const GET_USERS_TWEET_FAILURE = "GET_USERS_TWEET_FAILURE";  // Dispatched when fetching user's tweets fails

// User Like Tweet Action Types
export const USER_LIKE_TWEET_REQUEST = "USER_LIKE_TWEET_REQUEST";  // Triggered when a user likes a tweet
export const USER_LIKE_TWEET_SUCCESS = "USER_LIKE_TWEET_SUCCESS";  // Dispatched when liking a tweet by the user succeeds
export const USER_LIKE_TWEET_FAILURE = "USER_LIKE_TWEET_FAILURE";  // Dispatched when liking a tweet by the user fails

// Like Tweet Action Types (General)
export const LIKE_TWEET_REQUEST = "LIKE_TWEET_REQUEST";    // Triggered when liking a tweet is requested
export const LIKE_TWEET_SUCCESS = "LIKE_TWEET_SUCCESS";    // Dispatched when liking a tweet succeeds
export const LIKE_TWEET_FAILURE = "LIKE_TWEET_FAILURE";    // Dispatched when liking a tweet fails

// Find Tweet by ID Action Types
export const FIND_TWEET_BY_ID_REQUEST = "FIND_TWEET_BY_ID_REQUEST";  // Triggered when finding a tweet by its ID is requested
export const FIND_TWEET_BY_ID_SUCCESS = "FIND_TWEET_BY_ID_SUCCESS";  // Dispatched when finding a tweet by its ID succeeds
export const FIND_TWEET_BY_ID_FAILURE = "FIND_TWEET_BY_ID_FAILURE";  // Dispatched when finding a tweet by its ID fails

// Reply to Tweet Action Types
export const REPLY_TWEET_REQUEST = "REPLY_TWEET_REQUEST";    // Triggered when replying to a tweet is requested
export const REPLY_TWEET_SUCCESS = "REPLY_TWEET_SUCCESS";    // Dispatched when replying to a tweet succeeds
export const REPLY_TWEET_FAILURE = "REPLY_TWEET_FAILURE";    // Dispatched when replying to a tweet fails


// Retweet Action Types
export const RETWEET_REQUEST = "RETWEET_REQUEST";    // Triggered when retweeting is requested
export const RETWEET_SUCCESS = "RETWEET_SUCCESS";    // Dispatched when retweeting succeeds
export const RETWEET_FAILURE = "RETWEET_FAILURE";    // Dispatched when retweeting fails
