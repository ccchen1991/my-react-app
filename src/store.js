import { createStore, combineReducers, applyMiddleware } from 'redux';
import messageReducer from './reducers/messageReducer';
import counterReducer from './reducers/counterReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    messageReducer,
    counterReducer
});

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;
