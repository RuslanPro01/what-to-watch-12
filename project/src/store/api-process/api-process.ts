import {ApiProcess} from '../../types/store';
import {ALL_GENRES, NameSpace} from '../../common-const';
import {LoadStatus} from '../../services/const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  fetchCommentsAction,
  fetchFilmAction,
  fetchFilmsAction, fetchPromoFilmAction,
  fetchSimilarFilmsAction,
  postUserCommentAction
} from '../async-actions';
import {Films} from '../../types/films';
import {LoadStatuses} from '../../types/load-statuses';

const initialState: ApiProcess = {
  genre: ALL_GENRES,
  allFilms: [],
  LoadStatus: {
    Films: LoadStatus.Unknown,
    SimilarFilms: LoadStatus.Unknown,
    Film: LoadStatus.Unknown,
    PromoFilm: LoadStatus.Unknown,
    Comments: LoadStatus.Unknown,
    PostComment: LoadStatus.Unknown
  },
  genres: [ALL_GENRES],
  MoviePage: {
    Film: null,
    PromoFilm: null,
    SimilarFilms: null,
    Comments: null
  }
};

function generateUniqueGenres(films: Films) {
  const uniqueGenres = new Set([ALL_GENRES]);

  for (const film of films) {
    uniqueGenres.add(film.genre);
  }

  return [...uniqueGenres];
}

export const apiProcess = createSlice({
  name: NameSpace.Api,
  initialState,
  reducers: {
    changeGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    changeLoadStatusSimilarFilms: (state, action: PayloadAction<LoadStatuses>) => {
      state.LoadStatus.SimilarFilms = action.payload;
    },
    changeLoadStatusPromoFilm: (state, action: PayloadAction<LoadStatuses>) => {
      state.LoadStatus.PromoFilm = action.payload;
    },
    resetSimilarFilms: (state) => {
      state.MoviePage.SimilarFilms = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.allFilms = action.payload;
        state.LoadStatus.Films = LoadStatus.Loaded;
        state.genres = generateUniqueGenres(action.payload);
      })
      .addCase(fetchFilmsAction.pending, (state) => {
        state.LoadStatus.Films = LoadStatus.Loading;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.LoadStatus.Films = LoadStatus.Fail;
      })

      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.MoviePage.Film = action.payload;
        state.LoadStatus.Film = LoadStatus.Loaded;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.LoadStatus.Film = LoadStatus.Loading;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.LoadStatus.Film = LoadStatus.Fail;
      })

      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.MoviePage.PromoFilm = action.payload;
        state.LoadStatus.PromoFilm = LoadStatus.Loaded;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.LoadStatus.PromoFilm = LoadStatus.Loading;
      })
      .addCase(fetchPromoFilmAction.rejected, (state) => {
        state.LoadStatus.PromoFilm = LoadStatus.Fail;
      })

      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.MoviePage.Comments = action.payload;
        state.LoadStatus.Comments = LoadStatus.Loaded;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.LoadStatus.Comments = LoadStatus.Loading;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.LoadStatus.Comments = LoadStatus.Fail;
      })

      .addCase(postUserCommentAction.fulfilled, (state, action) => {
        state.MoviePage.Comments = action.payload;
        state.LoadStatus.PostComment = LoadStatus.Loaded;
      })
      .addCase(postUserCommentAction.pending, (state) => {
        state.LoadStatus.PostComment = LoadStatus.Loading;
      })
      .addCase(postUserCommentAction.rejected, (state) => {
        state.LoadStatus.PostComment = LoadStatus.Fail;
      })

      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.MoviePage.SimilarFilms = action.payload;
        state.LoadStatus.SimilarFilms = LoadStatus.Loaded;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.LoadStatus.SimilarFilms = LoadStatus.Loading;
      })
      .addCase(fetchSimilarFilmsAction.rejected, (state) => {
        state.LoadStatus.SimilarFilms = LoadStatus.Fail;
      });
  }
});

export const {changeGenre, changeLoadStatusSimilarFilms, resetSimilarFilms, changeLoadStatusPromoFilm} = apiProcess.actions;
