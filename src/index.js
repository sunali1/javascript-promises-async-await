import {fetchBooks, fetchMovies} from './services';

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

function getBooksOrMovies(){
  Promise.race([fetchBooks(), fetchMovies()])
  .then(results => results)
  .catch(error => console.log("Error waiting for the promise race", error));
}

const getBooksOrMoviesPromise = getBooksOrMovies();
getBooksOrMoviesPromise.then(results => {
  console.log('getBooksOrMoviesPromise', results)
});