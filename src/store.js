import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import thunk from 'redux-thunk';
import { bookReducer } from './reducers/books_reducer';

const composeEnchaner = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const store =createStore(combineReducers({
    books:bookReducer
}), 
composeEnchaner(applyMiddleware(thunk)))
export default store