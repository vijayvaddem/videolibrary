import React from "react";
import { Link } from "react-router-dom";
const MovieForm = ({ match }) => {
  return (
    <div>
      <h1>Movie Form {match.params.id}</h1>
      <Link to="/movies">Back to movies</Link>
    </div>
  );
};

export default MovieForm;
