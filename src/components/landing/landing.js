import React, { Component } from 'react'
import Search from '../search-bar/search';
import Book from '../bookCards/book';

export default class Landing extends Component {
  render() {
    return (
      <div>
          
            <header className="landHeader">
                <h1 className="landHeader__title"> Book Finder</h1>
                <Search className="landHeader__search"/>
            </header>
               
   
        <Book/>
      </div>
    )
  }
}
