import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies, addFavorite, removeFavorite } from "./movieSlice";
import './HomePage.css'
const HomePage = () => {
  const movies = useSelector((state) => state.movies.movies);
  const favorites = useSelector((state) => state.movies.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const handleAddFavorite = (movie) => {
    dispatch(addFavorite(movie));
  };

  const handleRemoveFavorite = (movieID) => {
    dispatch(removeFavorite(movieID));
  };

  return (
 <div className="container">
    <h1>Home Page</h1>
    <div className="movie-container"> 
      
      <h2>All Movies</h2>
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-detailes">
            <div className="movie-card" >
            <h4>{movie.Title}</h4>
             <p>{movie.Year}</p>
             <img src={movie.Poster} alt={movie.Title} />
            </div>
             
         
          <button className="button" onClick={() => handleAddFavorite(movie)}>Add to Favorites</button>
        </div>
      ))}
    </div>

    <div className="favorite-containe">
       <h2>Favorites</h2>
        {favorites.map((fav) => (
        <div key={fav.imdbID} className="fav-movie-detailes">
           <img 
           className="poster"
            src={fav.Poster}
            alt={fav.Title} 
            />
          <h3>{fav.year}</h3>
          <button onClick={() => handleRemoveFavorite(fav.imdbID)}>Remove from Favorites</button>
            </div>
      ))}
   </div>
  </div>
  );
};

export default HomePage;
