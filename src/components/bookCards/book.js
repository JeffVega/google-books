import React, { Component } from 'react'
import {connect} from 'react-redux';
import { getBooks } from '../../actions/book_action';

class Book extends Component {
    componentWillUnmount(){
        this.props.dispatch(
            getBooks()
        )
    }
    books(){
        if(this.props.book.books){
        return(
            
                this.props.book.books.map((data, index) => (
                        
                           <div key={index} className="books">
                           <img className="books__img" src={data.imageLinks.smallThumbnail} alt={data.title}/>
                               <div className="books__helper">
                                   <p className="books__title">{data.title}</p>
                                   <p className="books__authors">{data.authors.map(x => x)}</p>
                                   <p className="books__publisher">{data.publisher}</p>
                                   <a className="books__infoLinks"href={data.infoLink}>Learn More</a>                        
                               </div>
                           </div>
                       ))
        )}
    }
  render() {
    
     
    return (
      <div className="bookPage">
    {this.books()}
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
    
    return {
        book:state.bookStore

    }
}
export default connect(mapStateToProps)(Book)