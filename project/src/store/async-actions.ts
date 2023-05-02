import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/store';
import {AxiosInstance} from 'axios';
import {Film, Films} from '../types/films';
import {ApiRoute} from '../services/const';
import {Comments} from '../types/comments';
import {AuthUserData, User} from '../types/user';
import {saveToken} from '../services/token';
import {userComment} from '../types/user-cooment';

type asyncActionsProps = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export const fetchFilmsAction = createAsyncThunk<Films, undefined, asyncActionsProps> (
  'data/fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Films>(ApiRoute.Films);
    return data;
  }
);

export const fetchSimilarFilmsAction = createAsyncThunk<Films, string, asyncActionsProps> (
  'data/fetchSimilarFilms',
  async (id, {extra: api}) => {
    const {data} = await api.get<Films>(ApiRoute.SimilarFilms(id));
    return data;
  }
);

export const fetchFilmAction = createAsyncThunk<Film, string, asyncActionsProps> (
  'data/fetchFilm',
  async (filmId, {extra: api}) => {
    const {data} = await api.get<Film>(ApiRoute.Film(filmId));
    return data;
  }
);

export const fetchCommentsAction = createAsyncThunk<Comments, string, asyncActionsProps> (
  'data/fetchComments',
  async (filmId, {extra: api}) => {
    const {data} = await api.get<Comments>(ApiRoute.Comments(filmId));
    return data;
  }
);

export const checkAuthStatus = createAsyncThunk<User, undefined, asyncActionsProps> (
  'user/checkAuthStatus',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<User>(ApiRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<User, AuthUserData, asyncActionsProps> (
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<User>(ApiRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  },
);

export const logOutAction = createAsyncThunk<void, undefined, asyncActionsProps> (
  'user/logOut',
  async (user, {extra: api}) => {
    await api.delete<User>(ApiRoute.LogOut, user);
  }
);

export const postUserCommentAction = createAsyncThunk<Comments, userComment, asyncActionsProps> (
  'api/postComment',
  async ({comment, rating, filmId}, {extra: api}) => {
    const {data} = await api.post<Comments>(ApiRoute.Comments(filmId), {comment, rating});
    return data;
  }
);

