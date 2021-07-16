import React from "react";
import Movie from "../components/movie";

const AllMovies = (props) => {
    return props.movies.map((movie) => <Movie movie={movie} key={movie.id} />);
}

export default AllMovies