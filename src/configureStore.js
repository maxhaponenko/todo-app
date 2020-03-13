import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'
import rootReducer from 'redux/rootReducer.js';

export const store = createStore(
    rootReducer, undefined, composeWithDevTools(applyMiddleware(thunkMiddleware)))