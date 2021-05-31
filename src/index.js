import {fetchWithTimeout} from './services';


const movies = require('./data/movies.json');

export function fetchMovies() {
  const resolveFunction = () => movies;
  return fetchWithTimeout(1000).then(resolveFunction);
};

const moviePromise = fetchMovies();

moviePromise.then(results => {
    console.log(results);
});

// const movies = require('./data/movies.json');

// export const fetchMovies = () => {
//     const resolveFunction = () => movies;
//     fetchWithTimeout(1000).then((resolve) => resolve(resolveFunction));
// };

// const moviePromise = fetchMovies().then((results => console.log(results)));