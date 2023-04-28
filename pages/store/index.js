import {createStore, compose} from 'redux'

import { combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import MovieReducer from './movies';

const rootReducer = combineReducers({
    movies: MovieReducer
})
let enhancer

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
  } else {
    const logger = require('redux-logger').default;
    const composeEnhancers = compose
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
  }
const configureStore = preLoadedState => {
    return createStore(rootReducer, preLoadedState, enhancer)
}

export default configureStore;