import {Film, Films} from '../types/films';
import {createReducer} from '@reduxjs/toolkit';
import {
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

type InitialState = {
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
    COMMENTS: string[] | null;
  };
}


const initialState: InitialState = {
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


