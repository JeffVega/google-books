import React, { Component } from 'react'
import {connect} from 'react-redux';
import { getBooks } from '../../actions/book_action';

 class BookSearch extends Component {
    constructor(){
        super();
       this.state ={
            bookSearch:""
        }
    }
    handleBookSearch(event){
       this.setState({
        bookSearch:event.target.value
       })
    }
    submitForm(event){
        event.preventDefault();
        this.props.dispatch(getBooks(
            this.state.bookSearch
        ))
        event.target.books.value =""
    }
  render() {
    return (
      <div>
        <form 
        className="form"
        onSubmit={this.submitForm.bind(this)}
        >
            <input 
            onChange={this.handleBookSearch.bind(this)}
            className="form__input" 
            name="books"
            type="text" 
            placeholder="book"
            />
            <button className="form__button" type='submit'>
                Search
            </button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
    
    return {
        book:state.book
    }
}

export default connect(mapStateToProps)(BookSearch)
