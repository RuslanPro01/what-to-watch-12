import {Films} from '../types/films';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, changeLoadStatus, loadFilms} from './action';
import {ALL_GENRES} from '../common-const';

type InitialState = {
  genre: string;
  allFilms: Films;
  isLoaded: boolean;
  genres: string[];
}


const initialState: InitialState = {
  genre: ALL_GENRES,
  allFilms: [],
  isLoaded: true,
  genres: [ALL_GENRES],
};

function generateUniqueGenres(films: Films) {
  const uniqueGenres = new Set([ALL_GENRES]);

  for (const film of films) {
    uniqueGenres.add(film.genre);
  }

  return [...uniqueGenres];
}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.allFilms = action.payload;
      state.genres = generateUniqueGenres(action.payload);
    })
    .addCase(changeLoadStatus, (state, action) => {
      state.isLoaded = action.payload;
    });
});


