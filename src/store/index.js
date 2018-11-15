import rootReducer from './reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

export default store;