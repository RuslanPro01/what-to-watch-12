import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch} from '../types/store';
import {State} from '../types/store';
import {AxiosInstance} from 'axios';
import {Film, Films} from '../types/films';
import {
  changeLoadStatusComments,
  changeLoadStatusFilm,
  changeLoadStatusFilms,
  loadComments,
  loadFilm,
  loadFilms
} from './action';
import {ApiRoute, LoadStatus} from '../services/const';
import {Comments} from '../types/comments';

type asyncActionsProps = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export const fetchFilmsAction = createAsyncThunk<void, undefined, asyncActionsProps> (
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(changeLoadStatusFilms(LoadStatus.Loading));
    const {data} = await api.get<Films>(ApiRoute.Films);
    dispatch(loadFilms(data));
    dispatch(changeLoadStatusFilms(LoadStatus.Loaded));
  }
);

export const fetchFilmAction = createAsyncThunk<void, string, asyncActionsProps> (
  'data/fetchFilm',
  async (filmId, {dispatch, extra: api}) => {
    dispatch(changeLoadStatusFilm(LoadStatus.Loading));
    const {data} = await api.get<Film>(ApiRoute.Film(filmId));
    dispatch(loadFilm(data));
    dispatch(changeLoadStatusFilm(LoadStatus.Loaded));
  }
);

export const fetchCommentsAction = createAsyncThunk<void, string, asyncActionsProps> (
  'data/fetchComments',
  async (filmId, {dispatch, extra: api}) => {
    dispatch(changeLoadStatusComments(LoadStatus.Loading));
    const {data} = await api.get<Comments>(ApiRoute.Comments(filmId));
    dispatch(loadComments(data));
    dispatch(changeLoadStatusComments(LoadStatus.Loaded));
  }
);
