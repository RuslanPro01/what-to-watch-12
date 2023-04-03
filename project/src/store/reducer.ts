import {Films, films} from '../mock/films';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilmsOfGenre} from './action';

const ALL_GENRES = 'All Genres';

type InitialState = {
  genre: typeof genres[number];
  allFilms: Films;
  filteredFilms: Films | null;
}

const uniGenres = new Set<string>();
uniGenres.add(ALL_GENRES);

for (const film of films) {
  uniGenres.add(film.genre);
}
export const genres = [...uniGenres];

const initialState: InitialState = {
  genre: ALL_GENRES,
  allFilms: films,
  filteredFilms: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsOfGenre, (state) => {
      if (state.genre === ALL_GENRES) {
        state.filteredFilms = state.allFilms;
      } else {
        state.filteredFilms = state.allFilms.filter((film) => film.genre === state.genre);
      }
    });
});


