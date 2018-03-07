import { createStore, combineReducers, applyMiddleware } from 'redux';

import { usersReducer } from '../reducers/usersReducer';
import { commentsReducer } from '../reducers/commentsReducer';

import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

//const middleware = applyMiddleware(logger());
//const middleware = applyMiddleware(promise());
const middleware = applyMiddleware(promise(), logger());

const reducers = combineReducers({
    users: usersReducer,
    comments: commentsReducer
});

const store = createStore(reducers, middleware);

export default store;