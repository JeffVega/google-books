import React, { Component } from 'react'

export default class Book extends Component {
  render() {
    return (
      <div class="book">
        <h1 class="book__title">
        The Great Gastby
        </h1>
        <img class="book__img" src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjYmpew0tfgAhUTBHwKHUdlAF0QjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FThe_Great_Gatsby&psig=AOvVaw2UKqWqGNqfUMx75c8sl4z3&ust=1551210180892765" alt="img-of-book"/>
        <p class="author">
        F-Scott-Fitzgerald
        </p>
        <p class="book__pub">
        Charles Scribner's Sons
        </p>
        <a class="book__link" herf="https://books.google.com/books/about/The_Great_Gatsby.html?id=iXn5U2IzVH0C" >
            The Great Gastby
        </a>
      </div>
    )
  }
}
