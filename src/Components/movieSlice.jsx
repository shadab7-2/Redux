import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllMovies = createAsyncThunk(
  "movie/fetchAllMovies",
  async () => {
    const res = await fetch("https://www.omdbapi.com/?s=action&apikey=cf106f97&page=1");
    const moviesData = await res.json();
    return moviesData.Search;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    favorites: []
  },
  reducers: {
    addFavorite: (state, action) => {
      const movie = action.payload;
      console.log(movie);
      if (!state.favorites.some((fav) => fav.imdbID === movie.imdbID)) {
        state.favorites.push(movie);
      }
    },
    removeFavorite: (state, action) => {
      const movieID = action.payload;
      state.favorites = state.favorites.filter((fav) => fav.imdbID !== movieID);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  }
});

export const { addFavorite, removeFavorite } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
