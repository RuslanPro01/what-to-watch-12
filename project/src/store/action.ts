import {createAction} from '@reduxjs/toolkit';
import {Film, Films} from '../types/films';
import {LoadStatuses} from '../types/load-statuses';
import {Comments} from '../types/comments';
import {AuthStatuses} from '../types/store';

export const changeGenre = createAction<string>('main/changeGenre');
export const loadFilms = createAction<Films>('api/loadFilms');
export const loadFilm = createAction<Film>('api/loadFilm');
export const loadComments = createAction<Comments>('api/loadComments');
export const changeLoadStatusFilms = createAction<LoadStatuses>('api/changeLoadStatusFilms');
export const changeLoadStatusFilm = createAction<LoadStatuses>('api/changeLoadStatusFilm');
export const changeLoadStatusComments = createAction<LoadStatuses>('api/changeLoadStatusComments');
export const changeAuthorizationStatus = createAction<AuthStatuses>('user/checkAuth');
export const setAuthorizationError = createAction<string>('user/setAuthorizationError');
