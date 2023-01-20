import React, { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./moviecard";
// f1a6b203

const API_URL = "https://www.omdbapi.com?apikey=f1a6b203";

const movie1 = {
    "Title": "",
    "Year": "",
    "imdbID": "",
    "Type": "",
    "Poster": "",
    }
const App = () => {

    const [movies, setMovies] = useState([]);
    const [SearchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovies(movies)
    }, ['Sarch for a film.']);

    return (
    <div className="app">
        <h1>Reactfilm</h1>

        <div className="search">
            <input
            placeholder="Search for a film" value={SearchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/>
            <img
                src={SearchIcon} alt="search-button"
                onClick={() => searchMovies(SearchTerm)}/>
        </div>

        {movies?.length > 0 ?
                (<div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
                </div>
                ) : (<div className="empty">
                        <h2>No movies found.</h2>
                </div>)
        }

    </div>
    );
}

export default App;