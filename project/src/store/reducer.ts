import {Films, films} from '../mock/films';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre} from './action';

type InitialState = {
  genre: typeof genres[number];
  allFilms: Films;
}

export const ALL_GENRES = 'All Genres';

const uniGenres = new Set<string>();
uniGenres.add(ALL_GENRES);

for (const film of films) {
  uniGenres.add(film.genre);
}
export const genres = [...uniGenres];

const initialState: InitialState = {
  genre: ALL_GENRES,
  allFilms: films,
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
});


