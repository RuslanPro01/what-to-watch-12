import {createAction} from '@reduxjs/toolkit';
import {Films} from '../types/films';

export const changeGenre = createAction<string>('main/changeGenre');
export const loadFilms = createAction<Films>('api/loadFilms');
export const changeLoadStatus = createAction<boolean>('api/changeLoadStatus');
