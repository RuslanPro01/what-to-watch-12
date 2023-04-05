import {Films, films} from '../mock/films';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, setFilmsOfGenre} from './action';

export const ALL_GENRES = 'All Genres';

type InitialState = {
  genre: typeof genres[number];
  allFilms: Films;
  filteredFilms: Films;
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
  filteredFilms: films
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilmsOfGenre, (state) => {
      if (state.genre === ALL_GENRES) {
        state.filteredFilms = state.allFilms;
      } else {
        state.filteredFilms = state.allFilms.filter((film) => film.genre === state.genre);
      }
    });
});


