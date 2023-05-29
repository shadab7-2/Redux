import { useDispatch } from "react-redux";
import React from "react";
import { useSelector } from "react-redux";
import { removeFavorite } from "./movieSlice";
import './FavoritesPage.css'

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.movies.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (movieID) => {
    dispatch(removeFavorite(movieID));
  };

  return (
    <div className="container">
      <h1>Favorites Page</h1>
      <div className="favorite-movie">
           {favorites.length === 0 ? (
             <p>No favorite movies added yet.</p>
             ) : (
                <div className="movie-container">
                  {/* <h2>Favorite Movies</h2> */}
                 {favorites.map((fav) => (
                      <div key={fav.imdbID} className="favorite-movie">
                          <div className="movie-details">
                             <h3>{fav.Title}</h3>
                              <p>Year : {fav.Year}</p>
                              <img className="img-style" src={fav.Poster} alt={fav.Title} />
                          </div>
              

                          <button className="button" onClick={() => handleRemoveFavorite(fav.imdbID)}>Remove from Favorites</button>
                      </div>
                   ))}
                </div>
           )}
      </div>
      
    </div>
  );
};

export default FavoritesPage;
