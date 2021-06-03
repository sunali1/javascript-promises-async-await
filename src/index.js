import {fetchWithTimeout, fetchBooks, fetchMovies} from './services';

export function getBooksAndMovies(){
  Promise.all([fetchBooks(), fetchMovies()])
  .then(([books, movies]) => ({
    books, 
    movies
  }))
  .catch(error => console.log("Error fecthing books and movies", error));
} 

const getBooksAndMoviesPromise = getBooksAndMovies();

getBooksAndMoviesPromise.then(results => {console.log('getBooksAndMoviesPromise', results)});

