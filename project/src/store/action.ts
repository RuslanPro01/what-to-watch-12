import {createAction} from '@reduxjs/toolkit';
import {Films} from '../types/films';
import {loadStatuses} from '../types/load-statuses';

export const changeGenre = createAction<string>('main/changeGenre');
export const loadFilms = createAction<Films>('api/loadFilms');
export const changeLoadStatus = createAction<loadStatuses>('api/changeLoadStatus');
