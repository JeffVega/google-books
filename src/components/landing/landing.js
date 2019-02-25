import React, { Component } from 'react'
import Search from '../search-bar/search';

export default class Landing extends Component {
  render() {
    return (
      <div>
          <div class="landing">
            <header class="landHeader">
                <h1 class="landHeader__title"> Book Finder</h1>
            </header>
               <Search/>
        </div>
      </div>
    )
  }
}
