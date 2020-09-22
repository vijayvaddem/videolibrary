import http from "./httpService";

export function getMovies() {
  return http.get("/movies");
}

export function getMovie(id) {
  return http.get("/movies/" + id);
}

export function saveMovie(movie) {
  /* let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;


  
  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  } */

  //return movieInDb;
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put("/movies/" + movie._id, body);
  }
  return http.post("/movies", movie);
}

// export function deleteMovie(id) {
//   let movieInDb = movies.find((m) => m._id === id);
//   movies.splice(movies.indexOf(movieInDb), 1);
//   return movieInDb;
// }

export function deleteMovie(id) {
  return http.delete("/movies/" + id);
}
