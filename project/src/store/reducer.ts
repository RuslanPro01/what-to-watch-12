import {Film, Films} from '../types/films';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeAuthorizationStatus,
  changeGenre,
  changeLoadStatusComments,
  changeLoadStatusFilm,
  changeLoadStatusFilms, loadComments,
  loadFilm,
  loadFilms
} from './action';
import {ALL_GENRES} from '../common-const';
import {LoadStatuses} from '../types/load-statuses';
import {LoadStatus} from '../services/const';
import {Comments} from '../types/comments';
import {AuthorizationStatus} from '../components/private-route/const';
import {AuthStatuses} from '../types/store';
import {loginAction} from './async-actions';

type InitialState = {
  authorizationStatus: AuthStatuses;
  authorizationError: string | null | unknown;
  genre: string;
  allFilms: Films;
  LoadStatus: {
    FILMS: LoadStatuses;
    FILM: LoadStatuses;
    COMMENTS: LoadStatuses;
  };
  genres: string[];
  MoviePage: {
    FILM: Film | null;
    COMMENTS: Comments | null;
  };
}


const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authorizationError: null,
  genre: ALL_GENRES,
  allFilms: [],
  LoadStatus: {
    FILMS: LoadStatus.Unknown,
    FILM: LoadStatus.Unknown,
    COMMENTS: LoadStatus.Unknown
  },
  genres: [ALL_GENRES],
  MoviePage: {
    FILM: null,
    COMMENTS: null
  }
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
    .addCase((changeAuthorizationStatus), (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loginAction.rejected, (state, action) => {
      state.authorizationError = action.payload;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.MoviePage.FILM = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.allFilms = action.payload;
      state.genres = generateUniqueGenres(action.payload);
    })
    .addCase(loadComments, (state, action) => {
      state.MoviePage.COMMENTS = action.payload;
    })
    .addCase(changeLoadStatusFilms, (state, action) => {
      state.LoadStatus.FILMS = action.payload;
    })
    .addCase(changeLoadStatusFilm, (state, action) => {
      state.LoadStatus.FILM = action.payload;
    })
    .addCase(changeLoadStatusComments, (state, action) => {
      state.LoadStatus.COMMENTS = action.payload;
    });
});


