import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import thunk from 'redux-thunk';
import { bookReducer } from './reducers/books_reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(combineReducers({
    bookStore:bookReducer
}), 
composeEnhancers(applyMiddleware(thunk)))
export default store