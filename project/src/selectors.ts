import {createSelector} from '@reduxjs/toolkit';
import {State} from './types/store';
import {ALL_GENRES} from './common-const';

const selectAllFilms = (state: State) => state.allFilms;
const selectGenre = (state: State) => state.genre;
const selectLoadStatus = (state: State) => state.isLoaded;
const selectGenres = (state: State) => state.genres;

export const selectFilteredFilms = createSelector(
  [selectAllFilms, selectGenre],
  (films, genre) => {
    if (genre === ALL_GENRES) {
      return films;
    }
    return films.filter((film) => film.genre === genre);
  }
);

export const selectedLoadStatus = createSelector(
  [selectLoadStatus],
  (loadStatus) => loadStatus
);

export const selectedAllFilms = createSelector(
  [selectAllFilms],
  (allFilms) => allFilms
);

export const selectedGenres = createSelector(
  [selectGenres],
  (genres) => genres
);
