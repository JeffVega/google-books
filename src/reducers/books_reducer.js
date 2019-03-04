import { 
    GET_BOOKS_REQUEST, 
    GET_BOOKS_SUCCESS, 
    GET_BOOKS_ERROR 
} from '../actions/book_action';

const initialState ={
    books:[],
    loading:false,
    error:null
}
export const bookReducer = (state = initialState, action) => {
   
    if(action.type === GET_BOOKS_REQUEST){
        return Object.assign({},state,{
            loading:true
        })
    }
    else if(action.type === GET_BOOKS_SUCCESS){
        return Object.assign({},state,{
            books:[...action.book],
            loading:false
        })
    }
    else if(action.type === GET_BOOKS_ERROR){
        return Object.assign({},state,{
            loading:false,
            error:action.error
        })
    }
    
    return state
}