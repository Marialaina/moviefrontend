import React from "react";
import { Link } from "react-router-dom"

const Movie = ({movie}) => {
    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%",
        background: "#4777",
        text: "black"
        }
    
        return (
            <div style={div}>
                <Link to={`/movie/${movie.id}`}>
                    <h1>{movie.movie}</h1>
                </Link>
                <h2>{movie.wheretowatch}</h2>
            </div>
        );
}

export default Movie;