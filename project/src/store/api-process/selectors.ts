import {State} from '../../types/store';
import {ALL_GENRES, NameSpace} from '../../common-const';
import {createSelector} from '@reduxjs/toolkit';

const selectAllFilms = (state: State) => state[NameSpace.Api].allFilms;
const selectFilm = (state: State) => state[NameSpace.Api].MoviePage.Film;
const selectComments = (state: State) => state[NameSpace.Api].MoviePage.Comments;
const selectGenre = (state: State) => state[NameSpace.Api].genre;
const selectLoadStatusFilms = (state: State) => state[NameSpace.Api].LoadStatus.Films;
const selectLoadStatusFilm = (state: State) => state[NameSpace.Api].LoadStatus.Film;
const selectLoadStatusComments = (state: State) => state[NameSpace.Api].LoadStatus.Comments;
const selectPostStatusComment = (state: State) => state[NameSpace.Api].LoadStatus.PostComment;
const selectGenres = (state: State) => state[NameSpace.Api].genres;

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

export const selectedPostStatusComment = createSelector(
  [selectPostStatusComment],
  (postStatusComment) => postStatusComment
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

export const selectedGenre = createSelector(
  [selectGenre],
  (genre) => genre
);

export const selectedGenres = createSelector(
  [selectGenres],
  (genres) => genres
);
