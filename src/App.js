import AllMovies from './pages/allMovies';
import SingleMovie from './pages/singleMovie';
import Form from './pages/Form';
// import Movie from './components/movie';
import './App.css';

//Import React and hooks
import React, { useState, useEffect } from 'react';

import { Route, Switch, Link } from "react-router-dom";


const App = (props) => {
  const h1 = {
    textAlign: "center",
    margin: "10px",
    color: "black",
  }

  const button ={
    backgroundColor: "#64a764",
    display: "block",
    margin: "auto"
  }


  //API URL
  const url = "https://movieapimp.herokuapp.com/movies/";

  //state to hold the list of posts
  const [movies, setMovies] = useState([]);

// FUNCTIONS
const getMovies = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setMovies(data);
}

const addMovies = async (newMovie) => {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMovie),
  })
  getMovies();
}

const nullMovie = {
  subject: "",
  details: ""
}
const [targetMovies, setTargetMovies] = useState(nullMovie)

const getTargetMovies = async (movie) => {
 setTargetMovies(movie);
 props.history.push("/edit");
}

const updateMovies = async (movie) => {
  const response = await fetch(url + movie.id, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(movie)
  })
  getMovies()
}

const deleteMovies = async (movie) => {
  const response = await fetch(url + movie.id + "/", {
    method: "delete",
  })
  getMovies();
  props.history.push("/");
}

//useEFFECT
useEffect(() => {
  getMovies();
}, []);

  return (
    <div className="App">
     <h1 style={h1}>My Movie List</h1>
     <Link to="/new"><button style={button}>add a movie</button></Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllMovies {...routerProps} 
          movies={movies} />}
        />
        <Route
          path="/movie/:id"
          render={(routerProps) => (
            <SingleMovie {...routerProps} movies={movies} 
            edit={getTargetMovies} 
            deleteMovies={deleteMovies}/>
          )}
        />
       <Route
        path="/new"
        render={(routerProps) => (
          <Form
            {...routerProps}
            initialMovie={nullMovie}
            handleSubmit={addMovies}
            buttonLabel="add movie"
          />
          )}
        />
        <Route
          path="/edit"
          render={(routerProps) => (<Form 
            {...routerProps} 
            initialMovie={targetMovies}
            handleSubmit={updateMovies}
            buttonLabel="edit movie"
          />
          )}
          />
          <Route
            path="/movie/:id"
            render={(routerProps) => (
          <SingleMovie
            {...routerProps}
            movies={movies}
            edit={getTargetMovies}
            deleteMovies={deleteMovies}
    />
            )}
/>
      </Switch>
    </div>
    
  );
}

export default App;