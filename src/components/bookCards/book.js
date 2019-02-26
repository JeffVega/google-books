import React, { Component } from 'react'
import {connect} from 'react-redux';
import { getBooks } from '../../actions/book_action';

class Book extends Component {
    componentWillUnmount(){
        this.props.dispatch(
            getBooks()
        )
    }
  render() {
      console.log(this.props.book.books,'this is our book props')
     
    return (
      <div className="bookPage">
         {
             this.props.book.books.map((data, index) => (
                     
                        <div key={index} className="books">
                        <img className="books__img" src={data.imageLinks.smallThumbnail} alt={data.title}/>
                            <p className="books__title">{data.title}</p>
                            <p className="books__authors">{data.authors.map(x => x)}</p>
                            <p className="books__publisher">{data.publisher}</p>
                            <a className="books__infoLinks"href={data.infoLink}>{data.title}</a>                        
                        </div>
                    ))}
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
    console.log(state.bookStore,'this is our data 34343')
    return {
        book:state.bookStore

    }
}
export default connect(mapStateToProps)(Book)