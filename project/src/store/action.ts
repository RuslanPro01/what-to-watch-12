import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('main/changeGenre');
export const getFilmsOfGenre = createAction('getFilmsOfGenre');
