import { GOOGLE_API, KEY } from '../config';



export const GET_BOOKS_REQUEST = "GET_BOOKS_REQUEST";
export const getBooksRequest = () =>({
    type:"GET_BOOKS_REQUEST"
})

export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const getBooksSucess = (book) => ({
    type:"GET_BOOKS_SUCCESS",
    book:book
})
export const GET_BOOKS_ERROR = "GET_BOOKS_ERROR";
export const getBooksError =(error) => dispatch =>({
    type:"GET_BOOKS_ERROR",
    error
})

export const getBooks =(search) => (dispatch,getState)=>{
    console.log(search,'this is our search input')
    dispatch(getBooksRequest());
    fetch(`${GOOGLE_API}q=${search}&prettyPrint=true&maxResults=5&printType=books&key=${KEY}`,{
        method:'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then(res =>{
        
       return res.json()
    })
    .then(data =>{ 
        data = data.items.map(x => x.volumeInfo) 
        dispatch(getBooksSucess(data))})
    .catch(err => dispatch(getBooksError(err)))
}