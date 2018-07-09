import { createStore, combineReducers, applyMiddleware } from 'redux';
import messageReducer from './reducers/messageReducer';
import counterReducer from './reducers/counterReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    messageReducer,
    counterReducer,
    userReducer
});

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;
