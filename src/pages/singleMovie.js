import React from "react";
import { Link } from "react-router-dom";

const SingleMovie = ({movies, match, edit, deleteMovies}) => {
    const id = parseInt(match.params.id); //get the id from url param
    console.log(id)
    console.log(movies)
    const movie = movies.find((movie) => movie.id === id);
    console.log(movie)
  
    ////////////////////
    // Styles
    ///////////////////
    // const div = {
    //   textAlign: "center",
    //   border: "3px solid green",
    //   width: "80%",
    //   margin: "30px auto",
    //   background: "#4777",
    //   color: "#e87ac1"
    // };
  
    // const button = {
    //    margin: "10px",  
    // }
  
    return (
      <div 
    //   style={div}
      >
        <h1>{movie.title}</h1>
        <h2>{movie.wheretowatch}</h2>
        <button  onClick={(event) => edit(movie)}>Edit</button>
        <button  onClick={(event) => deleteMovies(movie)}>Delete</button>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    );
}

export default SingleMovie