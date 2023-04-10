import {createSelector} from '@reduxjs/toolkit';
import {ALL_GENRES} from './store/reducer';
import {State} from './types/store';

const selectAllFilms = (state: State) => state.allFilms;
const selectGenre = (state: State) => state.genre;

export const selectFilteredFilms = createSelector(
  [selectAllFilms, selectGenre],
  (films, genre) => {
    if (genre === ALL_GENRES) {
      return films;
    }
    return films.filter((film) => film.genre === genre);
  }
);

