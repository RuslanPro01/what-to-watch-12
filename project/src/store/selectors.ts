import {createSelector} from '@reduxjs/toolkit';
import {State} from '../types/store';
import {ALL_GENRES} from '../common-const';

const selectAllFilms = (state: State) => state.allFilms;
const selectFilm = (state: State) => state.MoviePage.FILM;
const selectComments = (state: State) => state.MoviePage.COMMENTS;
const selectGenre = (state: State) => state.genre;
const selectLoadStatusFilms = (state: State) => state.LoadStatus.FILMS;
const selectLoadStatusFilm = (state: State) => state.LoadStatus.FILM;
const selectLoadStatusComments = (state: State) => state.LoadStatus.COMMENTS;
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

export const selectedLoadStatusFilms = createSelector(
  [selectLoadStatusFilms],
  (loadStatus) => loadStatus
);

export const selectedLoadStatusFilm = createSelector(
  [selectLoadStatusFilm],
  (loadStatus) => loadStatus
);

export const selectedLoadStatusComments = createSelector(
  [selectLoadStatusComments],
  (loadStatusComments) => loadStatusComments
);

export const selectedAllFilms = createSelector(
  [selectAllFilms],
  (allFilms) => allFilms
);

export const selectedFilm = createSelector(
  [selectFilm],
  (film) => film
);

export const selectedComments = createSelector(
  [selectComments],
  (comments) => comments
);

export const selectedGenres = createSelector(
  [selectGenres],
  (genres) => genres
);
