import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { authreducer } from './Auth/Reducer';

const rootReducer = combineReducers({
    auth: authreducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));