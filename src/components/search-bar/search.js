import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div>
        <form class="form">
            <input class="form__input" type="text" placeholder="book"/>
            <button class="form__button">
                Search
            </button>
        </form>
      </div>
    )
  }
}
